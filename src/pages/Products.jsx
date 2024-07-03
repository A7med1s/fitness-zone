import React from 'react';
import { motion } from 'framer-motion';
import wheyProteinImg from '../assets/products/whey protein.jfif'
import creatineImg from '../assets/products/creatine.jfif'
import dumbbellImg from '../assets/products/Dumbbell.jpg'
import treadmillImg from '../assets/products/Treadmill.jpg'
import yogaMatImg from '../assets/products/Yoga Mat.jpg'
import shakerImg from '../assets/products/shaker.jpg'
const products = [
  { id: 1, name: 'Dumbbell', price: '$35', image: dumbbellImg },
  { id: 2, name: 'Treadmill', price: '$500', image: treadmillImg },
  { id: 3, name: 'Yoga Mat', price: '$15', image: yogaMatImg },
  { id: 4, name: 'Whey Protein', price: '$40', image: wheyProteinImg },
  { id: 5, name: 'Creatine ', price: '$25', image: creatineImg },
  { id: 5, name: 'Shaker Bottle ', price: '$10', image: shakerImg },
  // Add more products as needed
];

const Products = () => {
  return (
    <div className="min-h-screen bg-one">
      <div className='bg-black/60 p-4'>
      <h2 className="text-4xl font-bold text-center text-red-700 mb-8">Products</h2>
      <main className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            className="bg-white rounded-lg shadow-md p-4"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover mb-4 rounded"
            />
            <h2 className="text-xl font-bold text-green-700">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
          </motion.div>
        ))}
      </main>
      </div>
    </div>
  );
};

export default Products;