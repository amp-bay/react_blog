import { getBlog } from '@/services/apiBlogs'
import BlogContainer from '@/ui_components/BlogContainer'
import Header from '@/ui_components/Header'
import { useQuery } from '@tanstack/react-query'


const Homepages = () => {

const{ isPending, isError,error, data:blogs}=useQuery({
    queryKey:['blogs'],
    queryFn: getBlog
  })

  console.log(blogs)

  return (
    <>
        <Header />
        <BlogContainer/>
    </>
  )
}

export default Homepages