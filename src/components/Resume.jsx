// src/components/Resume.jsx
import React from 'react';

const Resume = () => {
  return (
    <section className="bg-black text-white py-20 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl font-bold mb-4">Resume</h2>
    <p className="text-gray-400 mb-10">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
    <div className="grid gap-8 sm:grid-cols-2">
      <div className="bg-gray-900 p-6 rounded-lg">
        <h4 className="text-yellow-400 text-lg font-semibold">2014–2015</h4>
        <h3 className="text-xl font-bold mt-2">Master Degree of Design</h3>
        <p className="text-sm text-gray-400 mt-1">Lautech</p>
        <p className="text-sm text-gray-400 mt-2">A small river named Duden flows by their place.</p>
      </div>
      <div className="bg-gray-900 p-6 rounded-lg">
        <h4 className="text-yellow-400 text-lg font-semibold">2014–2015</h4>
        <h3 className="text-xl font-bold mt-2">Art & Creative Director</h3>
        <p className="text-sm text-gray-400 mt-1">Lautech University</p>
        <p className="text-sm text-gray-400 mt-2">A small river named Duden flows by their place.</p>
      </div>
    </div>
  </div>
</section>

  );
};

export default Resume;
