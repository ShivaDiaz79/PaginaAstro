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
  }, []); 

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
    </Section>
  );
}

export default Index;