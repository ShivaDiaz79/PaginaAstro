import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";

const AnimatedSquare = () => {
  const [isFlipped, toggleFlip] = useCycle(false, true);
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(!isRotating);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="w-40 h-40 bg-blue-500"
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
        animate={{
          rotateY: isRotating ? 180 : 0,
          y: isFlipped ? 100 : 0,
        }}
        transition={{
          duration: 0.5,
          type: "spring",
        }}
        onTap={handleClick}
        whileHover={{
          scale: 1.1,
        }}
      ></motion.div>
    </div>
  );
};

export default AnimatedSquare;
