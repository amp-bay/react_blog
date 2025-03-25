import { BASE_URL } from '@/api'
import HeaderBanner from '../images/banner.jpeg'

function Header({blogs}) {

  const selectedHeaderDisplay=blogs.length/2 === 0? blogs[0] : blogs[blogs.length-1];
  // console.log("selectedHeaderDisplay",selectedHeaderDisplay)
  return (
    <section className='max-container  padding-x py-4 relative bg-white dark:bg-[#141624] '>
        <div className='w-full h-[300px] overflow-hidden rounded-lg'>
          <p className='text-center text-xl dark:text-[#FFFFFF]'>Latest Header</p>
            <img
                className='rounded-lg w-full h-full object-center repeat-0 '
                src={`${BASE_URL}${selectedHeaderDisplay?.thumbnail}`}

            />
        </div>
    </section>
  )
}

export default Header