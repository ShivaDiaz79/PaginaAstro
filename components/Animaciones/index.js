import React, { useEffect } from 'react';
import Section from 'components/Section';
import Image from 'next/image';


function Index() {
  useEffect(() => {
    function isEdge() {
      return (
        navigator.userAgent.indexOf("Edge") > -1 ||
        navigator.userAgent.indexOf("Edg") > -1
      );
    }

    const imageElement = document.querySelector("#bg-image-animaciones");

    if (imageElement) {
      if (isEdge()) {
        imageElement.src = "animaciones.webp";
      } else {
        imageElement.src = "animaciones.avif";
      }
    }
  }, []); // Ejecutar una vez al montar el componente

  return (
    

    <Section
      title="Animaciones"
      subtitle="Desarrollo con Gsap, Framer Motion y Three"
      color="white"
      id="animaciones"
      imageSrc="https://res.cloudinary.com/di1v23yy0/image/upload/v1693867614/animaciones_qdssl9.avif"
      alt="animaciones"
      height={600}
      width={800}
      showFooterContent={true}
      // videoSrc="https://res.cloudinary.com/di1v23yy0/video/upload/v1693866207/animaciones_rpry6z.webm" 
    >
  

    </Section>
    
    
  );
}

export default Index;
