import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const images = ["gsap1.avif", "cover.png", "three.jpg"]; // Agrega las imágenes aquí

const GridAnimations = () => {
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
    <Link href="/animaciones"> {/* Asegúrate de que la ruta sea correcta */}
    <div className="flex flex-wrap justify-center items-center min-h-full">
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="w-full md:w-1/3 p-4 relative"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
            zIndex: images.length - index,
            transform: `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(40px)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {/* Agrega el enlace aquí */}
         
            
              <motion.img
                src={`/Img/${image}`}
                alt={`Image ${index}`}
                className=" h-40 w-40 sm:w-80 sm:h-80 rounded-full mx-auto"
              />
          
        

          <motion.h3
            className="text-center text-white text-xl mt-2 absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
          >
            {/* Contenido opcional */}
          </motion.h3>
        </motion.div>
      ))}
    </div>
    </Link>
  );
};

export default GridAnimations;


