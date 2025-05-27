import React from 'react';
import { FaArrowRight, FaCheckCircle, FaUsers } from 'react-icons/fa';
import heroImage from '../assets/bn.png'; 

const Hero = () => {
  return (
    <section className="bg-[#0C0F22] text-white px-6 md:px-12 lg:px-24 py-12 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
       
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            I'm  <span className="text-green-400">MAKANJUOLA ENITAN</span>, am a front-end developer
          </h1>
          <p className="text-gray-300 mb-6 max-w-md">I develop with passion, build with purpose, learn continuously, and strive to create meaningful solutions.
          </p>
          <button className="bg-green-400 hover:bg-green-500 text-black font-semibold px-6 py-3 rounded-full inline-flex items-center gap-2">
            Download CV <FaArrowRight />
          </button>
    
        </div>

        <div className="relative flex flex-col items-center mt-8 md:mt-0">

          <div className="absolute top-10 w-[260px] h-[380px] bg-green-400 rounded-[3rem] z-0"></div>


          <img
            src={heroImage}
            alt="Business Woman"
            className="relative z-10 w-[260px] -mt-8 rounded-xl shadow-lg"
          />


          <div className="bg-[#10163a] rounded-xl p-6 mt-6 space-y-3 shadow-xl text-sm w-[260px] relative z-10">
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" /> Expert in HTML, CSS, and Javascript
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" /> Responsive Design and cross-browser compatibility
            </div>
            <div className="flex items-center gap-2">
              <FaCheckCircle className="text-green-400" /> Version control with Git and Git Hub
            </div>
          </div>


          {/* <div className="flex items-center justify-center mt-4 gap-2 text-sm text-gray-300">

            <img src="/avatar1.png" alt="User1" className="w-6 h-6 rounded-full border border-white" />
            <img src="/avatar2.png" alt="User2" className="w-6 h-6 rounded-full border border-white -ml-2" />
            <img src="/avatar3.png" alt="User3" className="w-6 h-6 rounded-full border border-white -ml-2" />
            <span className="ml-2">12M+</span>
            <FaUsers className="ml-1" />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
