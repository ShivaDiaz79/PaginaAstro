import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

const SectionDiseño = () => {
  const [activeTab, setActiveTab] = useState("Contenido");

  const tabs = ["Contenido", "Interacción", "Analítica"];

  const content = {
    Contenido: `Desarrollamos contenido excepcional que cautiva a tu audiencia y potencia tu marca. Diseñamos imágenes y gráficos de alta calidad que dejan una impresión duradera.Planificamos estratégicamente tus publicaciones para mantenerte siempre relevante y en la mente de tus seguidores. Programación de Publicaciones: Tu Presencia, Siempre en el Momento Justo Optimizamos tu horario de publicación para llegar a tu audiencia en los momentos más efectivos.Utilizamos herramientas avanzadas para asegurarnos de que tus publicaciones sean precisas y puntuales.`,
    Interacción: `Gestión Activa de la Comunidad Mantenemos una interacción en tiempo real con tus seguidores para fomentar relaciones sólidas y leales. Monitorizamos y respondemos a comentarios, mensajes y menciones para mantener tu presencia impecable.  Eventos y Transmisiones en Vivo Organizamos eventos en vivo para mantener a tu audiencia comprometida y entusiasmada. Transmitimos en vivo para conectar directamente con tu audiencia y generar un impacto memorable.`,
    Analítica: `Analítica Predictiva de Vanguardia Utilizamos analítica avanzada y herramientas de inteligencia artificial para predecir tendencias y comportamientos de tu audiencia. Segmentamos tu audiencia de manera precisa para una estrategia ultraeficiente. Subsección Optimización en Tiempo Real Realizamos ajustes en tiempo real en función de los datos y las tendencias emergentes. Garantizamos un retorno de inversión (ROI) constante y maximizamos la eficacia de tus campañas.`,
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderInfo = (label, value) => (
    <div className="flex border-t border-gray-200 py-2 font-oswald">
      <span className="text-black">{label}</span>
      <span className="ml-auto text-black">{value}</span>
    </div>
  );

  const renderQuantity = (label, value) => (
    <div className="flex border-t border-b mb-6 border-gray-200 py-2 font-oswald">
      <span className="text-black">{label}</span>
      <span className="ml-auto text-black">{value}</span>
    </div>
  );

  const renderPriceButton = () => (
    <div className="flex">
      <span className="title-font font-medium text-lg text-gray-900 font-rubik">
        Nuestros servicios de gestión de redes sociales no se limitan a la publicación de contenido; se trata de crear una presencia en línea sólida y efectiva que construya relaciones genuinas con tu audiencia y genere resultados cuantificables para tu empresa. Deja que nuestra experiencia y pasión por el marketing en redes sociales impulsen el crecimiento de tu marca en el mundo digital.
      </span>
    </div>
  );

  useEffect(() => {
    // Animación de entrada de la imagen con GSAP
    const tl = gsap.timeline({ delay: 0.6 });

    tl.fromTo(
      ".featured-image",
      {
        opacity: 0,
        x: -100, // Mueve la imagen fuera de la pantalla hacia la izquierda
        scale: 1.2, // Escala inicial aumentada
      },
      {
        opacity: 1,
        x: 0, // Devuelve la imagen a su posición original
        scale: 1, // Escala original
        duration: 0.5, // Duración de la animación
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <section className="text-black body-font overflow-hidden flex flex-col-1 font-oswald">
      <div className="px-5 py-24 mx-auto flex flex-col-1">
        <div className="lg:w-5/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm text-center title-font text-black tracking-widest font-oswald">
              Maximiza tu Presencia en Línea y Conecta con tu Audiencia 
            </h2>
            <h1 className="text-black text-2xl title-font text-center font-medium mb-4">
              Gestión de Redes Sociales: La Diferencia que
              Necesitas
            </h1>
            {renderPriceButton()}
            <div className="flex mb-4">
              {tabs.map((tab) => (
                <a
                  key={tab}
                  className={`flex-grow ${
                    activeTab === tab
                      ? "text-white border-b-2 border-indigo-500"
                      : "border-b-2 border-gray-300"
                  } py-2 text-lg px-1`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </a>
              ))}
            </div>
         

            <p className="leading-relaxed mb-4">
              <span className="font-semibold  font-oswald">Descripcion:</span>{" "}
              {content[activeTab]}
            </p>
            {renderInfo("Facebook--->", "Más de 2.8 mil millones usuarios activos.")}
            {renderInfo(
              "Instagram--->",
              "Más de 1.2 mil millones usuarios activos."
            )}
            {renderQuantity(
              "Tik Tok--->",
              "Más de 2 mil millones usuarios activos."
            )}
           
          </div>
          <img
            alt="redes"
            className="featured-image lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded rounded-3xl sm:rounded-full"
            src="https://res.cloudinary.com/di1v23yy0/image/upload/v1696923504/redeseditada_xidzxw.png"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionDiseño;



