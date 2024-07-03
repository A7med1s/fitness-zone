// src/components/Nutrition.js
import React from 'react';
import { motion } from 'framer-motion';

const nutritionTips = [
  {
    title: "Balanced Diet",
    description: "Ensure your diet includes a balance of proteins, carbohydrates, and fats to fuel your workouts and recovery.",
  },
  {
    title: "Stay Hydrated",
    description: "Drink plenty of water throughout the day to stay hydrated and support your body's functions.",
  },
  {
    title: "Pre-Workout Nutrition",
    description: "Consume a small meal or snack rich in carbohydrates and protein about 30-60 minutes before your workout.",
  },
  {
    title: "Post-Workout Nutrition",
    description: "Replenish your body with a combination of protein and carbohydrates within 30 minutes after your workout.",
  },
  {
    title: "Avoid Processed Foods",
    description: "Limit your intake of processed foods and focus on whole, nutrient-dense options.",
  },
];

const Nutrition = () => {
  return (
    <div className=" mx-auto bg-three">
      <div className='p-4 bg-black/60'>
      <h2 className="text-4xl font-bold text-center text-green-700 mb-8">Nutrition Tips</h2>
      <div className="grid grid-cols-1 py-12 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {nutritionTips.map((tip, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-semibold text-green-700">{tip.title}</h3>
            <p className="mt-2 text-gray-700">{tip.description}</p>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Nutrition;