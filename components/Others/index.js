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
  }, []); 

  return (
    <Section
      title="Otros"
      subtitle="Servicios"
      color="white"
      id="others"
      imageSrc="https://res.cloudinary.com/di1v23yy0/image/upload/v1693866194/others_paiigj.avif"
      alt="otros"
      height={600}
      width={800}
      classsName="h-full"
    >
    </Section>
  );
}

export default Index;