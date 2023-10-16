import React from "react";

// Componente para un solo ítem en el grid de marketing
const MarketingItem = ({ title, description, imageUrl }) => {
  return (
    <div className="h-full bg-gray-100 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transform duration-300 ease-in-out hover:scale-105 sm:hover:scale-120 sm:h-auto sm:w-full sm:rounded-lg">
      <a href="marketing" className="flex flex-col items-center sm:flex-row sm:max-w-xl">
        <img
          className="object-cover w-full rounded-t-lg h-16 sm:h-60 sm:w-48 sm:rounded-none sm:rounded-l-lg"
          src={imageUrl}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-oswald tracking-tight text-black dark:text-white">{title}</h5>
          <p className="mb-3 font-bold text-black dark:text-gray-400">{description}</p>
        </div>
      </a>
    </div>
  );
};

const GridMarketing = () => {
  const marketingItems = [
    {
      title: "REDES SOCIALES",
      description: "Conéctate con Tu Audiencia: Gestión Profesional de Redes Sociales.",
      imageUrl: "https://res.cloudinary.com/di1v23yy0/image/upload/v1693937983/redes1_ccboxd.avif",
    },
    {
      title: "DISEÑO",
      description: "Tu Visión, Nuestro Diseño: Creación Visual de Alta Calidad.",
      imageUrl: "https://res.cloudinary.com/di1v23yy0/image/upload/v1693937710/uxui1_gzl7vo.avif",
    },
    {
      title: "CAMPAÑAS",
      description: "Impulsa Tu Marca: Estrategias de Campañas y Lanzamientos Efectivos.",
      imageUrl: "https://res.cloudinary.com/di1v23yy0/image/upload/v1693927564/disen%CC%83o_ytiosu.avif",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-2 ">
      {marketingItems.map((item, index) => (
        <MarketingItem
          key={index}
          title={item.title}
          description={item.description}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
};

export default GridMarketing;


