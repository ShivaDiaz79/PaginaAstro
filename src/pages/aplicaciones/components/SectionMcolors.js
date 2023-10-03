import React, { useState } from "react";
import Mockupcolors from "./Mockupcolors";

const SectionMcolors = () => {
  const [activeTab, setActiveTab] = useState("Compatibilidad"); // Estado para rastrear la pestaña activa

  const tabs = ["Compatibilidad", "Despliegue", "Mantenimiento"];

  const content = {
    Compatibilidad: `Compatibilidad Multiplataforma: Las aplicaciones móviles híbridas están diseñadas para funcionar en múltiples plataformas, incluyendo iOS y Android. Esto significa que puedes llegar a un público más amplio con una sola base de código, lo que reduce los costos y el tiempo de desarrollo.`,
    Despliegue: `Rápido Despliegue: El desarrollo híbrido permite un desarrollo más rápido y un tiempo de lanzamiento más corto en comparación con las aplicaciones nativas. Esto es crucial para llegar al mercado de manera ágil y aprovechar las oportunidades.`,
    Mantenimiento: `Facilidad de Mantenimiento: Con una sola base de código para múltiples plataformas, las actualizaciones y correcciones de errores son más fáciles de implementar y mantener. Esto ahorra tiempo y recursos a largo plazo.`,
  };

  // Función para cambiar la pestaña activa
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Función para renderizar información
  const renderInfo = (label, value) => (
    <div className="flex border-t border-gray-200 font-oswald py-2">
      <span className="text-black">{label}</span>
      <span className="ml-auto text-black">{value}</span>
    </div>
  );

  // Función para renderizar cantidad
  const renderQuantity = (label, value) => (
    <div className="flex border-t border-b mb-6 border-gray-200  font-oswald spy-2">
      <span className="text-black">{label}</span>
      <span className="ml-auto text-gray-900">{value}</span>
    </div>
  );

  // Función para renderizar precio y botón
  const renderPriceButton = () => (
    <div className="flex">
      <span className="title-font font-rubik text-xl text-black">
        Estas características destacan la versatilidad y las ventajas del desarrollo de aplicaciones móviles híbridas, que pueden ser una excelente opción dependiendo de los objetivos y requisitos específicos de tu proyecto.<br/>
        React Native es ampliamente reconocido y utilizado para el desarrollo de aplicaciones móviles híbridas. Es respaldado por Facebook y tiene una gran comunidad de desarrolladores. Permite la creación de aplicaciones para iOS y Android utilizando componentes de interfaz de usuario reutilizables y un solo código base escrito en JavaScript.<br/>
        Flutter, respaldado por Google, es otro marco popular para el desarrollo de aplicaciones móviles híbridas. Utiliza el lenguaje de programación Dart y ofrece un rendimiento de alta velocidad y una experiencia de usuario suave. Flutter ha ganado tracción en la comunidad de desarrollo y sigue creciendo en popularidad.<br/>
        Xamarin, adquirido por Microsoft, permite a los desarrolladores crear aplicaciones móviles híbridas utilizando C#. Ofrece una amplia gama de bibliotecas y herramientas para desarrolladores y una integración sólida con el ecosistema de Microsoft. Aunque su popularidad ha disminuido en comparación con React Native y Flutter, sigue siendo una opción viable.
      </span>
    </div>
  );

  // Función para renderizar las pestañas
  const renderTabs = () => (
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
  );

  return (
    <section className="text-blak body-font overflow-hidden flex flex-col lg:flex-row">
      <Mockupcolors />
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <div className="px-5 py-24 mx-auto">
          <h2 className="text-sm title-font text-black text-center tracking-widest">
            La Solución Versátil para Aplicaciones Móviles
          </h2>
          <h1 className="text-black text-3xl title-font font-medium mb-4">
            Desarrollo de Aplicaciones Móviles Híbridas
          </h1>
          {renderTabs()}
          <p className="leading-relaxed mb-4">{content[activeTab]}</p>
          {renderInfo("React Native:", "Puntuación en el ranking: Muy alta")}
          {renderInfo("Flutter (Dart):", "Puntuación en el ranking: En constante crecimiento")}
          {renderQuantity("Xamarin (C#):", "Puntuación en el ranking: Sólida")}
          {renderPriceButton()}
        </div>
      </div>
    </section>
  );
};

export default SectionMcolors;


