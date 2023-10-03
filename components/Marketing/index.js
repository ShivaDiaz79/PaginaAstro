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

    const imageElement = document.querySelector("#bg-image-marketing");

    if (imageElement) {
      if (isEdge()) {
        imageElement.src = "marketing.webp";
      } else {
        imageElement.src = "marketing.avif";
      }
    }
  }, []); // Ejecutar una vez al montar el componente

  return (
    <Section
      title="Marketing"
      subtitle="Social Media"
      color="white"
      id="marketing"
      imageSrc="https://res.cloudinary.com/di1v23yy0/image/upload/v1693866194/marketing_ymm3mz.avif"
      alt="marketing"
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