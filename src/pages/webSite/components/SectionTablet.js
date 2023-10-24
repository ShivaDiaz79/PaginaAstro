import React, { useState } from "react";
import FontsWeb2 from "../../../../components/FontsWeb2";

// Función para renderizar un párrafo con estilo personalizado
const renderStyledParagraph = (text, className) => (
  <p className={`mb-8 leading-relaxed ${className}`}>{text}</p>
);

const SectionTablet = () => {
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
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black text-center">
            Sincronización Perfecta <br/>
            Optimiza tu Presencia en Línea con la
            Perfecta Fusión de CMS y Desarrollo Avanzado
          </h1>
          {renderStyledParagraph(
            "Hemos perfeccionado la tecnica en integración de los gestores de contenido líderes en la industria, WordPress, Shopify, Wix y otros con desarrollo web nativo de lenguaje de programacion modernos. Este enfoque nos permite llevar tu presencia en línea al siguiente nivel, por su rendimiento excepcional y una experiencia de usuario impecable al combinar la potencia de los CMS con la flexibilidad y la innovación del desarrollo avanzado. Esto significa que tu sitio web no solo se verá bien, sino que funcionará de manera excepcional en todas las plataformas.",
            "text-sm mt-2 text-black w-full"
          )}
          <div className="flex w-full md:justify-start justify-center items-end animate-pulse">
          <h1 className="mx-auto">Haz clic aqui ⬇️</h1>
          </div>
          <div className="flex lg:flex-row md:flex-col">
            <div className="sm:w-96 mt-4 border rounded border-gray-300 p-4">
              <p
                onClick={toggleDescription}
                className="text-black cursor-pointer text-center"
              >
                Flexibilidad y Escalabilidad:
              </p>
              {isDescriptionOpen && (
                renderStyledParagraph(
                  "La combinación de gestores de contenido y desarrollo nativo proporciona la flexibilidad necesaria para personalizar y escalar tu sitio web según las necesidades cambiantes de tu negocio. Puedes crear características únicas, integrar servicios externos y mantener un control total sobre el diseño y la funcionalidad. Esta flexibilidad es esencial para adaptarse a las demandas de un mercado en constante evolución y asegurar el crecimiento continuo de tu presencia en línea.",
                  "leading-relaxed mb-4"
                )
              )}
            </div>
            <div className="sm:w-96 mt-4 border rounded border-gray-300 p-4">
              <p
                onClick={toggleReviews}
                className="text-black cursor-pointer text-center"
              >
                Rendimiento Optimizado:
              </p>
              {isReviewsOpen && (
                renderStyledParagraph(
                  "La integración de un gestor de contenido con una plataforma de desarrollo nativo, como React o Next.js, optimiza el rendimiento de tu sitio web. Esto significa tiempos de carga más rápidos, lo que es crucial para retener a los visitantes y mejorar el SEO. Además, garantiza una experiencia de usuario fluida, lo que se traduce en tasas de conversión más altas y visitantes más satisfechos.",
                  "leading-relaxed mb-4"
                )
              )}
            </div>
          </div>
          <h1 className="mx-auto text-2xl pt-4">¿Qué te ofrecemos?</h1>
          {renderStyledParagraph(
            "Desarrollo de Clase Mundial: Utilizamos las últimas tecnologías para crear sitios web y aplicaciones de alto rendimiento que superan tus expectativas.",
            "mb-2"
          )}
          {renderStyledParagraph(
            "Diseño a Medida: Cada proyecto es único, y así es como lo tratamos.",
            "mb-2"
          )}
          {renderStyledParagraph(
            "Optimización para la Experiencia del Usuario: Nos enfocamos en la comodidad del usuario en cada paso. Desde la velocidad de carga hasta la navegación intuitiva, todo se diseña pensando en el usuario.",
            "mb-2"
          )}
          {renderStyledParagraph(
            "Mantenimiento Continuo: No te abandonamos después del lanzamiento. Ofrecemos servicios de mantenimiento y actualización para garantizar que tu sitio siempre esté a la vanguardia.",
            "mb-2"
          )}
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <FontsWeb2/>
        </div>
      </div>
    </section>
  );
};

export default SectionTablet;

