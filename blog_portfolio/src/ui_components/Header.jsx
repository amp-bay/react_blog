import { BASE_URL } from '@/api'
import loadingDog from '../images/loadingDog.png'

function Header({blogs,isPending,error}) {

  const selectedHeaderDisplay=blogs.length/2 === 0? blogs[0] : blogs[blogs.length-1];

  return (
    <section className='max-container  padding-x py-4 relative bg-white dark:bg-[#141624] '>
        <div className='w-full h-[300px] overflow-hidden rounded-lg'>
          <p className='text-center text-xl dark:text-[#FFFFFF]'>Latest Header</p>
          {isPending || error ? 
            <img
                className='rounded-lg w-full h-full object-center repeat-0 '
                src={loadingDog}/>
            :
            <img
                className='rounded-lg w-full h-full object-center repeat-0 '
                src={`${BASE_URL}${selectedHeaderDisplay?.thumbnail}`}
            />}

        </div>
    </section>
  )
}

export default Header