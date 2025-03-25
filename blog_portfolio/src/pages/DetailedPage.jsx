import Badge from "@/ui_components/Badge"
import BlogWriter from "@/ui_components/BlogWriter"
import banner from "../images/banner.jpeg"
import { useMutation, useQuery } from "@tanstack/react-query"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import { deleteBlog, getSingleBlog } from "@/services/apiBlogs"
import Spinner from "@/ui_components/Spinner"
import { BASE_URL } from "@/api"
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineDeleteOutline } from "react-icons/md"
import Modal from "@/ui_components/Modal"
import { CreatePostPage } from "./CreatePostPage"
import { useState } from "react"
import { toast } from "react-toastify"





const DetailPage = ({isAuthenticated, username}) => {
  
  const [editBlogValue,setEditBlogValue]=useState(false)
  const navigate=useNavigate()

  const {slug}=useParams()

  const {isPending,isError,error,data:Blogs}=useQuery({
    queryKey:['get_blogs',slug],
    queryFn:()=>getSingleBlog(slug),
   
  })

 const blogID=Blogs?.id

  const deleteMutation=useMutation({
    mutationFn:(id)=>deleteBlog(id),
    onSuccess:()=>{
      toast.success("BlOG HAS BEEN DELETED ")
      navigate('/')

    },
    onError:(error)=>{
      toast.error(error.message)
    }
  })

  function handleDeleteBlog(){
    const popUp = window.confirm(" are you sure you want to delete this post ?")
    if (popUp){
      deleteMutation.mutate(blogID) 
    }
    
  }
  
  
  if(isPending)
    return <Spinner/>

  if(isError)
    return <h2>{error.message}</h2>


  function  handleEditBlog() {
    // console.log("Default In Detailed Page",editBlogValue)
    setEditBlogValue(
      (curr)=>{
        const updtaedValueState=!curr
        // console.log("after In Detailed Page",updtaedValueState)
        return updtaedValueState
      } 
    )
    
    
  }
    

  return (
    <>
      <div className="padding-dx max-container py-9">
        <Badge Blogs={Blogs}/>

        <div className="flex justify-between items-center">
          <h2 className="py-6 leading-normal text-2xl md:text-3xl text-[#181A2A] tracking-wide font-semibold dark:text-[#FFFFFF]">
            {/* Build and Ecommerce Web App with Django and React */}
            {Blogs.title}
          </h2>
          { isAuthenticated && username === Blogs.author.username && (<span className="flex justify-between items-center gap-2">
            <AiFillEdit  onClick={handleEditBlog} className="dark:text-white text-3xl cursor-pointer" />
            <MdOutlineDeleteOutline onClick={handleDeleteBlog} className="dark:text-white text-3xl cursor-pointer"/>

          </span>)}
          
        </div>

        <BlogWriter Blogs={Blogs}/>

        <div className="w-full h-[350px] my-9 overflow-hidden rounded-sm">
          <img className="w-full h-full object-center rounded-sm" src={`${BASE_URL}${Blogs.thumbnail}`} />
        </div>
        <p className="text-[16px] leading-[2rem] text-justify text-[#3B3C4A] dark:text-[#BABABF]">


          {Blogs.content}
        </p>
      </div>
      {editBlogValue ? (<Modal><CreatePostPage editBlogValue={editBlogValue}  Blogs={Blogs} handleEditBlog={handleEditBlog}/></Modal>): ""}
      
    </>
  )
}

export default DetailPage