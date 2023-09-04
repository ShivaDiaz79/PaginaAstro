import React, { useState } from "react";
import { motion } from "framer-motion";

const AnimatedShapes = () => {
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(!isRotating);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-40 h-40 flex justify-center items-center bg-blue-500"
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
        animate={{
          rotateY: isRotating ? 180 : 0,
          y: isRotating ? 100 : 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
        onTap={handleClick}
        whileHover={{
          scale: 1.1,
        }}
      >
        <motion.div
          className="w-12 h-12 bg-yellow-500 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <motion.div
          className="w-12 h-12 bg-green-500 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
        <motion.div
          className="w-12 h-12 bg-red-500 rounded-full"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        />
      </motion.div>
      <motion.div
        className="ml-10 w-40 h-40 flex justify-center items-center bg-gray-600"
        animate={{
          x: isRotating ? 150 : 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
        onTap={handleClick}
        whileHover={{
          scale: 1.1,
        }}
      >
        <motion.div
          className="w-12 h-12 bg-yellow-300 rounded-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        />
        <motion.div
          className="w-24 h-20 bg-gray-400 rounded-lg"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        />
      </motion.div>
    </div>
  );
};

export default AnimatedShapes;
