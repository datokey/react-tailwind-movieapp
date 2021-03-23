import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    y:[25, 0],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.50,
        ease: "easeOut",
      },
    },
  },

  animationTwo:{
    y: [25 , 0],
    transition: {
     
      y: {
        delay:0.5,
        yoyo: Infinity,
        duration: 0.50,
        ease: "easeOut",
      },
    },
  },

  animationThree:{
    y: [25 , 0],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.50,
        ease: "easeOut",
      },
    },
  },

};

const Loading = () => {
  return (
    <div className="flex items-center justify-center space-x-1">
      <motion.span 
        className="w-5 h-5 bg-white rounded-full"
        variants={loaderVariants}
        animate="animationOne"
        ></motion.span>
        <motion.span 
        variants={loaderVariants}
         animate="animationTwo" 
         className="w-5 h-5 bg-white rounded-full">
         </motion.span>
        <motion.span
         variants={loaderVariants} 
         animate="animationThree"
          className="w-5 h-5 bg-white rounded-full">
          </motion.span>
    </div>
  );
};

export default Loading;
