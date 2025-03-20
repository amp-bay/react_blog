import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@radix-ui/react-label'
import { useForm } from 'react-hook-form'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { createBlog, updateBlog } from '@/services/apiBlogs'
import TextSpinner from '@/ui_components/TextSpinner'
import { MdCancel } from "react-icons/md";
import { useState } from 'react'
import LoginPage from './LoginPage'





export const CreatePostPage = ({isAuthenticated,editBlogValue,handleEditBlog ,Blogs}) => {
    const [updatedModalBlog,setUpdatedModalBlog]=useState(editBlogValue)

    const blogID=Blogs?.id

    const {register,handleSubmit,setValue,formState,}=useForm({defaultValues:Blogs? Blogs:" "})
    const {errors}=formState
    const navigate=useNavigate()
    const queryClient=useQueryClient()


    const updateMutation =useMutation({
        mutationFn:({data,id})=>updateBlog(data,id),
        onSuccess:()=>{
            toast.success("Blog has been updated")
            navigate("/")


        },
        onError:(error)=>{
            toast.error(error)

        }
    })

    const mutation=useMutation({
        mutationFn:(data)=>createBlog(data),
        onSuccess:()=>{
            toast.success("New Blog has been created")
            queryClient.invalidateQueries({queryKey:["blogs"]})
            navigate("/")
            // reset()

        },
        onError:(error)=>{
            toast.error( error.message,"Unable to create Blog")
            // if (error.response?.data?.message) {
            //     toast.error(`Unable to create Blog: ${error.response.data.message}`);
            // } else {
            //     toast.error("Unable to create Blog. Please try again.");
            // }


        }
    })

    function onSubmit(data){
        // console.log(data)
        // since it contains an image , i need to use formData to append all the field 
        // mutation.mutate(data)

        const formData=new FormData()
        formData.append("title",data.title)
        formData.append("content",data.content)
        formData.append("category",data.category)
        
        if(data.thumbnail && data.thumbnail[0] && data.thumbnail[0] !== "/"){
            formData.append("thumbnail",data.thumbnail[0])
            // console.log([...formData.entries()])
   
            for (let [key, value] of formData.entries()) {
                // console.log(`${key}: ${value}`);    
            }
        }else{
            console.error("Invalid thumbnail. Ensure it's a valid file.");

        }


        


        if(Blogs && blogID){
            updateMutation.mutate({data:formData, id:blogID})
        }else{
        mutation.mutate(formData)
        }
      

        // setUpdatedModalBlog()

        // if (data.thumbnail && data.thumbnail[0] instanceof File) {
        //     formData.append("thumbnail", data.thumbnail[0]);
        // } else {
        //     console.error("Invalid thumbnail. Ensure it's a valid file.");
        // }

        

    }

    function headerUpdate(){
        console.log("before clickking",updatedModalBlog)
        setUpdatedModalBlog(
            (curr)=>{
                const localValue=!curr
                // console.log("after clickking",localValue)
                return localValue
            })

        handleEditBlog()
    }

    // if(!isAuthenticated){
    //     return <LoginPage/>
    // }
    



  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`${
        Blogs && "h-[90%] overflow-auto"
      }  md:px-16 px-8 py-6 flex flex-col mx-auto my-9 items-center gap-6 w-fit rounded-lg bg-[#FFFFFF] shadow-xl dark:text-white dark:bg-[#141624]`}>
        
        { Blogs || updatedModalBlog ? <div className=' flex flex-col gap-2 justify-center items-center mb-2 '>
            <div className='flex justify-between gap-4'>
                <h3 className="font-semibold text-2xl">
                    Update Post        
                </h3>
                <MdCancel onClick={headerUpdate} className='text-3xl cursor-pointer' />
            </div>
            
            <p className="max-sm:text-[14px]">
                Do you want to update your post
            </p>
            
        </div>:
        <div className=' flex flex-col gap-2 justify-center items-center mb-2 cursor-pointer '>
            <h3 className="font-semibold text-2xl">
                Creat a Post 
                
            </h3>
            <p>Create a new post and share your ideas.</p>
            
        </div>
        
        }
        
        <div className='dark:text-[97989F]'>
            <Label htmlFor='title'>Title</Label>
            <Input
                type='text'
                id='title'
                placeholder='Put in a Title '
                {...register('title',{
                    required:"Title is required",
                    minLength:{
                        value:5,
                        message:"Title must be more than 5 characters"
                    }
                })}
                className='border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[400px]'
            />
            

            {errors?.title?.message ? <small className='text-red-500'>{errors.title.message}</small> : ""}
        </div>

        <div>
            <Label htmlFor=''>Content</Label>
            <Textarea
                type='text'
                id='content'
                placeholder='What is on your mind?'
                {
                    ...register('content',
                        {
                            required:"Content is required",
                            minLength:{
                                value:40,
                                message:"Content must be more than 40 characters"
                            }
                        }
                    )
                }
                className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[180px]  w-[400px] text-justify"
            />
                {errors?.content?.message ? <small className='text-red-500'>{errors.content.message}</small> : ""}
        </div>


        <div  className='w-full'>
            <Label htmlFor='category'>Category</Label>
            <Select {...register("category",{required:"Category is required"})} onValueChange={(value)=>setValue("category",value,)} defaultValue={Blogs?Blogs.category: " "}>
                <SelectTrigger className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-full">
                    <SelectValue placeholder="Select your Category" />
                </SelectTrigger>
                <SelectContent >
                    <SelectGroup  className='bg-slate-500'>
                        <SelectLabel  >Categories</SelectLabel>
                        <SelectItem  value="ui/ux">UI/UX</SelectItem>
                        <SelectItem value="FrontEnd">FrontEnd</SelectItem>
                        <SelectItem value="BackEnd">BackEnd</SelectItem>
                        <SelectItem value="Graphic">Graphic Designer</SelectItem>
                        <SelectItem value="Product">Product Manager </SelectItem>
                        <SelectItem value="Project">Project Manager</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            {errors?.category?.message ? <small>{errors.category.message}</small> : " "}
        </div>

        <div className='w-full'>
            <Label htmlFor='thumbnail'>thumbnail</Label>
            <Input
                type='file'
                id='thumbnail'
                placeholder='Provide An Image'
                
                { 
                    ...register("thumbnail",{
                        required: Blogs ?false :"An image is required",
    
                    })
                }
                className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-full"
            />
            {errors?.thumbnail?.message ? <small className='text-red-500'>{errors.thumbnail.message}</small>: ""}
        </div>

        <div className="w-full flex items-center justify-center flex-col my-4">

            <button className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md flex items-center justify-center gap-2">
              {
               updatedModalBlog ? ( updateMutation.isPending ? (<TextSpinner text="updating your post"/>) :"Update post" ): ( mutation.isPending ?  <TextSpinner text="creating your post"/> :"Create post")
              }

            
                
            
            </button>

        </div>

        
        
        
        
      
    </form>
  )
}
