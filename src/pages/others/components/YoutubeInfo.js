import React from "react";

function SectionTitle({ title, content }) {
  return (
    <>
      <h2 className=" font-rubik title-font font-extrabold tracking-widest text-black mb-4 text-xl text-center ">
        {title}
      </h2>
      <p>{content}</p>
    </>
  );
}

const YouTubeInfo = () => {
  const sections = [
    {
      title: "Soluciones Profesionales para Maximizar tu Presencia en YouTube",
      content: `¿Quieres llevar la presencia de tu empresa al siguiente nivel en la
      plataforma de video más grande del mundo? ¡Estás en el lugar
      adecuado! En Astro Business Group, estamos especializados en la
      creación y administración de contenido de YouTube que no solo
      atraerá a tu audiencia, sino que también te ayudará a obtener
      ingresos significativos a través del programa de monetización de
      YouTube.`,
    },
    {
      title: "Generación de Contenido de Valor",
      content: `Nuestro equipo de creadores de contenido está dedicado a producir
      videos de alta calidad que capten la atención de tu público
      objetivo. Ya sea a través de tutoriales, reseñas de productos,
      contenido educativo o entretenimiento, trabajamos contigo para
      desarrollar una estrategia de contenido personalizada que refleje la
      esencia de tu marca.`,
    },
    {
      title: "Segmentación para Monetización",
      content: `Una de las claves para el éxito en YouTube es la segmentación
      efectiva. Ayudamos a tu empresa a identificar nichos específicos y
      oportunidades de mercado en YouTube para que puedas obtener los
      máximos ingresos de publicidad. Esto incluye optimizar los
      metadatos, etiquetas y palabras clave para aumentar la visibilidad
      de tus videos.`,
    },
    {
      title: "Maximiza tus Ingresos con YouTube",
      content: `El programa de socios de YouTube te permite ganar dinero con tus
      videos. YouTube paga alrededor del 55% de los ingresos generados por
      la publicidad a los creadores de contenido. Trabajamos contigo para
      cumplir con los requisitos del programa, como la cantidad de
      suscriptores y tiempo de visualización, para que puedas empezar a
      ganar dinero con tu canal.`,
    },
  ];

  return (
    <div className=" mb-20">
      {sections.map((section, index) => (
        <SectionTitle key={index} title={section.title} content={section.content} />
      ))}
    </div>
  );
};

export default YouTubeInfo;
