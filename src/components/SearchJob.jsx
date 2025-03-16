import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlurText from '../library/BlurText'
import RollingGallery from '../library/RollingGallery'

function SearchJob() {
  const [jobs,setJobs] = useState([])
  useEffect(()=>{
    const fetchApi = async ()=>{
      const options ={
        method: 'GET',
        url: 'https://jsearch.p.rapidapi.com/search',
        params: {
          query: 'developer jobs in chicago',
          page: '4',
          num_pages: '1',
          country: 'all',
          date_posted: 'all'
        },
        headers: {
          'x-rapidapi-key': 'f03521429bmshc853c2e16c1c71ep128befjsn109e65aa304c',
          'x-rapidapi-host': 'jsearch.p.rapidapi.com'
        }
      }
      const response = await axios.request(options)
      const data = response.data
      console.log(data)
      setJobs(data)
    
  }
  fetchApi()

  },[])

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };
 
  return (

   <>
   <div className=' fixed inset-0  bg-[#2F4454]'>
    <div className='w-[100%] h-[70%]  flex justify-between items-center'>


      {/* text  */}
      <div className='border  border-b-amber-50 w-[50%] h-[100%] flex justify-center items-center flex-col gap-6 '>

      <h1 className=" font-bold text-center mt-6 text-white">
   
<BlurText
  text="🏁 🌟 « 𝐒𝐭𝐚𝐫𝐭 𝐘𝐨𝐮𝐫 𝐉𝐨𝐛 𝐒𝐞𝐚𝐫𝐜𝐡 – 𝐓𝐡𝐞 𝐑𝐢𝐠𝐡𝐭 𝐎𝐩𝐩𝐨𝐫𝐭𝐮𝐧𝐢𝐭𝐲 𝐢s 𝐖𝐚𝐢𝐭𝐢𝐧𝐠! » 🌟"
  delay={150}
  animateBy="words"
  direction="top"
  onAnimationComplete={handleAnimationComplete}
  className="text-4xl   "
/>
</h1>
<p className="text-lg text-center text-white mt-2">
  Find the best opportunities and take the next step in your career journey today.
</p>


      </div>

      {/* scroll gallery */}

      <div className='border border-b-emerald-500 border-2 w-[50%] h-[100%]'>
      <RollingGallery autoplay={true} pauseOnHover={true} />

      </div>

    </div>

   </div>
   </>
  )
}

export default SearchJob