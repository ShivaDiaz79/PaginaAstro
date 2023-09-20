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

    const imageElement = document.querySelector("#bg-image-aplicaciones");

    if (imageElement) {
      if (isEdge()) {
        imageElement.src = "aplicaciones.webp";
      } else {
        imageElement.src = "aplicaciones.avif";
      }
    }
  }, []); // Ejecutar una vez al montar el componente

  return (
    <div className="">
   
    
   
      <Section
        title="Aplicaciones"
        subtitle="Nativas, Hibridas y Gestor de Contenido de Aplicaciones Móviles:"
        color="black"
        id="aplicaciones" // Asegúrate de que el id coincida con el de GridAnimations
        imageSrc="https://res.cloudinary.com/di1v23yy0/image/upload/v1693866193/aplicaciones_llr2qi.avif"
        alt="aplicaciones"
        height={600}
        width={800}
      />
  
    </div>
  );
}

export default Index;

