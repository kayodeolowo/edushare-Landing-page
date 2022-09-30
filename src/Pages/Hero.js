import React from 'react'

const Hero = () => {
  return (
    <section className='container mx-auto'>
        
        <div className='lg:flex lg:mt-10 mt-8 mx-2 '> 
            <div className='lg:w-1/2'> 
                <h1 className='lg:w-4/5 lg:mt-8 lg:text-5xl text-3xl font-bold lg:leading-snug'> Discover best classes for the best  learning  </h1>
                <p className='mt-6 lg:w-4/5'> We designed Connections Academy to give students all across the nation a tuition-free online public school that lets them learn. </p>
                 <button className='bg-[#F77E53] text-white px-6 py-2 rounded-lg text-sm mt-8' > Get Started  </button>
                <p className='mt-4'> Not sure when to start? <span className='underline text-[#2076FF]'> Learn more </span>  </p>
            </div>

            <div className='lg:w-1/2 flex justify-center lg:float-none'> 
                <img src='./image/guy.png'/>
                
            </div>    
        </div> 

        <div className='lg:flex lg:mt-20 mt-10'> 
            <div className='text-center lg:text-start'>
                <h1 className='font-semibold lg:text-5xl text-4xl '> 400+ </h1>
                <p className='mx-auto lg:mx-0 w-3/5 lg:text-sm lg:mt-4'> Universities worldwide that partner with us </p>
            </div>

            <div className='flex justify-around '>
                <div className='grid grid-cols-2 gap-14 lg:flex lg:justify-end lg:space-x-6 '>
                    <img className='h-10' src='./image/uni.png'/>
                    <img className='h-10 ' src='./image/col.png'/>
                    <img className='h-10' src='./image/inst.png'/>
                    <img className='h-10' src='./image/sch.png'/>    
                </div> 
               
                
            </div>
        </div>

    </section>
  )
}

export default Hero