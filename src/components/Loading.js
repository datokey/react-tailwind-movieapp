import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    y: [18, 0],
    transition: {
      y: {
        delay:0.5,
        yoyo: Infinity,
        duration: 0.50,
        ease: "easeOut",
      },
    },
  },

  animationTwo:{
    y: [18 , 0],
    transition: {
     
      y: {
        delay:1,
        yoyo: Infinity,
        duration: 0.40,
        ease: "easeOut",
      },
    },
  },

  animationThree:{
    y: [18 , 0],
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.30,
        ease: "easeOut",
      },
    },
  },

};

const Loading = () => {
  return (
    <div className="flex justify-center items-center space-x-1">
      {/* <motion.div 
        variants={loaderVariants}
        animate="animationOne"
      >
        <svg 
          className="h-10 w-10"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </motion.div> */}

      <motion.span 
      className="bg-white w-5 h-5 rounded-full"
      variants={loaderVariants}
      animate="animationOne"
      ></motion.span>
      <motion.span variants={loaderVariants} animate="animationTwo" className="bg-white w-5 h-5 rounded-full"></motion.span>
      <motion.span variants={loaderVariants} animate="animationThree" className="bg-white w-5 h-5 rounded-full"></motion.span>
    </div>
  );
};

export default Loading;
