import React from 'react'

const Learn = () => {
  return (
  <section className='container mx-auto'> 
    <div className='lg:flex lg:flex-row-reverse '> 
         <div className='lg:w-1/2'> 
            <h1 className='mt-10 text-2xl md:w-3/4 md:text-4xl font-bold text-center lg:text-start'> How our online public schools works </h1>
            <div className='md:grid grid-cols-2 mt-4 '> 
                <div className='w-3/5 md:w-full mx-auto  flex flex-col justify-center mt-4'> 
                    <div className='bg-[#D2F1E1] w-12 h-12 rounded-lg flex justify-center  mx-auto md:mx-0 mt-4' > 
                    <img src='./image/vector.png ' className='h-6 md:h-5 mt-3 items-center flex justify-center'/>
                     </div>
                    <h1 className='font-bold text-xl text-center lg:text-left mt-4 md:text-lg'> Virtual learning </h1>
                    <p className='text-center lg:text-left mb-6 md:text-sm md:w-3/4'> The only costs are for standard school supplies and voluntary field trips. </p>
                </div>

                <div className='w-3/5 md:w-full mx-auto  flex flex-col justify-center mt-6 md:mt-4 pt-4'> 
                    <div className='bg-[#D2F1E1] w-12 h-12 rounded-lg flex justify-center  mx-auto md:mx-0' > 
                    <img src='./image/outline.png ' className='h-6 md:h-5 mt-3 items-center flex justify-center'/>
                     </div>
                    <h1 className='font-bold text-xl text-center lg:text-left mt-4 md:text-lg'>  Meaningful Education</h1>
                    <p className='text-center lg:text-left mb-6 md:text-sm md:w-3/4'> Many of our Connections Academy schools have additional accreditations. </p>
                </div>

                <div className='w-3/5 md:w-full mx-auto  flex flex-col justify-center mt-6 pt-4'> 
                    <div className='bg-[#D2F1E1] w-12 h-12 rounded-lg flex justify-center  mx-auto md:mx-0' > 
                    <img src='./image/outline3.png ' className='h-6 md:h-5 mt-3 items-center flex justify-center'/>
                     </div>
                    <h1 className='font-bold text-xl text-center lg:text-left mt-4 md:text-lg '>Online curriculum </h1>
                    <p className='text-center lg:text-left mb-6 md:text-sm md:w-3/4'> Our curriculum prepares students to go further in life by giving them support. </p>
                </div>

                <div className='w-3/5 md:w-full mx-auto  flex flex-col justify-center mt-6 pt-4 '> 
                    <div className='bg-[#D2F1E1] w-12 h-12 rounded-lg flex justify-center  mx-auto md:mx-0 ' > 
                    <img src='./image/outline4.png ' className='h-6 md:h-5 mt-3 items-center flex justify-center'/>
                     </div>
                    <h1 className='font-bold text-xl text-center lg:text-left mt-4 md:text-lg'> Social Interaction </h1>
                    <p className='text-center lg:text-left mb-8 md:text-sm md:w-3/4'> Students at Connections Academy collaborate on projects together. </p>
                </div>

                
            </div>
             
        </div>
        <div className='lg:w-1/2 flex md:justify-start justify-center'>
            <img className=' md:h-[600px] mt-4 md:mt-16' src='./image/learn.png'/>

        </div>

       
    </div>

    <div className=' md:flex md:justify-between md:flex-row flex flex-col'> 
       <h1 className='mt-10 text-2xl md:w-1/2 md:text-4xl font-bold text-center lg:text-start '> How our online public schools works </h1>
        <button className='border-2 border-blue-500 px-4  py-2 h-10  mx-auto items-center md:mx-0 md:mt-16  text-center rounded-lg mt-4  '> View all courses </button> 
    </div>

    <div className='md:flex md:justify-between '>
         <div className='w-3/4 mt-10 md:w-[220px] mx-auto md:mx-0'>
            <div className='flex flex-col'> 
                <img className='md:image-cover' src="./image/data.png"/>
                <h1 className='font-bold text-xl w-3/4 mt-4  md:text-base md:w-full'> Hands- On Python & R in Data Science </h1>
                <div className='flex justify-between mt-2'>     
            </div> 
              <div className='flex justify-between mt-4'> 
                        <div className='flex'> 
                            <img className='h-5 mt-1' src='./image/people.png' alt=''/>
                            <h2 className='ml-1'> 1,45,690 </h2>
                        </div>
                        <div className='flex'> 
                            <img className='h-5 mt-1' src='./image/time.png' alt=''/>
                            <h2 className='ml-1'> 4 months </h2>
                        </div>
                 </div>
            </div>

            <div className=' border-[#2076FF]  flex justify-center space-x-4 border-2 rounded-lg mt-4 md:mt-6 '> 
                   <span> <img className='h-5 mt-2' src='./image/Buy.png ' alt=''/> </span>          <button className=' py-1 text-center text-[#2076FF] '>  Add to cart  </button>

            </div>

        </div>


          <div className='w-3/4 mt-10 md:w-[220px] mx-auto  md:mx-0'>
            <div className='flex flex-col'> 
                <img className='md:image-cover' src="./image/data.png"/>
                <h1 className='font-bold text-xl w-3/4 mt-4  md:text-base md:w-full'> Science and Machine Learning Bootcamp </h1>
                <div className='flex justify-between mt-2'>     
            </div> 
              <div className='flex justify-between mt-4'> 
                        <div className='flex'> 
                            <img className='h-5 mt-1' src='./image/people.png' alt=''/>
                            <h2 className='ml-1'> 1,45,690 </h2>
                        </div>
                        <div className='flex'> 
                            <img className='h-5 mt-1' src='./image/time.png' alt=''/>
                            <h2 className='ml-1'> 4 months </h2>
                        </div>
                 </div>
            </div>

            <div className=' border-[#2076FF]  flex justify-center space-x-4 border-2 rounded-lg mt-4 md:mt-6 '> 
                   <span> <img className='h-5 mt-2' src='./image/Buy.png ' alt=''/> </span>          <button className=' py-1 text-center text-[#2076FF] '>  Add to cart  </button>

            </div>

        </div>

          <div className='w-3/4 mt-10 md:w-[220px] mx-auto  md:mx-0'>
            <div className='flex flex-col'> 
                <img className='md:image-cover' src="./image/data.png"/>
                <h1 className='font-bold text-xl md:text-base md:w-full w-3/4 mt-4'> The Python Mega Course:Real Applications </h1>
                <div className='flex justify-between mt-2'>     
            </div> 
              <div className='flex justify-between mt-4'> 
                        <div className='flex'> 
                            <img className='h-5 mt-1' src='./image/people.png' alt=''/>
                            <h2 className='ml-1 '> 1,45,690 </h2>
                        </div>
                        <div className='flex'> 
                            <img className='h-5 mt-1 ' src='./image/time.png' alt=''/>
                            <h2 className='ml-1'> 4 months </h2>
                        </div>
                 </div>
            </div>

            <div className=' border-[#2076FF]  flex justify-center space-x-4 border-2 rounded-lg mt-4 md:mt-6 '> 
                   <span> <img className='h-5 mt-2' src='./image/Buy.png ' alt=''/> </span>          <button className=' py-1 text-center text-[#2076FF] '>  Add to cart  </button>

            </div>

        </div>

        
    </div> 

  </section>
  )
}

export default Learn