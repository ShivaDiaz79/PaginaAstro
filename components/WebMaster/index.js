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

    const imageElement = document.querySelector("#bg-image-webmaster");

    if (imageElement) {
      if (isEdge()) {
        imageElement.src = "webmaster.webp";
      } else {
        imageElement.src = "webmaster.avif";
      }
    }
  }, []); // Ejecutar una vez al montar el componente

  return (
    <Section
      title="Webmaster"
      subtitle=""
      color="black"
      id="webmaster"
      imageSrc="/Img/webmaster.avif"
      alt="webmaster"
      height={600}
      width={800}
    >
      <div className="">
        <a
          className="border-[3px] border-white bg-white/5 backdrop-blur-sm text-sm rounded font-medium text-white px-12 py-2 inline-block hover:bg-white hover:text-black transition-colors"
          href="#"
        >
          Conócenos un poco más
        </a>
      </div>
    
    </Section>
  );
}

export default Index;