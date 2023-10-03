import React from "react";

const GridItem = ({ href, imageSrc, title, description }) => (
  <div className="h-full bg-gray-100 hover:animate-background font-oswald rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transform duration-300 ease-in-out hover:scale-105 sm:hover:scale-150 sm:h-auto sm:w-full sm:rounded-lg">
    <a
      href={href}
      className="flex flex-col items-center sm:flex-row sm:max-w-xl"
    >
      <img
        className="object-cover w-full rounded-t-lg h-28 sm:h-48 sm:w-48 sm:rounded-none sm:rounded-l-lg"
        src={imageSrc}
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-3xl font-bold tracking-tight text-black dark:text-white font-oswald">
          {title}
        </h5>
        <p className="mb-3 font-normal text-black dark:text-gray-400 font-rubik ">
          {description}
        </p>
      </div>
    </a>
  </div>
);

const GridOthers = () => {
  const gridItems = [
    {
      href: "others",
      imageSrc:
        "https://res.cloudinary.com/di1v23yy0/image/upload/v1693939038/infoproductos_honpag.avif",
      title: "INFO PRODUCTOS",
      description:
        "Transforma tus Conocimientos en Ganancias. Creación Profesional de Infoproductos.",
    },
    {
      href: "others",
      imageSrc:
        "https://res.cloudinary.com/di1v23yy0/image/upload/v1693939062/creacion2_xfkmmp.avif",
      title: "CONTENIDO EN LINEA",
      description:
        "Potencia tu Presencia Digital con Contenido de Calidad. Servicio Integral de Creación de Contenido en Línea.",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-2 pt-16">
      {gridItems.map((item, index) => (
        <GridItem key={index} {...item} />
      ))}
    </div>
  );
};

export default GridOthers;
