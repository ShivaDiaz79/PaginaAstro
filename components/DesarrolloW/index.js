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

    const imageElement = document.querySelector("#bg-image-website");

    if (imageElement) {
      if (isEdge()) {
        imageElement.src = "website.webp";
      } else {
        imageElement.src = "website.avif";
      }
    }
  }, []); // Ejecutar una vez al montar el componente

  return (
    <Section
      title="Web Site"
      subtitle="Artesanos sin limites"
      color="black"
      id="website" 
      imageSrc="https://res.cloudinary.com/di1v23yy0/image/upload/v1693866193/website_oegwut.avif"
      alt="website"
      height={600}
      width={800}
      
    >
    
    
    </Section>
  );
}

export default Index;