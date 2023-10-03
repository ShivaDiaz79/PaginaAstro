import React, { useState, useEffect } from "react";
import { gsap } from "gsap";

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
        <p className="text-black mt-2 px-3">
          Lanzamiento de Producto: Creamos campañas de alto impacto para
          presentar tus nuevos productos al mercado, generando anticipación y
          entusiasmo entre tu audiencia. <br />
          Campañas de Promoción: Diseñamos estrategias promocionales efectivas
          que aumentan las ventas y fidelizan a los clientes existentes.
          <br />
          Campañas de Concientización: Creamos campañas de concienciación que
          educan a tu audiencia sobre los beneficios de tus productos o
          servicios, construyendo una base de clientes leales.
          <br />
          Campañas de Temporada: Diseñamos estrategias estacionales que
          capitalizan eventos y festividades para impulsar las ventas.
          <br />
          Campañas de Rebranding: Si estás relanzando tu marca, te ayudamos a
          crear una campaña que comunique eficazmente el nuevo enfoque y los
          valores de tu marca.
          <br />
        </p>
      </div>

      {/* Columna Central con Imagen */}
      <div className="col-span-3 md:col-span-1 md:order-2">
        <img
          src="https://res.cloudinary.com/di1v23yy0/image/upload/v1696037304/megafono-dinero-volando-ai-aerogenerativo_391052-12604_i7dcyq.avif"
          alt="Imagen en el Centro"
          className={`w-full h-auto rounded-lg centered-image px-3 ${
            isFolded ? "folded" : ""
          }`}
        />
        <p className="pt-20 px-3">
          En Astro Estudio, no solo lanzamos campañas, creamos historias de
          éxito. Estamos listos para llevar tu producto o servicio al siguiente
          nivel en el mercado. Contáctanos hoy mismo y descubre cómo podemos
          ayudarte a alcanzar tus metas de campaña.
        </p>
      </div>

      {/* Columna Derecha - En dispositivos móviles, aparecerá después de la imagen */}
      <div className="col-span-3 md:col-span-1 md:order-3">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          ¿Por qué elegir Astro Estudio para tus Campañas?
        </h2>
        <p className="text-black mt-2 px-3">
          Experiencia en la Industria: Con años de experiencia en la gestión de
          campañas, comprendemos las complejidades de diferentes industrias.{" "}
          <br />
          Creatividad y Estrategia: Nuestro equipo combina creatividad con
          estrategia, lo que garantiza campañas efectivas y atractivas.
          <br />
          Resultados Comprobados: Nuestra cartera muestra una serie de campañas
          exitosas que han llevado al éxito a empresas de todos los tamaños.
          <br />
          Enfoque Centrado en el Cliente: Trabajamos en estrecha colaboración
          contigo para garantizar que tus objetivos comerciales sean nuestra
          principal prioridad.
          <br />
          Medición y Optimización: Utilizamos datos y análisis para optimizar
          constantemente tus campañas y maximizar el retorno de la inversión
          <br />
        </p>
      </div>
    </div>
  );
};

export default CenteredImageWithText;
