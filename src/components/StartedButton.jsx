import React from 'react'
import { useState } from 'react'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import FindButton from '../library/FindButton';
import FindPost from './FindPost';
// import FindButton from '../library/FindButton';
// import PostButton from '../library/PostButton';



function StartedButton() {
  const [showForm,setShowForm] = useState(false)
  const [findPost,setFindPost]= useState(false)

  if(findPost ){
    return <FindPost/>
    

  }



  return (
    <>
<div className='fixed inset-0 bg-[#2F4454] flex justify-center items-center'>
  <div className='w-[90%] h-[80%]  bg-[#2F4454] flex justify-center items-center flex-col   rounded-lg p-6'>
    {
      !showForm ? (
        <div
          onClick={(e) => { setShowForm(!showForm) }}
           className='flex justify-center items-center w-[25%] h-[12%] text-white font-semibold rounded-lg '
        >
          <div className='cursor-pointer'>
    <FindButton />
  </div>
       
          
        </div>
         
      ) : (
        showForm && (
          <div className='w-[40%] h-[100%]  flex justify-center items-center flex-col bg-[#2F4454] 
          shadow-amber-50  shadow-[0px_0px_6px_1px] rounded-lg p-6'>
            <h1 className='text-2xl font-bold text-gray-700 mb-4 text-white'>SignUp</h1>
            
            <form action="" className='w-[100%] h-auto  flex justify-evenly items-center flex-col p-6 bg-[#2F4454] shadow-lg rounded-lg'>

              <div className='flex justify-between items-center w-full mb-4'>
                <label htmlFor="email" className='text-xl font-semibold text-gray-700 text-white'>Email</label>
                <div className="flex items-center w-[75%] border border-amber-400 rounded-lg overflow-hidden bg-white">
                  <MdOutlineMarkEmailRead className="text-gray-500 mx-2" />
                  <input 
                    type="email" 
                    id="email"
                    placeholder='Enter your email' 
                    autoComplete="current-password"
                    className='w-full p-2 focus:outline-none bg-transparent bg-[#2F4454]'
                  /> 
                </div>
              </div>

              <div className='flex justify-between items-center w-full mb-4'>
                <label htmlFor="email" className='text-xl  text-white font-semibold text-gray-700'>Password</label>
                <div className="flex items-center w-[75%] border border-amber-400 rounded-lg overflow-hidden bg-white">
                  <RiLockPasswordLine className="text-gray-500 mx-2" />
                  <input 
                    type="password" 
                    id="password"
                    placeholder='Enter your password' 
                    autoComplete="current-password"
                    className='w-full p-2 focus:outline-none bg-transparent bg-[#2F4454]'
                  /> 
                </div>
              </div>

              <div
              onClick={(e)=>{
             setFindPost(true)

              }}
               className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all font-semibold text-white'>
                SignUp with Google
                
              </div>

              <p className='text-sm mt-3 text-gray-600 text-white'>
                If you have an account already, 
                <a href="#" className='text-blue-500 hover:underline font-semibold'> login</a>
              </p>

            </form>

          </div>
        )
      )
    }
  </div>
</div> 


    </>
  )
}

export default StartedButton