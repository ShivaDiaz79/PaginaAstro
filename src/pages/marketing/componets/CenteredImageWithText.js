import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

const campaignTitles = [
  "Lanzamiento de Producto:",
  "Campañas de Promoción:",
  "Campañas de Concientización:",
  "Campañas de Temporada:",
  "Campañas de Rebranding:",
];

const campaignDescriptions = [
  "Creamos campañas de alto impacto para presentar tus nuevos productos al mercado, generando anticipación y entusiasmo entre tu audiencia.",
  "Diseñamos estrategias promocionales efectivas que aumentan las ventas y fidelizan a los clientes existentes.",
  "Creamos campañas de concienciación que educan a tu audiencia sobre los beneficios de tus productos o servicios, construyendo una base de clientes leales.",
  "Diseñamos estrategias estacionales que capitalizan eventos y festividades para impulsar las ventas.",
  "Si estás relanzando tu marca, te ayudamos a crear una campaña que comunique eficazmente el nuevo enfoque y los valores de tu marca.",
];

const whyChooseAstroGroupTitles = [
  "Experiencia en la Industria:",
  "Creatividad y Estrategia:",
  "Resultados Comprobados:",
  "Enfoque Centrado en el Cliente:",
  "Medición y Optimización:",
];

const whyChooseAstroGroupDescriptions = [
  "Con años de experiencia en la gestión de campañas, comprendemos las complejidades de diferentes industrias.",
  "Nuestro equipo combina creatividad con estrategia, lo que garantiza campañas efectivas y atractivas.",
  "Nuestra cartera muestra una serie de campañas exitosas que han llevado al éxito a empresas de todos los tamaños.",
  "Trabajamos en estrecha colaboración contigo para garantizar que tus objetivos comerciales sean nuestra principal prioridad.",
  "Utilizamos datos y análisis para optimizar constantemente tus campañas y maximizar el retorno de la inversión.",
];

const CenteredImageWithText = () => {
  const [isFolded, setIsFolded] = useState(false);

  useEffect(() => {
    // Inicializa la animación con GSAP
    const tl = gsap.timeline({ repeat: -1, yoyo: true }); // Repite hacia atrás y adelante

    tl.to(".centered-image", {
      scaleY: isFolded ? 1.2 : 0.8, // Escala vertical (y) para plegar/desplegar
      duration: 1, // Duración de la animación
      ease: "power2.inOut", // Tipo de easing
      onComplete: () => setIsFolded(!isFolded), // Cambia el estado plegado/desplegado al finalizar la animación
    });
  }, [isFolded]);

  return (
    <div className="grid grid-cols-3 gap-4 items-center justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen py-8">
      {/* Columna Izquierda - En dispositivos móviles, aparecerá primero */}
      <div className="col-span-3 md:col-span-1 md:order-1">
        <h2 className="text-2xl text-center font-semibold text-black">
          Tipos de Campañas que Ofrecemos
        </h2>
        <div className="text-black mt-6 px-3 p-5 bg-slate-300 rounded-lg mx-3 transform hover:scale-110 transition-transform duration-300 ease-in-out">
          {campaignTitles.map((title, index) => (
            <div key={index}>
              <h3 className="text-blue-500 font-bold">{title}</h3>
              <p>{campaignDescriptions[index]}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Columna Central con Imagen */}
      <div className="col-span-3 md:col-span-1 md:order-2">
        <Image
          src="https://res.cloudinary.com/di1v23yy0/image/upload/v1696424693/misil_py1kzh.png"
          alt="Imagen en el Centro"
          width={300}
          height={400}
          className={`w-full h-auto rounded-lg centered-image px-3 ${
            isFolded ? "folded" : ""
          }`}
        />
      </div>

      {/* Columna Derecha - En dispositivos móviles, aparecerá después de la imagen */}
      <div className="col-span-3 md:col-span-1 md:order-3">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          ¿Por qué elegir Astro Group?
        </h2>
        <div className="text-black mt-6 px-3 p-5 bg-slate-300 rounded-lg mx-3 transform hover:scale-110 transition-transform duration-300 ease-in-out">
          {whyChooseAstroGroupTitles.map((title, index) => (
            <div key={index}>
              <h3 className="text-blue-500 font-bold">{title}</h3>
              <p>{whyChooseAstroGroupDescriptions[index]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CenteredImageWithText;
