import React, { useState } from "react";
import Desktopmockup from "./Desktopmockup";

const SectionLapto = () => {
  const [activeTab, setActiveTab] = useState("React"); // Estado para rastrear la pestaña activa

  const tabs = ["React", "Next", "Astro"];

  const content = {
    React: `Interfaz de Usuario Dinámica e Interactiva:Interfaz Dinámica: React.js es el pilar detrás de las interfaces de usuario dinámicas e interactivas que cautivan a los usuarios.
    Componentes Reutilizables: Aprovecha al máximo los componentes reutilizables para acelerar el desarrollo y mantener la coherencia visual.
    Gestión Efectiva del Estado: Ofrece una gestión eficaz del estado, crucial para aplicaciones empresariales complejas.`,
    Next: `Desarrollo Web Moderno a Otro Nivel: Enrutamiento Dinámico: Next.js potencia el enrutamiento dinámico y la representación en el lado del servidor (SSR) para una experiencia fluida.
    Arquitectura Escalable: Escala sin problemas y construye aplicaciones web robustas sin comprometer el rendimiento.
    Ecosistema de Desarrollo Completo: Aprovecha su ecosistema completo de herramientas y bibliotecas para un desarrollo eficiente..`,
    Astro: `Eficiencia y Rendimiento Inigualables:Eficiencia Extrema: Astro revoluciona el desarrollo web al crear sitios ultrarrápidos y altamente eficientes.
    Optimización de Rendimiento: Ofrece una optimización de rendimiento incomparable, lo que se traduce en tiempos de carga más rápidos y una experiencia del usuario excepcional.
    Reducción de Costos: Reduce los costos operativos al minimizar la carga de trabajo del servidor y al mismo tiempo brinda una experiencia de usuario de primera clase.`,
  };

  // Función para cambiar la pestaña activa
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Función para renderizar información
  const renderInfo = (label, value) => (
    <div className="flex border-t border-gray-200 py-2">
      <span className="text-black">{label}</span>
      <span className="ml-auto text-black">{value}</span>
    </div>
  );

  // Función para renderizar cantidad
  const renderQuantity = (label, value) => (
    <div className="flex border-t border-b mb-6 border-gray-200 py-2">
      <span className="text-black">{label}</span>
      <span className="ml-auto text-black">{value}</span>
    </div>
  );

  // Función para renderizar precio y botón
  // const renderPriceButton = () => (
  //   <div className="flex">

  //     {/* <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
  //       Button
  //     </button>
  //     <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
  //       <svg
  //         fill="currentColor"
  //         strokeLinecap="round"
  //         strokeLinejoin="round"
  //         strokeWidth="2"
  //         className="w-5 h-5"
  //         viewBox="0 0 24 24"
  //       >
  //         <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
  //       </svg>
  //     </button> */}
  //   </div>
  // );
  const renderPriceButton = () => (
    <div className="flex">
      <span className="title-font  text-justify tracking-tighter font-medium text-lg text-black font-rubik">
        Un sitio web desarrollado con Next.js, React y Astro.js ofrece un alto
        rendimiento, interactividad, es SEO amigable, optimiza recursos,
        proporciona una experiencia de desarrollo eficiente, enfatiza la
        accesibilidad, tiene una gran comunidad de desarrollo y es compatible
        con múltiples plataformas y dispositivos. En conjunto, estas tecnologías
        crean un sitio web de alto rendimiento y eficiente tanto en el
        desarrollo como en la experiencia del usuario. Importantes empresas y
        organizaciones tecnológicas, como Netflix, Uber, Airbnb, Facebook,
        Instagram, WhatsApp, y muchas otras, confían en tecnologías como
        Next.js y React.js y Astro.js para sus aplicaciones y sitios web. Estos lenguajes de programción
        son reconocidos por su escalabilidad, rendimiento y flexibilidad, lo que
        los hace ideales para grandes empresas con una amplia base de usuarios y
        requisitos exigentes.
      </span>
    </div>
  );

  return (
    <section className="text-black body-font overflow-hidden flex flex-col-1">
      <div className="px-5 py-24 mx-auto flex flex-col-1">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-black tracking-widest text-center">
              Explorando el Futuro del Desarrollo Web
            </h2>
            <h1 className="text-black text-3xl title-font font-medium mb-4">
            Desarrollo de Sitios Web Nativos con Astro.js, Next.js y React.js
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

            <p className="leading-relaxed mb-4">{content[activeTab]}</p>
            {renderInfo("React.js", "Popular")}
            {renderInfo("Next.js", "Potente")}
            {renderQuantity("Astro.js", "Rapido")}
          </div>
          <Desktopmockup />
        </div>
      </div>
    </section>
  );
};

export default SectionLapto;
