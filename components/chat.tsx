"use client"

import Image from 'next/image'
import { PaperPlaneRight } from '@phosphor-icons/react'

const Chat = () => {
  return (
    <section className="py-24">
        <div className='flex flex-col px-20 gap-2'>
            <h2 className=' text-3xl font-extrabold bg-gradient-to-r from-green-400 to-green-500 bg-clip-text text-transparent'>Send Your Questions, We'll Unveil Solutions</h2>
            <h3 className='text-sm font-medium text-white'>Our Most Powerfull AI Chatbot Powered By OpenAI</h3>
        </div>
        <div className="w-[60%] p-1 mt-10 mx-20 text-center bg-[#131A38] border border-gray-700 rounded-lg shadow-lg sm:p-8 dark:bg-gray-800 dark:border-gray-700">
    <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
       <button className='flex items-center bg-green-500 px-7 py-2 rounded-lg text-white'>
        Submit
        <PaperPlaneRight className="w-4 h-4 ml-1" weight="bold" />
       </button>
    </div>
</div>


    </section>
  )
}

export default Chat