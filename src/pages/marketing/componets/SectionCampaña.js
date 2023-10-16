import React from "react";
import UxUiInfo from "./UxUiInfo";
import Image from "next/image";

const SectionCampaña = () => {
  return (
    <section className="text-black body-font">
      <div className="container px-5 pt-24 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-xl overflow-hidden">
          <Image
            alt="feature"
            className="sm:pt-40 object-cover object-center transform hover:scale-110 transition-transform duration-300 ease-in-out ro"
            src="https://res.cloudinary.com/di1v23yy0/image/upload/v1696923662/disen%CC%83ografico_f8gclu.png"
            height={1200}
            width={1200}
          />
        </div>
        <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
          {[
            {
              title: "Diseño de Experiencia de Usuario (UX):",
              description:
                "Entendemos que la interacción del usuario con tu marca es crucial. Por eso, nuestro servicio de diseño de experiencia de usuario (UX) se enfoca en crear interfaces intuitivas y funcionales que mejoren la satisfacción del usuario y aumenten la retención. Cada aspecto del diseño se adapta a las necesidades y deseos de tu audiencia, creando experiencias inolvidables.",
            },
            {
              title: "Diseño de Interfaz de Usuario (UI)",
              description:
                "El diseño de interfaz de usuario (UI) es el puente entre tu marca y tu audiencia. Creamos interfaces atractivas y efectivas que no solo son visualmente agradables, sino que también optimizan la interacción del usuario para impulsar la conversión y el compromiso. Cada elemento se selecciona y coloca estratégicamente para mejorar la usabilidad y la estética.",
            },
            {
              title: "Auditoría y Optimización ",
              description:
                "Nuestra auditoría de UX/UI es una evaluación profunda de la experiencia del usuario y la interfaz de usuario de tu sitio web o aplicación existente. Nuestros expertos en UX/UI analizarán minuciosamente cada aspecto, desde la navegación y la usabilidad hasta la estética y la coherencia visual. Luego, proporcionaremos recomendaciones detalladas para mejorar.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col mb-10 lg:items-start items-center"
            >
              {/* <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div> */}
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font text-center font-extrabold mb-3">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-base bg-slate-400 p-5 rounded-xl transform hover:scale-110 transition-transform duration-300 ease-in-out">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <UxUiInfo />
      </div>
    </section>
  );
};

export default SectionCampaña;
