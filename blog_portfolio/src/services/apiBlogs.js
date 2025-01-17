import api from "@/api";

export async function getBlog(){
    try{
        const response =await api.get('list_blog/')
        return response.data
    }
    catch{
        throw new Error(err.message)
    }

}