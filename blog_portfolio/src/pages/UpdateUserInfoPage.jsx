import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { updateUserProfile } from "@/services/apiBlogs";

import TextSpinner from "@/ui_components/TextSpinner";
import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdateUserInfoPage = ({userInfo,toggleShowModal}) => {
    const {register,handleSubmit,formState}=useForm({defaultValues:userInfo?userInfo :" "})
    // console.log("hello",userInfo)

    const {errors}=formState
    const navigate=useNavigate()

    const queryClient=useQueryClient()
    
    

    const mutation=useMutation({
        mutationFn:(data)=>updateUserProfile(data),
        onSuccess:()=>{
            toast.success('Updated info ')
            toggleShowModal()
            queryClient.invalidateQueries({queryKey: ["users", userInfo?.username]})
            navigate(`/profile/${userInfo.username}/`)
            


        },
        onError:(error)=>{
            toast.error('unable to update information')

        }
    })

    function onSubmit(data){

        const formData=new FormData()
        
        formData.append("username", data.username);
        formData.append("first_name", data.first_name);
        formData.append("last_name", data.last_name);
        formData.append("email", data.email);
        formData.append("bio", data.bio);
        formData.append("job_title", data.job_title);
        formData.append("twitter", data.twitter);
        formData.append("linkedin", data.linkedin);
        formData.append("instagram", data.instagram);
        formData.append("portfolio", data.portfolio);

     
        if (data.profile && data.profile[0]) {
            formData.append("profile", data.profile[0]); 
        }

        mutation.mutate(formData);

    }

    
  return (
    // <div className="padding-dx max-container py-9 ">

        <form
        onSubmit={handleSubmit(onSubmit)}
            // onSubmit={handleSubmit(OnSubmit)}
        className=" h-[90%] overflow-auto md:px-16 px-8 py-6 flex flex-col mx-auto my-9 items-center gap-4 w-fit 
        rounded-lg bg-[#FFFFFF] shadow-xl dark:text-white dark:bg-[#141624]
         ">
            <div className="flex flex-col gap-2 justify-center items-center mb-2">
                <h3 className="font-semibold text-2xl">Update User Form</h3>
                <p>Update {userInfo.username}'s Information</p>
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

            <div className='w-full'>
                <Label htmlFor='profile'>Profile</Label>
                <Input
                    type='file'
                    id='profile'
                    placeholder='Provide An Image'
                    
                    { 
                        ...register("profile",{
                            required:"An image is required",
        
                        })
                    }
                    className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-full"
                />
                {errors?.profile?.message ? <small className='text-red-500'>{errors.profile.message}</small>: ""}
            </div>




            

            <div>
                <Label htmlFor="bio">Bio</Label>
                
                <Textarea
                
                id="bio"
                placeholder="Enter a Bio"
                {...register("bio",
                    {
                        required:"bio is required",
                        minLength:{
                        value:20,
                        message:"Bio must be at least 20 Characters"
                        }
                    })
                }
                className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
                />
                {errors?.bio?.message && (<small className="text-red-700">{errors.bio.message}</small>)}

            </div>

            <div>
                <Label htmlFor="job_title">Job Title</Label>
                
                <Input
                type="text"
                id="job_title"
                placeholder="Enter a Jbb title "
                {...register("job_title",
                    {
                        required:"Job title is required",
                        minLength:{
                        value:10,
                        message:"Jbb title must be more than 10 characters"
                        }
                    })
                }
                className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
                />
                {errors?.job_title?.message && (<small className="text-red-700">{errors.job_title.message}</small>)}

            </div>
            <div>
                <Label htmlFor="twitter">Twitter</Label>
                
                <Input
                type="text"
                id="twitter"
                placeholder="Enter a twitter link "
                {...register("twitter",
                    {
                        required:"twitter link is required",
                        
                    })
                }
                className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
                />
                {errors?.twitter?.message && (<small className="text-red-700">{errors.twitter.message}</small>)}

            </div>
            <div>
                <Label htmlFor="linkedin">LinkedIn</Label>
                
                <Input
                type="text"
                id="linkedin"
                placeholder="Enter linkedin account "
                {...register("linkedin",
                    {
                        required:"linkedin account is required",
                        
                    })
                }
                className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
                />
                {errors?.linkedin?.message && (<small className="text-red-700">{errors.linkedin.message}</small>)}

            </div>
            <div>
                <Label htmlFor="instagram">Instagram</Label>
                
                <Input
                type="text"
                id="instagram"
                placeholder="Enter a Instagram Acoount"
                {...register("instagram",
                    {
                        required:"An Instagram account is required",
                    
                    })
                }
                className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
                />
                {errors?.instagram?.message && (<small className="text-red-700">{errors.instagram.message}</small>)}

            </div>
            <div>
                <Label htmlFor="portfolio">Portfolio</Label>
                
                <Input
                type="text"
                id="portfolio"
                placeholder="Enter "
                {...register("portfolio",
                    {
                        required:"portfolio is required",
                    
                    })
                }
                className="border-2 border-[#141624] dark:border-[#3B3C4A] focus:outline-0 h-[40px] w-[300px]"
                />
                {errors?.portfolio?.message && (<small className="text-red-700">{errors.portfolio.message}</small>)}

            </div>









            <div className="w-full flex items-center justify-center flex-col my-4">
                <button className="bg-[#4B6BFB] text-white w-full py-3 px-2 rounded-md flex items-center justify-center gap-2">
                {/* {mutation.isPending ?  <TextSpinner text="Currently Creating New User..." /> :<small className="text-[16px]">SignUp</small> } */}
                {mutation.isPending ? ( <TextSpinner text="Currently Updating ..." />) :(<small className="text-[16px]">Update info </small>)}
                
                </button>
                <p className="text-[14px]">
                {/* Already have an account? Sign in */}
                {/* Already have an account? <Link to="/signin">Sign In</Link> */}
                </p>
            </div>
        </form>
    // </div>
  )
}

export default UpdateUserInfoPage