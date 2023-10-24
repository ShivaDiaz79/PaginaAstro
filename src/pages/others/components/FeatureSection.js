import React from "react";
import YouTubeInfo from "./YoutubeInfo";

function FeatureLink({ text }) {
  return (
    <a>
      <span className="bg-indigo-100 text-indigo-500 w-4 h-4 mr-2 rounded-full inline-flex items-center justify-center">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          className="w-3 h-3"
          viewBox="0 0 24 24"
        >
          <path d="M20 6L9 17l-5-5"></path>
        </svg>
      </span>
      {text}
    </a>
  );
}

function FeatureColumn({ title, links }) {
  return (
    <div className="p-4 lg:w-1/4 sm:w-1/2 w-full">
      <h2 className="font-medium title-font tracking-widest text-black mb-4 text-sm  sm:text-left">
        {title}
      </h2>
      <nav className="flex flex-col sm:items-start sm:text-left  items-center -mb-1 space-y-2.5">
        {links.map((text, index) => (
          <FeatureLink key={index} text={text} />
        ))}
      </nav>
    </div>
  );
}

const FeatureSection = () => {
  const features = [
    {
      title: "Audiencia Global",
      links: [
        "Alcance Mundial.",
        "Diversidad de espectadores.",
        "Personas de todo el mundo.",
        "Mayor potencial de crecimiento",
        "Diferentes culturas y mercados.",
      ],
    },
    {
      title: "Potencial de Ingresos",
      links: [
        "Ganar dinero a través de anuncios.",
        "Ingresos de membresías de canal",
        "Colaboraciones pagadas con marcas.",
        "Ingresos pasivos a largo plazo.",
        "Diversificar fuentes de ingresos",
      ],
    },
    {
      title: "Creatividad y Expresión",
      links: [
        "Libertad creativa en la creación.",
        "Compartir pasiones e intereses.",
        "Opiniones y perspectivas personales.",
        "Destacar habilidades y talentos.",
        "Experimentar con diferentes formatos.",
      ],
    },
    {
      title: "Interacción y Comunidad",
      links: [
        "Creacion de comunidad de seguidores leales.",
        "Comunicación directa con la audiencia.",
        "Retroalimentación de los espectadores",
        "Generar debates y conversaciones.",
        "Pertenencia a una comunidad en línea.",
      ],
    },
  ];

  return (
    <section className="text-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <YouTubeInfo/>

        <div className="flex flex-wrap -m-4">
          {features.map((feature, index) => (
            <FeatureColumn key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
