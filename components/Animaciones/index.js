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
      subtitle="Nativas"
      color="white"
      id="animaciones"
      // imageSrc="/Img/animaciones.avif"
      // alt="animaciones"
      // height={600}
      // width={800}
      // showFooterContent={true}
      videoSrc="/Img/animaciones.webm" 
    >
  

    </Section>
    
    
  );
}

export default Index;
