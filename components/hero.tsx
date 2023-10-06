"use client";

import Image from "next/image";
import { Lightbulb, PaperPlaneRight } from "@phosphor-icons/react";
import React from "react";

const Hero = () => {
  return (
    <section className="py-32">
      <div className="px-12 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-white md:text-6xl md:tracking-tight">
            <span>Unveil the </span>
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-green-500 lg:inline">
              captivating world{" "}
            </span>
            of <span>solar eclipses</span>.
          </h1>
          <p className="px-0 mb-8 text-lg text-white md:text-xl lg:px-24">
            Take your journey through solar eclipses with our expertly curated
            insights and resources.
          </p>
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <a
              href="#_"
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-500 rounded-xl sm:w-auto sm:mb-0 transform transition-transform duration-300 hover:translate-y-[-4px] "
            >
              Get Started
              <PaperPlaneRight className="w-4 h-4 ml-1" weight="bold" />
            </a>
            <a
              href="#_"
              className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-white text-gray-900 rounded-xl sm:w-auto sm:mb-0 transform transition-transform duration-300 hover:translate-y-[-4px] "
            >
              Learn More
              <Lightbulb className="w-4 h-4 ml-1" weight="bold" />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;