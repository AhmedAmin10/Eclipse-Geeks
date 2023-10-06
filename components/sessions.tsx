'use client'
import React, { useState } from 'react';
import { PaperPlaneRight } from '@phosphor-icons/react';
import QuizSection from './QuizSection'; // Import the QuizSection component
import './Videos.css'; // Import the CSS for styling

const Videos = () => {
  const [showQuiz, setShowQuiz] = useState(false);

  const handleQuizButtonClick = () => {
    setShowQuiz(!showQuiz); // Toggle the showQuiz state
  };

  return (
    <section className="py-20">
      <div className="flex flex-col">
        <h1 className="text-green-500 font-bold text-4xl pb-12 text-center">
          Learning Videos
        </h1>
        <div className="flex flex-wrap gap-5 items-center justify-center gap-14">
          <div className="block rounded-lg bg-gray-800 w-[30%]">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <video className="w-full h-auto object-cover rounded-t-lg" controls>
                <source src="/a.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="px-6 py-5">
              <h5 className="mb-2 text-xl font-semibold leading-tight text-white-800 dark:text-black-50">
                The Path Of Total Eclipse
              </h5>
              <p className="mb-4 text-base text-white-500 dark:text-black-200">
              "Follow the path of the total eclipse as it across the Earth's surface."
              </p>
              <button
                type="button"
                className="inline-block rounded bg-green-500 px-6 pb-2 pt-2.5 text-sm font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#6b7280] transform transition-transform duration-300 hover:translate-y-[-4px]"
                onClick={handleQuizButtonClick}
              >
                <div className="flex items-center">
                  Learn More <PaperPlaneRight className="w-4 h-4 ml-1" weight="bold" />
                </div>
              </button>
            </div>
          </div>




          <div className="block rounded-lg bg-gray-800 w-[30%]">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <video className="w-full h-auto object-cover rounded-t-lg" controls>
                <source src="/b.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="px-6 py-5">
              <h5 className="mb-2 text-xl font-semibold leading-tight text-white-800 dark:text-black-50">
                Full Eclipse
              </h5>
              <p className="mb-4 text-base text-white-500 dark:text-black-200">
              "Experience the awe-inspiring beauty of a total eclipse "
              </p>
              <button
                type="button"
                className="inline-block rounded bg-green-500 px-6 pb-2 pt-2.5 text-sm font-medium leading-normal text-white shadow-[0_4px_9px_-4px_#6b7280] transform transition-transform duration-300 hover:translate-y-[-4px]"
                onClick={handleQuizButtonClick}
              >
                <div className="flex items-center">
                  Learn More <PaperPlaneRight className="w-4 h-4 ml-1" weight="bold" />
                </div>
              </button>
            </div>
          </div>
   
          {/* Repeat the same structure for other videos */}
        </div>
      </div>
      {showQuiz && <QuizSection />} {/* Display QuizSection when showQuiz is true */}
    </section>
  );
};

export default Videos;
