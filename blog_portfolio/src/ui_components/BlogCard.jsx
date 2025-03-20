import { Link } from "react-router-dom"
// import thumbnail from "../images/one.png"
import Badge from "./Badge"
import CardFooter from "./CardFooter"
import { BASE_URL } from "@/api"

function BlogCard({blog}) {
  return (
    <div className=" px-3 py-3 rounded-md w-[300px] h-auto flex flex-col gap-4 dark:border-gray-800 border shadow-lg">
        <div className="w-full h-[200px] border rounded-md overflow-hidden">
        <img
            // src={`${BASE_URL}${blog.thumbnail}`}
            src={`${BASE_URL}${blog.thumbnail}`}
            
            className="w-full h-full object-cover rounded-lg"
        />
        </div>

        <Badge blog={blog}/>
        
        <h3 className="font-semibold  leading-normal text-[#181A2A] mb-0 dark:text-white">
            <Link to={`/get_blogs/${blog.slug}`}>
                {blog.title}
            </Link>
            
        </h3>

        <CardFooter blog={blog}/>
  </div>
  )
}

export default BlogCard