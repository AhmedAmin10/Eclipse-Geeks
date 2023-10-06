// import QuizSection from '@/components/QuizSection'
import Chat from '@/components/chat'
import Footer from '@/components/footer'
import Hero from '@/components/hero'
import { Navbar } from '@/components/navbar'
// import QuizPage from '@/components/quiz'
import Sessions from '@/components/sessions'
import Videoen from '@/components/video'
import Image from 'next/image'
import React from 'react';

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/hero.png')] bg-cover ">
      <Navbar />
      <Hero />
      </div>
      <Videoen />
      <Sessions />
      {/* <QuizSection /> */}
      {/* <Chat /> */}
      <Footer/>
    </div>
  )
}

// pros visability , setvisability
// button setvisability
// download modal
// download modal package and import it using npi