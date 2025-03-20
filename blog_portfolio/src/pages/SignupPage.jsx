import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signUp } from "@/services/apiBlogs";
import TextSpinner from "@/ui_components/TextSpinner";
import Spinner from "@/ui_components/Spinner";
import { useMutation } from "@tanstack/react-query";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";



const SignupPage = () => {
  const { register, handleSubmit, formState, reset, watch } = useForm();
  const {errors}=formState
  const password =watch('password')
  const navigate=useNavigate()

 
   
  const mutation=useMutation({
    mutationFn:(data)=>signUp(data),
    onSuccess:()=>{
      toast.success("Successful! You got an Account to your name ")
      navigate("/login")
      reset()
    },
    onError:(error)=>{
      toast.error(error.message)
    }
  })

   function OnSubmit(data){
    mutation.mutate(data)
  }

  return (
    <form
        onSubmit={handleSubmit(OnSubmit)}
      className="md:px-16 px-8 py-6 flex flex-col mx-auto my-9 items-center gap-4 w-fit 
    rounded-lg bg-[#FFFFFF] shadow-xl dark:text-white dark:bg-[#141624]"
      
    >
      <div className="flex flex-col gap-2 justify-center items-center mb-2">
        <h3 className="font-semibold text-2xl">SignUp Form</h3>
        <p>Create your account to get started!</p>
      </div>

      <div>
        <Label htmlFor="username" className="dark:text-[97989F]">
          Username
        </Label>
        <Input
          type="text"
          id="username"
          placeholder="Enter username"
          {...register("username",
                {required: "Kindly Provide a Username",
                    minLength:
                    {
                        value:3,
                        message:"Username must be at least 3 characters", 
                    }
                }
            )
          }
         
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.username?.message && <small className="text-red-700">{errors.username.message}</small>}
        
      </div>

      <div>
        <Label htmlFor="first_name">First Name</Label>
        <Input
          type="text"
          id="first_name"
          placeholder="Enter first name"
          {...register("first_name",
            {required:"first name is required",
                minLength:{value:2, message:"first name must be more than 2 characters"}
            }
          )}
         
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.first_name?.message &&( <small className="text-red-700">{errors.first_name.message}</small>)}
      </div>

      <div>
        <Label htmlFor="last_name">Last Name</Label>
        <Input
          type="text"
          id="last_name"
          placeholder="Enter last name"
          {...register("last_name",
            {required:"last name is required",
                minLength:{value:2,message:"please provide your last name "}
            }
          )}

          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.last_name?.message && (
          <small className="text-red-700">{errors.last_name.message}</small>
        )}
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        
        <Input
          type="email"
          id="email"
          placeholder="Enter your email"
          {...register("email",
              {
                required:"Email is required",
                minLength:{
                  value:10,
                  message:"Email must be valid"
                }
              })
          }
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.email?.message && (<small className="text-red-700">{errors.email.message}</small>)}

      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          placeholder="Enter password"
          {...register("password",
            {required:"Kindly provide a safe password",
                minLength:
                {
                    value:8,
                    message:"Weak Password "
                }

            }
          )}
          
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.password?.message && (
          <small className="text-red-700">{errors.password.message}</small>
        )}
      </div>

      <div>
        <Label htmlFor="confirmPassword">Confirm Password</Label>
        <Input
          type="password"
          id="confirmPassword"
          placeholder="Confirm password"
          {...register("confirmPassword",
            {
                required:"Kindly provide a safe password",
                minLength:{
                    value:8,
                    message:"Weak Password"
                },  
                validate:(value)=>value===password || "password do not match"
            },
            
          )}
          
          
          className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
        />
        {errors?.confirmPassword?.message && <small className="text-red-700">{errors.confirmPassword.message}</small>}
        
      </div>

      <div className="w-full flex items-center justify-center flex-col my-4">
        <button className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md flex items-center justify-center gap-2">
          {mutation.isPending ?  <TextSpinner text="Currently Creating New User..." /> :<small className="text-[16px]">SignUp</small> }
          
        </button>
        <p className="text-[14px]">
          Already have an account? Sign in
          {/* Already have an account? <Link to="/signin">Sign In</Link> */}
        </p>
      </div>
    </form>
  );
};

export default SignupPage;