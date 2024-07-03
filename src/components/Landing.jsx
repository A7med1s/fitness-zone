// src/components/LandingPage.js
import React from 'react';
import FAQ from './FAQ';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 bg-red-700">
      
      <main className="mx-auto">
        <section id="home" className="text-center bg-one">
          <div className='bg-black/65 py-40'>
          <h2 className="text-4xl font-bold text-red-700">Welcome to Fitness Zone</h2>
          <p className="text-lg text-white mt-4 px-4">Your journey to a better you starts here. At Fitness Zone, we are dedicated to providing you with the best tools, resources, and support to help you achieve your fitness goals. Whether you're looking to build muscle, lose weight, or simply maintain a healthy lifestyle.</p>
          <button className="mt-8 inline-block bg-green-700 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors duration-300">Get Started</button>
          </div>
        </section>

    <section id="faq" className="py-20">
          <FAQ/>
        </section>

        <div className='p-4'>
        <section id="services" className="py-20 bg-gray-200 ">
          <h2 className="text-3xl font-bold text-red-700 text-center">Our Services</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-green-700">Personal Training</h3>
              <p className="text-gray-700 mt-2">Get one-on-one training with our expert trainers.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-green-700">Group Classes</h3>
              <p className="text-gray-700 mt-2">Join our group classes for a fun and motivating workout.</p>
            </div>
            <div className="bg-white p-4 rounded shadow hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-green-700">Nutrition Plans</h3>
              <p className="text-gray-700 mt-2">Follow our nutrition plans to complement your workouts.</p>
            </div>
          </div>
        </section>
        </div>

        <section id="contact" className="py-20 bg-one">
          <h2 className="text-3xl font-bold text-red-700 text-center">Contact Us</h2>
          <p className="text-lg text-white mt-4 text-center">Reach out to us for any queries or to book a session.</p>
          <form className="mt-8 max-w-lg mx-auto bg-white p-4 rounded shadow">
            <div className="mb-4">
              <label className="block text-gray-700">Name</label>
              <input type="text" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input type="email" className="w-full border border-gray-300 p-2 rounded" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea className="w-full border border-gray-300 p-2 rounded"></textarea>
            </div>
            <button type="submit" className="bg-green-700 text-white py-2 px-4 rounded hover:bg-green-500 transition-colors duration-300">Submit</button>
          </form>
        </section>
      </main>

   
    </div>
  );
};

export default LandingPage;