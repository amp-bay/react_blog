import HeaderBanner from '../images/banner.jpeg'

function Header() {
  return (
    <section className='max-container  padding-x py-4 relative'>
        <div className='w-full h-[300px] overflow-hidden rounded-lg'>
            <img
                className='rounded-lg w-full h-full object-contain repeat-0 '
                src={HeaderBanner}

            />
        </div>
    </section>
  )
}

export default Header