/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { motion, useCycle, useAnimation } from "framer-motion";
import Laptopmockup from "@/pages/webSite/components/Laptopmockup";

const FontsWeb3 = () => {
  const [isFlipped, toggleFlip] = useCycle(false, true);
  const [isRotating, setIsRotating] = useState(false);
  const controls = useAnimation();

  const handleClick = () => {
    setIsRotating(!isRotating);
  };

  const handleScroll = () => {
    if (window.scrollY > 200) {
      // Cambia el valor de 200 según tu preferencia
      controls.start({ rotateY: isRotating ? 0 : 180 });
      setIsRotating(!isRotating);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isRotating, controls]);

  return (
    <div className="flex justify-center items-center mx-auto">
      <motion.div
        className="w-full h-full bg-transparent border-purple-400 rounded-2xl"
        style={{
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
        }}
        animate={controls}
        transition={{
          duration: 3, 
          type: "spring",
        }}
        onTap={handleClick}
        whileHover={{
          rotateY: 360, 
        }}
      >
        <Laptopmockup />
      </motion.div>
    </div>
  );
};

export default FontsWeb3;




