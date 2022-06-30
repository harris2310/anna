/* eslint-disable arrow-body-style */
import React from 'react';
import { motion } from 'framer-motion';

const animations = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 0 },
};

const AnimatedPage = ({children}) => {
  return (
    <motion.div 
      variants={animations}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.75 }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedPage;
