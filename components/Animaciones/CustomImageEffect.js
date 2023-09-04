import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = ["e.jpg", "f.jpg", "i.jpg"]; // Agrega las imágenes aquí

const CustomImageEffect = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const rotateX = isClient ? (cursorPosition.y - window.innerHeight / 2) * -0.1 : 0;
  const rotateY = isClient ? (cursorPosition.x - window.innerWidth / 2) * 0.1 : 0;

  return (
    <div className="flex flex-wrap justify-center items-center h-screen">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="w-full md:w-1/3 p-4 relative"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
            zIndex: images.length - index,
            transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(30px)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.img
            src={`/Img/${image}`}
            alt={`Image ${index}`}
            className="w-full h-auto"
          />
          <motion.h3
            className="text-center text-white text-xl mt-2 absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
          >
            Texto Animado
          </motion.h3>
        </motion.div>
      ))}
    </div>
  );
};

export default CustomImageEffect;


