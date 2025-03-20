import { getUserInfo } from "@/services/apiBlogs";
import BlogContainer from "@/ui_components/BlogContainer";
import Hero from "@/ui_components/Hero";
import Modal from "@/ui_components/Modal";
import Spinner from "@/ui_components/Spinner";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import UpdateUserInfoPage from "./UpdateUserInfoPage";
import { useState } from "react";
import LoginPage from "./LoginPage";

const ProfilePage = ({LoggedInUser,isAuthenticated} ) => {
  const {username}=useParams()

  const [showModal,setShowModal]=useState(false)

  function toggleShowModal(){
    setShowModal((curr)=>{
      const toggleCurrentValue=!curr
    return toggleCurrentValue}
    )
  }

  // const query=useQuery({
  //   queryKey:['users',username],
  //   queryFn:()=>getUserInfo(username)
  // })

  const {isPending,data} = useQuery({
    queryKey: ["users", username],
    queryFn: () => getUserInfo(username)
  })


  if(isPending){
    return <Spinner/>
  }
  
  const blogs=data?.author_posts || []

  // if (!isAuthenticated){
  //   return LoginPage
  // }
  

  return (
    <>
    {isAuthenticated ? (
      <>
        <Hero toggleShowModal={toggleShowModal} LoggedInUser={LoggedInUser} data={data} />
        <BlogContainer data={data} blogs={blogs} title={`${username}'s Posts`} />
        {showModal && (
          <Modal toggleShowModal={toggleShowModal}>
            <UpdateUserInfoPage toggleShowModal={toggleShowModal} userInfo={data} />
          </Modal>
        )}
      </>
    ) : (
      <LoginPage />
    )}
  </>
  );
};

export default ProfilePage;