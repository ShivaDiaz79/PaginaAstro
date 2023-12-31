
import React, { useState, useEffect } from "react";
import { motion, useCycle } from "framer-motion";

const AnimatedSquare = () => {
  const [isFlipped, toggleFlip] = useCycle(false, true);
  const [isRotating, setIsRotating] = useState(false);
  const [imageIndex, setImageIndex] = useState(0);
  const images = [
    "https://res.cloudinary.com/di1v23yy0/image/upload/v1693866195/webmaster_qwlkul.avif",
    "https://res.cloudinary.com/di1v23yy0/image/upload/v1693927570/uxui_xhns4s.avif",
  ]; // Reemplaza con las URL de tus imágenes

  const handleClick = () => {
    setIsRotating(!isRotating);
  };

  useEffect(() => {
    // Función para rotar cada 5 segundos
    const rotateEvery5Seconds = setInterval(() => {
      setIsRotating(!isRotating);
      // Cambiar el índice de la imagen cuando se complete una rotación
      setImageIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
    }, 5000);

    return () => {
      clearInterval(rotateEvery5Seconds);
    };
  }, [isRotating]);

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="w-80 h-80 bg-blue-500 rounded-2xl"
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
          backgroundImage: `url(${images[imageIndex]})`,
          backgroundSize: "cover",
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
