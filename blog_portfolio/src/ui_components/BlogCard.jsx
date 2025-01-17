import { Link } from "react-router-dom"
import thumbnail from "../images/one.png"
import Badge from "./Badge"
import CardFooter from "./CardFooter"

function BlogCard() {
  return (
    <div className=" px-3 py-3 rounded-md w-[300px] h-auto flex flex-col gap-4 dark:border-gray-800 border shadow-lg">
        <div className="w-full h-[200px] border rounded-md overflow-hidden">
        <img
            src={thumbnail}
            className="w-full h-full object-cover rounded-lg"
        />
        </div>

        <Badge/>
        
        <h3 className="font-semibold  leading-normal text-[#181A2A] mb-0 dark:text-white">
            <Link to='/detail'>
                Build and Ecommerce Web App with Django and React
            </Link>
            
        </h3>

        <CardFooter />
  </div>
  )
}

export default BlogCard