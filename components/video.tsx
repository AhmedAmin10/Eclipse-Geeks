import React from 'react'

const Videoen = () => {
  return (
    <div className='py-10 '>
        <h1 className='flex text-center justify-center text-green-500 font-bold text-4xl pb-12'>Intro video</h1>
         <div className=" flex justify-center">
          <video
            className=" w-[60%] p-1 bg-gray-950 h-[30%] max-w-full border border-gray-700 rounded-lg dark:border-gray-700"
            controls
          >
            <source src="/ahmedintro.mp4" type="video/mp4" />
          </video>
        </div>
    </div>
  )
}

export default Videoen