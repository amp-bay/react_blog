import api from "@/api";

export async function getBlog(page){
    try{
        const response =await api.get(`list_blog/?page=${page}`)
        return response.data
    }
    catch(Error){
        throw new Error(err.message)
    }

}

export async function getSingleBlog(slug){
    try{
        const response=await api.get(`get_blogs/${slug}`)
        return response.data
        

    }
    catch(error){
        throw new Error(error.message)

    }
}

export async function signUp(data){
    try{
        const response= await api.post('register_user/',data)
        return response.data

    }catch(error){
        if (error.status===400){
            throw new Error("username already exists")
        }
        throw new Error (error)

    }
}

export async function signIn(data){
    try{
        const response = await api.post('token/',data)
        return response.data

    }catch(error){
        if (error.status=== 401){
           throw new Error("Access Denied","unauthorized")
        }
        throw new Error (error)

    }
    

}

 export async function getUsername(){
    try{
        const response=await api.get('get_username/')
        return response.data

    }catch(error){
        throw new Error(error.message)

    }

}

export async function createBlog(data){
    try{
        const response=await api.post('create_blog/',data)
        return response.data
    }
    catch(error){
        throw new Error(error.message)
    }
}


export async function updateBlog(data,id) {
    try{
        const response= await api.put(`update_blog/${id}/`,data)
        return response.data

    }catch(error){
        throw new Error(error)

    }
    
}

export async function deleteBlog(id){
    try{
        const response=await api.post(`delete_blog/${id}/`)
        return response.data     
    }catch(error){
        throw new Error(error)

    }
    
}
// JUST IN CASE THIS WAS THE CORRECT ONE 

// export async function updateUserProfile(data,id){

//     try{
//         const response =await api.put(`update_user_profile/${id}`,data)
//         return response.data
//     }catch(error){
        
//         throw new Error(error)
//     }
// }
export async function updateUserProfile(data){

    try{
        const response =await api.put('update_user_profile/',data)
        // console.log("updating userInfo :",error)
        return response.data
    }catch(error){
        throw new Error(error)
    }
}



export async function getUserInfo(username){
    try{
      const response = await api.get(`get_user_info/${username}`)
      return response.data
    }
    catch(err){
      throw new Error(err.message)
    }
}

// export async function updateUserInfo(){
//     try{
//         const response =await api.put("")

//     }catch(error){
//         throw new Error(error.message)
//     }
// }



