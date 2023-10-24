import React, { useState } from "react";
import Desktopmockup from "./Desktopmockup";
import FontsWeb from "../../../../components/FontsWeb";

const SectionLapto = () => {
  const [activeTab, setActiveTab] = useState("React"); // Estado para rastrear la pestaña activa

  const tabs = ["React", "Next", "Astro"];

  const content = {
    React: `Es el pilar detrás de las interfaces de usuario dinámicas e interactivas que cautivan a los usuarios.
    Componentes Reutilizables para acelerar el desarrollo y mantener la coherencia visual.
    Gestión Efectiva del Estado crucial para aplicaciones empresariales complejas.`,
    Next: `Desarrollo Web Moderno a Otro Nivel con Enrutamiento Dinámico Next.js potencia la representación en el lado del servidor (SSR) para una experiencia fluida.
    Su Arquitectura Escalable sin problemas y construye aplicaciones web robustas sin comprometer el rendimiento.
    Con un ecosistema de Desarrollo Completo de herramientas y bibliotecas para un desarrollo eficiente..`,
    Astro: `Con Eficiencia y Rendimiento Inigualables revoluciona el desarrollo web al crear sitios ultrarrápidos y altamente eficientes.
    Su optimización de Rendimiento Ofrece un rendimiento incomparable, lo que se traduce en tiempos de carga más rápidos y una experiencia del usuario excepcional.
    Reducción de Costos operativos al minimizar la carga de trabajo del servidor y al mismo tiempo brinda una experiencia de usuario de primera clase.`,
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


  const renderPriceButton = () => (
    <div className="flex">
      <span className="title-font  text-justify tracking-tighter font-medium text-base text-black font-rubik">
        Te ofrecemos la creacion de un sitio web desarrollado con los lenguajes
        de programción Next.js, React y Astro.js con un alto rendimiento,
        interactividad, SEO amigable, optimiza recursos, proporciona una
        experiencia de desarrollo eficiente, enfatiza la accesibilidad, tiene
        una gran comunidad de desarrollo y es compatible con múltiples
        plataformas y dispositivos. <br/>
        En conjunto, estas tecnologías crean un sitio web de alto rendimiento y
        eficiente tanto en el desarrollo como en la experiencia del usuario.
        Importantes empresas y organizaciones tecnológicas, como Netflix, Uber,
        Airbnb, Facebook, Instagram, WhatsApp, y muchas otras, confían en estos
        lenguajes para sus aplicaciones y sitios web. Estos son reconocidos por
        su escalabilidad, rendimiento y flexibilidad, lo que los hace ideales
        para grandes empresas con una amplia base de usuarios y requisitos
        exigentes.
      </span>
    </div>
  );

  return (
    <section className="text-black body-font overflow-hidden flex flex-col-1">
      <div className="p-5 sm:ps-20 py-24 mx-auto flex flex-col-1">
        <div className=" mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-black tracking-widest text-center">
              Diseñamos Experiencias Digitales para tu Negocio con Programación
              Pura.
            </h2>
            <h1 className="text-black text-3xl title-font font-medium mb-4 text-center">
              Desarrollo Nativo con Astro.js, Next.js y React.js
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
         <FontsWeb/>
        </div>
      </div>
    </section>
  );
};

export default SectionLapto;
