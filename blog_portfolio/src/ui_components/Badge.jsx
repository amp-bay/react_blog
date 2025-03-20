

const Badge = ({Blogs,blog}) => {
  return (
    <span className="px-2 py-[3px] text-[12px] font-semibold bg-[#4B6BFB] text-[#FFFFFF] rounded-sm self-start">
      {/* {blog.category} */}
      {blog?.category}
      {Blogs?.category}
      
    </span>
  )
}

export default Badge