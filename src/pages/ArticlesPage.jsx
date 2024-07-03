import React from 'react';
import { motion } from 'framer-motion';

const articles = [
  {
    title: "10 Tips for a Successful Workout",
    excerpt: "Discover essential tips to make your workouts more effective and enjoyable.",
    link: "#",
  },
  {
    title: "The Benefits of Strength Training",
    excerpt: "Learn about the various health benefits of incorporating strength training into your routine.",
    link: "#",
  },
  {
    title: "How to Stay Motivated",
    excerpt: "Find out how to keep your motivation high and achieve your fitness goals.",
    link: "#",
  },
  {
    title: "Nutrition for Optimal Performance",
    excerpt: "Explore the best nutritional practices to fuel your workouts and recovery.",
    link: "#",
  },
  {
    title: "Yoga for Flexibility and Strength",
    excerpt: "Understand how yoga can improve your flexibility, strength, and overall well-being.",
    link: "#",
  },
];

const ArticlesPage = () => {
  return (
    <div className=" mx-auto bg-two">
      <div className='bg-black/60 p-4'>
      <h2 className="text-4xl font-bold text-center text-red-700 mb-8">Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h3 className="text-2xl font-semibold text-green-700">{article.title}</h3>
            <p className="mt-2 text-gray-700">{article.excerpt}</p>
            <p href={article.link} className="text-red-700 mt-4 inline-block cursor-pointer">
              Read more
            </p>
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ArticlesPage;