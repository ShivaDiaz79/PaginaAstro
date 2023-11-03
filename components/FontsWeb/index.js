import React, { useState } from "react";
import { motion, useCycle } from "framer-motion";
import Desktopmockup from "@/pages/webSite/components/Desktopmockup";

const FontsWeb = () => {
  const [isFlipped, toggleFlip] = useCycle(false, true);
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(!isRotating);
  };

  return (
    <div className="flex justify-center items-center mx-auto">
      <motion.div
        className="w-full h-full bg-transparent border-purple-400 rounded-2xl"
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
          rotateY: 180, // Gira cuando el cursor está sobre el componente
          scale: 1.1,
        }}
      >
        <Desktopmockup style={{ width: "100%", height: "100%" }} />
      </motion.div>
    </div>
  );
};

export default FontsWeb;

