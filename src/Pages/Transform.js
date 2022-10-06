import React from 'react'
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import {AiFillStar} from 'react-icons/ai'

export const Transform = () => {
  return (
    <section className='container mx-auto'>
        <div className='md:flex'> 
                {/* <div className='md:w-1/2'> 
                    <h1> Transform your life through education </h1>
                    <p>Ariel Hocsman launched a new career in software development by taking courses on Besnik. What will you be able to do? </p>

                </div>


                <div className='md:w-1/2'>
                    <img src='./image/vid.png' />
                </div>  */}


         </div>

         <div className=' md:w-full w-11/12 mx-auto md:flex md:justify-between mt-10'>
                <h1 className='text-2xl font-bold md:w-1/3'> 
                  Transform your life through education
                </h1>
                
                <div className='flex justify-center md:justify-end space-x-4 md:mr-4 md:w-full w-11/2  '> 
                  <span className=''> <BsArrowLeft/> </span>
                  <span> <BsArrowRight/> </span>
                </div>
               
        </div> 


          <div className='md:flex md:justify-between md:w-full w-11/12 mx-auto'> 
            <div className='md:w-1/3'> 
                  <div className='mt-10'> 
                      <h1 className='font-bold md:text-xl'> “Love mathematics because of Besnik Academy” </h1>
                      <p className='mt-8 text-sm'> "The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal." </p>
                  </div>
                  <div className='flex mt-6'> 
                      <img className='h-10' src='./image/maledp.png' alt=''/>
                      <div> 
                        <h1 className='font-bold'> Wilson Thai </h1>
                        <p className='text-xs'> Ontario, Canada </p>
                      <div className='flex text-sm'> 
                        <span className='text-[#FFB800]'> <AiFillStar/> </span>
                          <span className='text-[#FFB800]'> <AiFillStar/> </span>
                          <span className='text-[#FFB800]'> <AiFillStar/> </span>
                            <span className='text-[#FFB800]'> <AiFillStar/> </span>
                            <span className='text-[#FFB800]'> <AiFillStar/> </span>
                      </div>
                      </div>

                  </div>
            </div>

             <div className='md:w-1/3 md:mr-6'> 
                  <div className='mt-10'> 
                      <h1 className='font-bold md:text-xl'> “Love mathematics because of Besnik Academy” </h1>
                      <p className='mt-8 text-sm'> "The curriculum was directly targeted toward applied techniques with high profile projects – real datasets with industry partners. It helped me achieve my career transition goal." </p>
                  </div>
                  <div className='flex mt-6'> 
                      <img className='h-10' src='./image/maledp.png' alt=''/>
                      <div> 
                        <h1 className='font-bold'> Wilson Thai </h1>
                        <p className='text-xs'> Ontario, Canada </p>
                      <div className='flex text-sm'> 
                        <span className='text-[#FFB800]'> <AiFillStar/> </span>
                          <span className='text-[#FFB800]'> <AiFillStar/> </span>
                          <span className='text-[#FFB800]'> <AiFillStar/> </span>
                            <span className='text-[#FFB800]'> <AiFillStar/> </span>
                            <span className='text-[#FFB800]'> <AiFillStar/> </span>
                      </div>
                      </div>

                  </div>
            </div>
          </div>


      <div className=' md:flex md:justify-between md:flex-row flex flex-col'> 
          <h1 className='mt-10 text-2xl md:w-1/2 md:text-4xl font-bold text-center lg:text-start '> Transform your life through education </h1>
            <button className='border-2 border-blue-500 px-4  py-1 mt-6 h-10  mx-auto  md:mx-0 md:mt-16  text-center rounded-lg  '> upgrade now </button> 
    </div>

    </section>
  )
}
