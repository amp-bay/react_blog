import { useState } from "react";

import BlogContainer from "@/ui_components/BlogContainer";
import Header from "@/ui_components/Header";
import PaginationPage from "../ui_components/PaginationPage";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getBlog } from "@/services/apiBlogs";


const HomePage = () => {
  const [page, setPage] = useState(1);
  const numOfBlogsPerPage = 4;

  const { isPending, isError, error, data } = useQuery({
    queryKey: ["blogs", page],
    queryFn: () => getBlog(page),
    placeholderData: keepPreviousData,
    // keepPreviousData: false,
  });

  const blogs = data?.results || [];
  
  const countNumber=data?.count
  const numOfPages = Math.ceil(data?.count / numOfBlogsPerPage);
  // console.log(numOfPages +"helo")
  // console.log(countNumber +' '+'count')
  // console.log("number oooo",blogs)

  function handleSetPage(val) {
    setPage(val);
  }

  function increasePageValue() {
    setPage((curr) => curr + 1);
  }

  function decreasePageValue() {
    setPage((curr) => curr - 1);
  }

  return (
    <>
      <Header blogs={blogs} />
      <BlogContainer className='border-2 border-red-600' isPending={isPending} blogs={blogs} />
      <PaginationPage
        increasePageValue={increasePageValue}
        decreasePageValue={decreasePageValue}
        page={page}
        numOfPages={numOfPages}
        handleSetPage={handleSetPage}
      />
    </>
  );
};

export default HomePage;