// src/components/FAQ.js
import React from 'react';
import { motion } from 'framer-motion';
const FAQ = () => {
  const faqs = [
    {
      question: "What are your operating hours?",
      answer: "We are open 24/7 for our members. Feel free to visit us anytime!"
    },
    {
      question: "Do you offer personal training?",
      answer: "Yes, we offer personal training sessions with certified trainers. Contact us for more details."
    },
    {
      question: "What types of memberships do you offer?",
      answer: "We offer a variety of membership options including monthly, quarterly, and annual plans. Visit our membership page for more information."
    },
    {
      question: "Do you have group classes?",
      answer: "Yes, we have a range of group classes including yoga, pilates, spinning, and more. Check our schedule for class times."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes, we offer a one-day free trial for new members. Come and experience our facilities!"
    },
  ];

  return (
    <div className=" bg-two">
      <div className='bg-black/60 p-4 '>
      <h2 className="text-4xl font-bold text-center text-red-700 mb-8">Frequently Asked Questions</h2>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <motion.div   whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}>
            
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-green-700">{faq.question}</h3>
            <p className="mt-2 text-gray-700">{faq.answer}</p>
          </div>
          </motion.div>
          
        ))}
      </div>
      </div>
    </div>
  );
};

export default FAQ;