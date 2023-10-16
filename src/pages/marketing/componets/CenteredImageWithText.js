import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

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
        <p className="text-black mt-6 px-3 p-5 bg-slate-400 rounded-lg mx-3 transform hover:scale-110 transition-transform duration-300 ease-in-out">
        <span className="text-white font-bold ">Lanzamiento de Producto:</span> Creamos campañas de alto impacto para
          presentar tus nuevos productos al mercado, generando anticipación y
          entusiasmo entre tu audiencia. <br />
          <span className="text-white font-bold ">Campañas de Promoción:</span> Diseñamos estrategias promocionales efectivas
          que aumentan las ventas y fidelizan a los clientes existentes.
          <br />
          <span className="text-white font-bold ">Campañas de Concientización:</span> Creamos campañas de concienciación que
          educan a tu audiencia sobre los beneficios de tus productos o
          servicios, construyendo una base de clientes leales.
          <br />
          <span className="text-white font-bold ">Campañas de Temporada: </span> Diseñamos estrategias estacionales que
          capitalizan eventos y festividades para impulsar las ventas.
          <br />
          <span className="text-white font-bold ">Campañas de Rebranding: </span> Si estás relanzando tu marca, te ayudamos a
          crear una campaña que comunique eficazmente el nuevo enfoque y los
          valores de tu marca.
          <br />
        </p>
      </div>

      {/* Columna Central con Imagen */}
      <div className="col-span-3 md:col-span-1 md:order-2">
        <Image
          src="https://res.cloudinary.com/di1v23yy0/image/upload/v1696424693/misil_py1kzh.png"
          alt="Imagen en el Centro"
          width={300}
          height={400}
          className={`w-full h-auto rounded-lg centered-image px-3  ${
            isFolded ? "folded" : ""
          }`}
        />
      </div>

      {/* Columna Derecha - En dispositivos móviles, aparecerá después de la imagen */}
      <div className="col-span-3 md:col-span-1 md:order-3">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          ¿Por qué elegir Astro Group?
        </h2>
        <p className="text-black mt-6 px-3 p-5 bg-slate-400 rounded-lg mx-3 transform hover:scale-110 transition-transform duration-300 ease-in-out">
        <span className="text-white font-bold ">Experiencia en la Industria:</span> Con años de experiencia en la gestión de
          campañas, comprendemos las complejidades de diferentes industrias.{" "}
          <br />
          <span className="text-white font-bold ">Creatividad y Estrategia:</span> Nuestro equipo combina creatividad con
          estrategia, lo que garantiza campañas efectivas y atractivas.
          <br />
          <span className="text-white font-bold ">Resultados Comprobados: </span> Nuestra cartera muestra una serie de campañas
          exitosas que han llevado al éxito a empresas de todos los tamaños.
          <br />
          <span className="text-white font-bold ">Enfoque Centrado en el Cliente: </span> Trabajamos en estrecha colaboración
          contigo para garantizar que tus objetivos comerciales sean nuestra
          principal prioridad.
          <br />
          <span className="text-white font-bold ">Medición y Optimización:</span>  Utilizamos datos y análisis para optimizar
          constantemente tus campañas y maximizar el retorno de la inversión
          <br />
        </p>
      </div>
    </div>
  );
};

export default CenteredImageWithText;
