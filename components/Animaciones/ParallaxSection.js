import React from "react";
import { motion } from "framer-motion";

const ParallaxSection = ({ children }) => {
  return (
    <motion.section
      className="h-screen flex items-center justify-center parallax-section"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.8 }} // Configuración inicial de la animación de letras
        animate={{ opacity: 1, y: 10, scale: 4 }}     // Configuración de animación de letras al aparecer
        transition={{ type: "spring", stiffness: 200, damping: 25, delay: 1 }} // Ajusta estos valores para cambiar la elasticidad
      >
        {children}
      </motion.div>
    </motion.section>
  );
};

export default ParallaxSection;




