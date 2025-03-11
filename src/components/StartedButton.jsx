import React from 'react'
import { useState } from 'react'
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import Button from '../library/Button';
import FindPost from './FindPost';


function StartedButton() {
  const [showForm,setShowForm] = useState(false)
  const [findPost,setFindPost]= useState(false)

  if(findPost ){
    return <FindPost/>

  }



  return (
    <>
<div className='fixed inset-0 bg-[#D9DFC6] flex justify-center items-center'>
  <div className='w-[90%] h-[80%]  bg-[#D9DFC6] flex justify-center items-center flex-col   rounded-lg p-6'>
    {
      !showForm ? (
        <button
          onClick={(e) => { setShowForm(!showForm) }}
           className='flex justify-center items-center w-[25%] h-[12%] text-white font-semibold rounded-lg '
        >
          <Button />
        </button>
      ) : (
        showForm && (
          <div className='w-[60%] h-[100%] border border-amber-400 flex justify-center items-center flex-col bg-gray-50 shadow-lg rounded-lg p-6'>
            <h1 className='text-2xl font-bold text-gray-700 mb-4'>SignUp</h1>
            
            <form action="" className='w-[70%] h-auto border border-black flex justify-evenly items-center flex-col p-6 bg-white shadow-lg rounded-lg'>

              <div className='flex justify-between items-center w-full mb-4'>
                <label htmlFor="email" className='text-xl font-semibold text-gray-700'>Email</label>
                <div className="flex items-center w-[75%] border border-amber-400 rounded-lg overflow-hidden bg-white">
                  <MdOutlineMarkEmailRead className="text-gray-500 mx-2" />
                  <input 
                    type="email" 
                    id="email"
                    placeholder='Enter your email' 
                    className='w-full p-2 focus:outline-none bg-transparent'
                  /> 
                </div>
              </div>

              <div className='flex justify-between items-center w-full mb-4'>
                <label htmlFor="email" className='text-xl font-semibold text-gray-700'>Password</label>
                <div className="flex items-center w-[75%] border border-amber-400 rounded-lg overflow-hidden bg-white">
                  <RiLockPasswordLine className="text-gray-500 mx-2" />
                  <input 
                    type="email" 
                    id="email"
                    placeholder='Enter your email' 
                    className='w-full p-2 focus:outline-none bg-transparent'
                  /> 
                </div>
              </div>

              <button
              onClick={(e)=>{
             setFindPost(true)

              }}
               className='w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-all font-semibold'>
                SignUp with Google
                
              </button>

              <p className='text-sm mt-3 text-gray-600'>
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