import React, { useEffect } from 'react';
import Section from 'components/Section';

function Index() {
  useEffect(() => {
    function isEdge() {
      return (
        navigator.userAgent.indexOf("Edge") > -1 ||
        navigator.userAgent.indexOf("Edg") > -1
      );
    }

    const imageElement = document.querySelector("#bg-image-others");

    if (imageElement) {
      if (isEdge()) {
        imageElement.src = "others.webp";
      } else {
        imageElement.src = "others.avif";
      }
    }
  }, []); // Ejecutar una vez al montar el componente

  return (
    <Section
      title="others"
      subtitle="Nativas"
      color="white"
      id="others"
      imageSrc="/Img/others.avif"
      alt="Descripción de la imagen"
      height={600}
      width={800}
      classsName="h-full"
    >
     
      
    </Section>
  );
}

export default Index;