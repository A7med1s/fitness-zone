import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const socialMediaIcons = [
  { id: 1, icon: <FaFacebookF />},
  { id: 2, icon: <FaTwitter /> },
  { id: 3, icon: <FaInstagram /> },
  { id: 4, icon: <FaLinkedinIn /> },
];

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white p-4">
      <div className=" mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Follow Us</h2>
        <div className="flex justify-center space-x-6">
          {socialMediaIcons.map((icon) => (
            <motion.a
              key={icon.id}
              
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl cursor-pointer"
              whileHover={{ scale: 1.2, rotate: 10 }}
              whileTap={{ scale: 0.8, rotate: -10 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {icon.icon}
            </motion.a>
          ))}
        </div>
        <p className="mt-2">&copy; {new Date().getFullYear()} Fitness Zone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;