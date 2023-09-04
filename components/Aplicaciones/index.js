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
   
    
      {/* <div className="">
        <a
          className="border-[3px] border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium text-white px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors"
          href="#"
        >
          Conócenos un poco más
        </a>
      </div> */}
      <Section
        title="Aplicaciones"
        subtitle="Nativas"
        color="black"
        id="aplicaciones" // Asegúrate de que el id coincida con el de GridAnimations
        imageSrc="/Img/aplicaciones.avif"
        alt="aplicaciones"
        height={600}
        width={800}
      />
  
    </div>
  );
}

export default Index;

