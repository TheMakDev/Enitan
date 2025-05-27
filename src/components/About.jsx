import img from '../assets/mak1.png'
import React from 'react';
import cv from '../assets/cv.pdf'

const About = () => {
  return (
    <section className=" text-white py-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <img src={img} alt="About" className="w-48 sm:w-64 rounded-lg" />
    <div className="text-center md:text-left mx-8">
      <h2 className="text-6xl font-bold mb-4 text-green-500 text-center">About Me</h2>
      <p className="text-gray-300 mb-6 px-6">
        I am a passionate front-end developer with a keen eye for design and a love for creating beautiful, user-friendly web applications. With expertise in HTML, CSS , Javascript and React, I strive to build Responsive and accessible webistes that not only look great but also provide an execeptional user expertise. I am always eager to learn new technologies and improve my skills to stay at the forefront of web development.
      </p>
      <ul className="text-sm space-y-2 px-6">
        <li className='text-2xl'><strong className=' font-bold text-2xl px-3'>Name:</strong> Makanjuola Enitan</li>
        <li className='text-2xl'><strong className=' font-bold text-2xl px-3'>Date of Birth:</strong> Octomber 23</li>
        <li className='text-2xl'><strong className=' font-bold text-2xl px-3'>Address:</strong>Oyo State Nigeria</li>
        <li className='text-2xl'><strong className=' font-bold text-2xl px-3'>Email:</strong> makanjuolaenitan71@gmial.com</li>
        <li className='text-2xl'><strong className=' font-bold text-2xl px-3'>Phone:</strong> +234 706 3085 718</li>
      </ul>
      <p className="text-green-400 mt-4 font-semibold px-6">20+ Project complete</p>
      <button className="mt-4 bg-green-400 px-6 text-black font-semibold  py-2 rounded-full"> <a href={cv} >Download CV</a></button>
    </div>
  </div>
</section>

  );
};

export default About;
