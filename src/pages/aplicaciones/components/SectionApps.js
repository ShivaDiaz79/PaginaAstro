import React, { useState } from "react";

import Smartwatchmockup from "./Smartwatchmockup";

// Función para renderizar un párrafo con estilo personalizado
const renderStyledParagraph = (text, className) => (
  <p className={`mb-8 leading-relaxed ${className}`}>{text}</p>
);

const SectionApps = () => {
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isReviewsOpen, setReviewsOpen] = useState(false);

  const toggleDescription = () => {
    setDescriptionOpen(!isDescriptionOpen);
  };

  const toggleReviews = () => {
    setReviewsOpen(!isReviewsOpen);
  };

  return (
    <section className="text-black body-font">
      <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center ">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 text-center font-medium text-black">
            Desarrollo de Aplicaciones Móviles Nativas
          </h1>
          {renderStyledParagraph(
            "En Astro, somos expertos en el desarrollo de aplicaciones móviles nativas, brindando soluciones de alta calidad y rendimiento para tus necesidades específicas. Nuestro equipo de desarrolladores altamente capacitados y experimentados utiliza los lenguajes de programación más reconocidos en la industria para crear aplicaciones nativas para las principales plataformas móviles. Las aplicaciones nativas desarrolladas específicamente para plataformas como Apple (iOS) o Android se refieren a software diseñado y programado exclusivamente para funcionar en el sistema operativo y hardware de un dispositivo en particular. Estas aplicaciones están escritas utilizando lenguajes y entornos de desarrollo nativos de la plataforma objetivo, lo que les permite aprovechar al máximo las características y capacidades únicas de cada sistema.",
            "text-xl text-black  mt-2 w-full"
          )}
            <div className="flex w-full md:justify-start justify-center items-end animate-pulse">
            <h1>Haz clic aqui ⬇️</h1>
          </div>
          <div className="flex lg:flex-row md:flex-col">
            <div className="w-full mt-4 border rounded border-red-700 p-4">
              <p
                onClick={toggleDescription}
                className="text-black cursor-pointer"
              >
                iOS (Apple):
              </p>
              {isDescriptionOpen && (
                <p className="leading-relaxed mb-4">
                  Creamos aplicaciones nativas para dispositivos Apple,
                  incluyendo iPhone, iPad y Apple Watch, utilizando el lenguaje
                  de programación Swift, garantizando un rendimiento óptimo y
                  una experiencia de usuario excepcional en los dispositivos
                  iOS.<br/>
                  
                </p>
              )}
            </div>
            <div className="w-full mt-4 border rounded border-red-700 p-4">
              <p
                onClick={toggleReviews}
                className="text-black cursor-pointer"
              >
                Android (Google)
              </p>
              {isReviewsOpen && (
                <p className="leading-relaxed mb-4 text-black">
                  Desarrollamos aplicaciones nativas para dispositivos Android utilizando Java o Kotlin, los lenguajes líderes en esta plataforma. Esto nos permite aprovechar al máximo las características de Android y llegar a una amplia base de usuarios.
                </p>
              )}
            </div>
           
          </div>
          <p className="leading-relaxed mb-4 text-xl pt-10">
            Ofrecemos servicios de desarrollo de aplicaciones móviles nativas de alta calidad que cumplen con los estándares más exigentes de la industria. Si estás listo para llevar tu idea o negocio al siguiente nivel con una aplicación móvil nativa, ¡contáctanos hoy mismo para obtener más información y una consulta gratuita!
                </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Smartwatchmockup />
        </div>
      </div>
    </section>
  );
};

export default SectionApps;
