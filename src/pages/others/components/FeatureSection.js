import React from "react";

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
        <div className=" mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium  title-font text-black mb-4">
            Soluciones Profesionales para Maximizar tu Presencia en YouTube
          </h1>
          <p className="">
            ¿Quieres llevar la presencia de tu empresa al siguiente nivel en la
            plataforma de video más grande del mundo? ¡Estás en el lugar
            adecuado! En [Tu Nombre de Agencia], estamos especializados en la
            creación y administración de contenido de YouTube que no solo
            atraerá a tu audiencia, sino que también te ayudará a obtener
            ingresos significativos a través del programa de monetización de
            YouTube.
          </p>
          <h2>Generación de Contenido de Valo</h2>
          <p>
            Nuestro equipo de creadores de contenido está dedicado a producir
            videos de alta calidad que capten la atención de tu público
            objetivo. Ya sea a través de tutoriales, reseñas de productos,
            contenido educativo o entretenimiento, trabajamos contigo para
            desarrollar una estrategia de contenido personalizada que refleje la
            esencia de tu marca.
          </p>
          <h2>Segmentación para Monetización</h2>
          <p>
            Una de las claves para el éxito en YouTube es la segmentación
            efectiva. Ayudamos a tu empresa a identificar nichos específicos y
            oportunidades de mercado en YouTube para que puedas obtener los
            máximos ingresos de publicidad. Esto incluye optimizar los
            metadatos, etiquetas y palabras clave para aumentar la visibilidad
            de tus videos.
          </p>
          <h2>Maximiza tus Ingresos con YouTube</h2>
          <p>
            El programa de socios de YouTube te permite ganar dinero con tus
            videos. YouTube paga alrededor del 55% de los ingresos generados por
            la publicidad a los creadores de contenido. Trabajamos contigo para
            cumplir con los requisitos del programa, como la cantidad de
            suscriptores y tiempo de visualización, para que puedas empezar a
            ganar dinero con tu canal
          </p>
        </div>
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
