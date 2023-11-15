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
  }, []); 

  return (
    <Section
      title="Webmaster"
      subtitle="Estratega Digital"
      color="black"
      id="webmaster"
      imageSrc="/Img/webmaster.avif"
      alt="webmaster"
      height={600}
      width={800}
    >
    </Section>
  );
}

export default Index;