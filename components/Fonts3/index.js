import React, { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import Mockupcolors from "@/pages/aplicaciones/components/Mockupcolors";

const Fonts3 = () => {
  const [isFlipped, toggleFlip] = useCycle(false, true);
  const [isRotating, setIsRotating] = useState(false);

  const handleClick = () => {
    setIsRotating(!isRotating);
  };

  useEffect(() => {
    // Función para rotar cada 5 segundos
    const rotateEvery5Seconds = setInterval(() => {
      setIsRotating(!isRotating);
    }, 5000);

    return () => {
      clearInterval(rotateEvery5Seconds);
    };
  }, [isRotating]);

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="w-full  bg-transparent border-purple-400 rounded-2xl"
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
      >
        {/* Aquí insertamos el componente Smartwatchmockup en lugar de la imagen */}
        <Mockupcolors/>
      </motion.div>
    </div>
  );
};

export default Fonts3;