import React from 'react'

const Learn = () => {
  return (
  <section className='container mx-auto'> 
    <div className='lg:flex lg:flex-row-reverse '> 
         <div className='lg:w-1/2'> 
            <h1 className='mt-10 text-2xl font-bold text-center lg:text-start'> How our online public schools works </h1>
            <div className='md:grid grid-cols-2 mt-4 '> 
                <div className='w-3/5 md:w-full mx-auto border-2 flex flex-col justify-center mt-4'> 
                    <div className='bg-[#D2F1E1] w-12 h-12 rounded-lg flex justify-center  mx-auto md:mx-0 mt-4' > 
                    <img src='./image/vector.png ' className='h-6 mt-3 items-center flex justify-center'/>
                     </div>
                    <h1 className='font-bold text-xl text-center lg:text-left'> Virtual learning </h1>
                    <p className='text-center lg:text-left mb-6'> The only costs are for standard school supplies and voluntary field trips. </p>
                </div>

                <div className='w-3/5 md:w-full mx-auto border-2 flex flex-col justify-center mt-6 pt-4'> 
                    <div className='bg-[#D2F1E1] w-12 h-12 rounded-lg flex justify-center  mx-auto md:mx-0' > 
                    <img src='./image/vector.png ' className='h-6 mt-3 items-center flex justify-center'/>
                     </div>
                    <h1 className='font-bold text-xl text-center lg:text-left mt-4'>  Meaningful Education</h1>
                    <p className='text-center lg:text-left mb-6'> Many of our Connections Academy schools have additional accreditations. </p>
                </div>

                <div className='w-3/5 md:w-full mx-auto border-2 flex flex-col justify-center mt-6 pt-4'> 
                    <div className='bg-[#D2F1E1] w-12 h-12 rounded-lg flex justify-center  mx-auto md:mx-0' > 
                    <img src='./image/vector.png ' className='h-6 mt-3 items-center flex justify-center'/>
                     </div>
                    <h1 className='font-bold text-xl text-center lg:text-left mt-4'>ONLINE CURRICULUM </h1>
                    <p className='text-center lg:text-left mb-6'> Our curriculum prepares students to go further in life by giving them support. </p>
                </div>

                <div className='w-3/5 md:w-full mx-auto border-2 flex flex-col justify-center mt-6 pt-4 '> 
                    <div className='bg-[#D2F1E1] w-12 h-12 rounded-lg flex justify-center  mx-auto md:mx-0 ' > 
                    <img src='./image/vector.png ' className='h-6 mt-3 items-center flex justify-center'/>
                     </div>
                    <h1 className='font-bold text-xl text-center lg:text-left mt-4'> SOCIAL INTERACTION</h1>
                    <p className='text-center lg:text-left mb-8'> Students at Connections Academy collaborate on projects together. </p>
                </div>

                
            </div>
             
        </div>
        <div className='w-1/2'>
            <img src='./image/learn.png'/>

        </div>

       
    </div>

  </section>
  )
}

export default Learn