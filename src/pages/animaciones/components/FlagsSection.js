import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const AnimatedVideoComponent = ({ title, description, videoUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Animación de entrada del video utilizando GSAP
    gsap.from(videoRef.current, {
      opacity: 0.9,
      scale: 0.5,
      rotateY: -45, // Rotación 3D en el eje Y
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0.9, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 2 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      }}
    >
      <h2>{title}</h2>
      <p>{description}</p>
      <motion.div
        style={{
          width: '100%',
          maxWidth: '100%', // Ancho máximo para adaptarse a dispositivos móviles y de escritorio
          overflow: 'hidden',
          borderRadius: '10px',
          paddingTop: '56.25%', // Proporción de aspecto 16:9 para el contenedor del video
          position: 'relative',
        }}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
      >
        <iframe
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
          }}
          src={videoUrl}
          title="Video"
          frameBorder="0"
          allowFullScreen
          autoPlay
          muted
          playsInline
          ref={videoRef}
        ></iframe>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedVideoComponent;



