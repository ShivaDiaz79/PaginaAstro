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
      initial={{ opacity: 0.9, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 2 }}
      className="flex flex-col md:flex-row" // Utilizamos flex-col en móviles y flex-row en pantallas grandes
    >
      <div className="md:w-1/2 p-4">
        <h2>{title}</h2>
        <p className='mx-3'>{description}</p>
      </div>
      <div className="md:w-1/2">
        <motion.div
          className="relative w-full overflow-hidden rounded-lg"
          whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        >
          <video
            className="w-full h-full" // En pantallas móviles, el ancho es completo, en pantallas grandes, la altura es completa
            src={videoUrl}
            title="Video"
            frameBorder="0"
            allowFullScreen
            autoPlay
            muted
            controls
            loop
            ref={videoRef}
          ></video>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AnimatedVideoComponent;




