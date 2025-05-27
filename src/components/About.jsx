import img from '../assets/bn.png'
import React from 'react';

const About = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
    <img src={img} alt="About" className="w-48 sm:w-64 rounded-lg" />
    <div className="text-center md:text-left">
      <h2 className="text-3xl font-bold mb-4">About Me</h2>
      <p className="text-gray-400 mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <ul className="text-sm space-y-2">
        <li><strong>Name:</strong> Makanjuola Enitan</li>
        <li><strong>Date of Birth:</strong> Octomber 23, 1987</li>
        <li><strong>Address:</strong>Oyo State Nigeria</li>
        <li><strong>Email:</strong> makanjuolaenitan71@gmial.com</li>
        <li><strong>Phone:</strong> +234 706 3085 718</li>
      </ul>
      <p className="text-yellow-400 mt-4 font-semibold">20+ Project complete</p>
      <button className="mt-4 bg-yellow-400 text-black font-semibold px-5 py-2 rounded-full">Download CV</button>
    </div>
  </div>
</section>

  );
};

export default About;
