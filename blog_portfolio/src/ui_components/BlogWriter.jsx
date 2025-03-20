import { BASE_URL } from "@/api"
import { formatDate } from "@/services/formatDate"
import { Link } from "react-router-dom"


const BlogWriter = ({Blogs}) => {
  return (
    <Link to={`/profile/${Blogs.author.username}`}>
      <div className="flex items-center gap=4 ">

        
        <span className="flex items-center gap-2">
          <div className="w-[40px] h-[40px] rounded-full overflow-hidden">
            <img
              src={`${BASE_URL}${Blogs.author.profile}`}
              className="c rounded-full w-full h-full object-cover"
            />
          </div>

          <small className="text-[#696A75] text-[14px]">
            {Blogs.author.first_name} {Blogs.author.last_name}
          </small>
        </span>

        <small className="text-[#696A75] text-[14px] ml-3">
          {/* {Blogs.published_time} */}
          {formatDate(Blogs.published_time)}
        </small>


      </div>
    </Link>
  )
}

export default BlogWriter