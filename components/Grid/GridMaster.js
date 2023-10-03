import React from "react";

const GridItem = ({ href, imageSrc, title, description }) => (
  <div className="h-full bg-gray-100 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transform duration-300 ease-in-out hover:scale-105 sm:hover:scale-150 sm:h-auto sm:w-full sm:rounded-lg">
    <a href={href} className="flex flex-col items-center sm:flex-row sm:max-w-xl">
      <img className="object-cover w-full rounded-t-lg h-28 sm:h-48 sm:w-48 sm:rounded-none sm:rounded-l-lg" src={imageSrc} alt="" />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-black dark:text-white">{title}</h5>
        <p className="mb-3 font-normal text-black dark:text-gray-400">{description}</p>
      </div>
    </a>
  </div>
);

const GridMaster = () => {
  const gridItems = [
    {
      href: "webMaster",
      imageSrc: "https://res.cloudinary.com/di1v23yy0/image/upload/v1695155776/pagina-error-404-divertido-monstruo-negro-sobre-fondo-amarillo-ilustracion-vectorial-dibujos-animados_985641-1262_ganzrm.avif",
      title: "MANTENIMIENTO",
      description: "Mantenimiento Web Integral, Desarrollo de ChatBot (con o sin IA), Rendimiento Óptimo de tu Sitio o Aplicación, Integraciones",
    },
    {
      href: "webMaster",
      imageSrc: "https://res.cloudinary.com/di1v23yy0/image/upload/v1695155776/mapa-mental-optimizacion-motores-busqueda_805187-1343_fvgthh.avif",
      title: "CONTENIDO Y ANALISIS",
      description: "Optimización de Contenido y Análisis de Datos: Aumenta tu Presencia en Línea de Manera Estratégica y con tecnologías actualizadas.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-2 font-oswald sm:ps-20 pt-20">
      {gridItems.map((item, index) => (
        <GridItem key={index} {...item} />
      ))}
    </div>
  );
};

export default GridMaster;

