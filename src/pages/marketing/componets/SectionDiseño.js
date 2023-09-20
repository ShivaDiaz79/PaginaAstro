import React, { useState } from "react";

const SectionDiseño = () => {
  const [activeTab, setActiveTab] = useState("Contenido"); // Estado para rastrear la pestaña activa

  const tabs = ["Contenido", "Interacción", "Analítica"];

  const content = {
    Contenido: `Desarrollamos contenido excepcional que cautiva a tu audiencia y potencia tu marca. Diseñamos imágenes y gráficos de alta calidad que dejan una impresión duradera.Planificamos estratégicamente tus publicaciones para mantenerte siempre relevante y en la mente de tus seguidores. Programación de Publicaciones: Tu Presencia, Siempre en el Momento Justo Optimizamos tu horario de publicación para llegar a tu audiencia en los momentos más efectivos.Utilizamos herramientas avanzadas para asegurarnos de que tus publicaciones sean precisas y puntuales.`,
    Interacción: `Gestión Activa de la Comunidad Mantenemos una interacción en tiempo real con tus seguidores para fomentar relaciones sólidas y leales. Monitorizamos y respondemos a comentarios, mensajes y menciones para mantener tu presencia impecable.  Eventos y Transmisiones en Vivo Organizamos eventos en vivo para mantener a tu audiencia comprometida y entusiasmada. Transmitimos en vivo para conectar directamente con tu audiencia y generar un impacto memorable.`,

    Analítica: ` Analítica Predictiva de Vanguardia Utilizamos analítica avanzada y herramientas de inteligencia artificial para predecir tendencias y comportamientos de tu audiencia. Segmentamos tu audiencia de manera precisa para una estrategia ultraeficiente. sSubsección  Optimización en Tiempo Real Realizamos ajustes en tiempo real en función de los datos y las tendencias emergentes. Garantizamos un retorno de inversión (ROI) constante y maximizamos la eficacia de tus campañas.`,
  };

  // Función para cambiar la pestaña activa
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Función para renderizar información
  const renderInfo = (label, value) => (
    <div className="flex border-t border-gray-200 py-2">
      <span className="text-gray-500">{label}</span>
      <span className="ml-auto text-gray-900">{value}</span>
    </div>
  );

  // Función para renderizar cantidad
  const renderQuantity = (label, value) => (
    <div className="flex border-t border-b mb-6 border-gray-200 py-2">
      <span className="text-gray-500">{label}</span>
      <span className="ml-auto text-gray-900">{value}</span>
    </div>
  );

  // Función para renderizar precio y botón
  const renderPriceButton = () => (
    <div className="flex">
      <span className="title-font font-medium text-xl text-gray-900">
      Nuestros servicios de gestión de redes sociales no se limitan a la publicación de contenido; se trata de crear una presencia en línea sólida y efectiva que construya relaciones genuinas con tu audiencia y genere resultados cuantificables para tu empresa. Deja que nuestra experiencia y pasión por el marketing en redes sociales impulsen el crecimiento de tu marca en el mundo digital.
      </span>
    </div>
  );

  return (
    <section className="text-gray-600 body-font overflow-hidden flex flex-col-1">
      <div className="px-5 py-24 mx-auto flex flex-col-1">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              Maximiza tu Presencia en Línea y Conecta con tu Audiencia de
              Manera Impactante
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Servicios de Gestión de Redes Sociales: La Diferencia que
              Necesitas
            </h1>
            <div className="flex mb-4">
              {tabs.map((tab) => (
                <a
                  key={tab}
                  className={`flex-grow ${
                    activeTab === tab
                      ? "text-indigo-500 border-b-2 border-indigo-500"
                      : "border-b-2 border-gray-300"
                  } py-2 text-lg px-1`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </a>
              ))}
            </div>

            <p className="leading-relaxed mb-4">{content[activeTab]}</p>
            {renderInfo("React Native:", "Puntuación en el ranking: Muy alta")}
            {renderInfo(
              "Flutter (Dart):",
              "Puntuación en el ranking: En constante crecimiento"
            )}
            {renderQuantity(
              "Xamarin (C#):",
              "Puntuación en el ranking: Sólida"
            )}
            {renderPriceButton()}
          </div>
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src="https://res.cloudinary.com/di1v23yy0/image/upload/v1694283339/man-with-computer-and-digital-code-on-dark-background_514344-2036_omzpmn.avif"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionDiseño;
