import React from 'react';
import { GoArrowUpRight } from "react-icons/go";

const Footer = () => {
  return (
    <div className="bg-[#f7f7fa] padding-x py-16 max-container rounded dark:bg-[#141624]">
      <div className=''>
        <div className='border-b-2 border-b-[#FAFBFC]'>
          <p className='pb-8 max-md:pb-7 text-[56px] max-md:text-[40px] max-md:leading-[52px] max-md:px-6 max-md:text-center font-normal text-[#000000] dark:text-[#FFFFFF]'>
            Let’s Connect.
          </p>
        </div>
        <div>
          <div className='mt-16 max-md:mt-10'>
            <div className='flex max-lg:flex-col'>
              <div className='pr-[120px] max-md:pr-0 max-md:flex-col'>
                <p className='font-bold text-xs max-md:leading-4 max-md:text-center mb-3 text-[#4A4A4A] dark:text-[#B3B3B3] capitalize'>For networking</p>
                <p className='font-bold text-xs mb-3 text-[#000000] dark:text-[#E6E6E6] max-md:mb-16 capitalize'>
                  <a className='flex items-center max-md:justify-center max-md:items-center' href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                    Linkedin <GoArrowUpRight />
                  </a>
                </p>
              </div>
              <div className='pr-[120px] max-md:pr-0 max-md:flex-col'>
                <p className='font-bold text-xs max-md:leading-4 max-md:text-center mb-3 text-[#4A4A4A] dark:text-[#B3B3B3] capitalize'>For SOCIALS</p>
                <p className='font-bold text-xs mb-3 text-[#000000] dark:text-[#E6E6E6] capitalize max-md:mb-16'>
                  <a className='flex items-center max-md:justify-center max-md:items-center' href='https://twitter.com' target='_blank' rel='noopener noreferrer'>
                    Twitter <GoArrowUpRight />
                  </a>
                </p>
              </div>
              <div className='pr-[120px] max-md:pr-0 max-md:flex-col'>
                <p className='font-bold text-xs max-md:leading-4 max-md:text-center mb-3 text-[#4A4A4A] dark:text-[#B3B3B3] capitalize'>For UPDATES</p>
                <p className='font-bold text-xs mb-3 text-[#000000] dark:text-[#E6E6E6] capitalize max-md:mb-16'>
                  <a className='flex items-center max-md:justify-center max-md:items-center' href='https://github.com' target='_blank' rel='noopener noreferrer'>
                    GitHub <GoArrowUpRight />
                  </a>
                </p>
              </div>
              <div className='ml-auto max-md:ml-0 flex max-md:flex-col'>
                <p className='text-[#4A4A4A] dark:text-[#B3B3B3] capitalize max-md:text-xs max-md:leading-4 mr-2 max-md:text-center'>
                  ALL RIGHTS RESERVED © COPYRIGHT  
                </p>
                <p className='text-[#4A4A4A] dark:text-[#B3B3B3] capitalize font-bold max-md:text-xs max-md:leading-4 max-md:flex max-md:text-center max-md:justify-center'>
                  ADEBAYO CHARLES AMPITAN <span className='font-normal text-[#4A4A4A] dark:text-[#B3B3B3] max-md:ml-1'> 2023.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;