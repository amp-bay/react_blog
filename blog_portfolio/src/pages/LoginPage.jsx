import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { getUsername, signIn } from "@/services/apiBlogs";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { Link,  useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import TextSpinner from '../ui_components/TextSpinner'

const LoginPage = ({setIsAuthenticated,setUsername}) => {
    const {register, handleSubmit,formState ,reset,}=useForm()
    const location=useLocation()
    const navigate=useNavigate()

    const {errors}=formState
    const mutation=useMutation({
        mutationFn:(data)=>signIn(data),
        onSuccess:(response)=>{
            
            localStorage.setItem('refresh',response.refresh)
            localStorage.setItem('access',response.access)
            getUsername().then(response=>setUsername(response.username))
            toast.success("SUCCESSFULLY lOGGED IN ")
            const from =location?.state?.from?.pathname || "/"
            navigate(from,{replace:true})
            // console.log(location.state);
            setIsAuthenticated(true)

            
            // reset()
           
        },
        onError:(error)=>{
            toast.error(error.message,"Error, Try again ")
        }
    })

    function onSubmit(data){
        // console.log(data)
        mutation.mutate(data)

    }

    // const mutation=useMutation{
    //     mutationfn:()=>()
    // }



  return (
    <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:px-16 px-8 py-6 flex flex-col mx-auto my-9 
        items-center gap-4 w-fit rounded-lg bg-[#FFFFFF] shadow-xl 
        dark:text-white dark:bg-[#141624]"
    >
        <div className="flex flex-col gap-2 justify-center items-center mb-2">
        <h3 className="font-semibold text-2xl">Signin Form</h3>
        <p>Welcome back! Log in to continue.</p>
        </div>

        <div>
            <Label htmlFor="username" className="dark:text-[97989F]">
                Username
            </Label>
            <Input
                type="text"
                id="username"
                disabled={mutation.isPending}
                placeholder="Enter username"
                {...register("username",
                    {required:"Please provide your username"}

                )}
                
                className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
            />
            {errors?.username?.message && <small  className="text-red-600">{errors.username.message}</small>}
            
            
        </div>

        <div>
            <Label htmlFor="password">Password</Label>
            <Input
                type="password"
                id="password"
                disabled={mutation.isPending}
                placeholder="Enter password"
                {
                    ...register("password",{
                        required:"Provide a Password"
                    })
                }
                
                className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px]  w-[300px]"
            />
            {errors?.password?.message && <small className="text-red-600">{errors.password.message}</small>}
        
        
        </div>

        <div className="w-full flex items-center justify-center flex-col my-4">
            <button disabled={mutation.isPending} className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md flex items-center justify-center gap-2">
                {mutation.isPending? <TextSpinner text="Signing up" /> :<small className="text-[16px]">Signin</small>
}
            </button>
            <p className="text-[14px]">
                Don't have an account? <Link to="/signup">signup</Link>
            </p>
        </div>
    </form>
);
  
}

export default LoginPage