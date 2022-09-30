import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { CgMenuGridR } from 'react-icons/cg';



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false)
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo)
  };

 


    return (
        <div className="flex container mx-auto justify-between  items-center h-20 lg:h-16 sm:h-18   lg:px-2
          text-white font-public   z-10 "> 
          
        
                    <div className='' >
                
                      <img src='./image/logo.png'/>
                
                     </div> 

                     <div className='lg:flex  '> 
                        <ul className=' text-base hidden   lg:flex  text-black font-mono space-x-5  '> 
                        
                                <li to='#'  className=' hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >   Home    </li>
                            <li to='#about'  className=' hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >   Profile    </li>
                            <li to='#skills' className=' hover:text-[#E0A040] hover:-translate-x-1 duration-200 ' >    Courses   </li>
                            <li to='#contact' className=' hover:text-[#E0A040]  hover:-translate-x-1 duration-200' >     Contact  </li>    
                            </ul> 
                     </div>

                      <div className='lg:flex hidden text-black '>
                          <button className='bg-[#E8F1FF] text-[#2378FF] px-4 py-1 rounded-lg text-sm'> Sign in  </button>
                             
                     </div>

                     

                
                            
                       

              
               
            
           

        
            {/* hamburger */} 
            <div   onClick={handleNav} className=' lg:hidden z-10 '> 
            {nav ? <AiOutlineClose className='text-[#E0A040] ' size={32}/> :   <CgMenuGridR className='text-[#E0A040] ' size={32}/>}
              
            </div>


             <div   onClick={handleNav} className={nav ? ' leading-loose text-center text-2xl rounded-lg absolute text-white  left-0 top-0    w-full m-auto z-10    flex h-[400px]   mt-20 bg-[#0B1E33]   flex-col' : 'absolute left-[-100%] '}>
              <div > 
                    <ul data-aos="fade-up"  className='lg:hidden text-xlg font-semibold mt-10 font-fira  flex flex-col '>
                       <li   to='#' className='mt-2' >Home</li>
                      <li to='#about'  className='mt-2' >About </li>
                      <li to='#skills' className='mt-2' >Skills</li>
                      <li to='#projects' className='mt-2' >  Projects</li>
                      <li to='#contact' className='mt-2'>Contact  </li>
        </ul> 
        </div>
      </div>
            
        </div>
    )
}

export default Navbar;