import React from 'react';
import { motion } from 'framer-motion';

const AnimatedCard = ({ title, description }) => {
  return (
    <motion.div
      className='sm:mx-auto px-2 text-center'
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2.5 }}
      style={{
        width: '100%', // Ancho predeterminado para dispositivos móviles
        height: '100%',
        maxWidth: '900px', // Ancho máximo para pantallas de escritorio
        background: 'linear-gradient(45deg, #FFD7, #FF63)',
        borderRadius: '10px',
        boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
        padding: '20px',
        color: 'black',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '24px ', marginBottom: '10px' }}>{title}</h2>
      <p style={{ fontSize: '16px' }}>{description}</p>
    </motion.div>
  );
};

export default AnimatedCard;

