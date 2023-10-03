import React from "react";

const Mockupcolors = () => {
  return ( 
    <div className="border sm:border-red-800 mx-auto my-auto">
    <div className="relative mx-auto border-gray-300 dark:border-gray-800 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] sm:m-32">
      <div className="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <img
          src="https://res.cloudinary.com/di1v23yy0/image/upload/v1694127920/sistemas-modernos-gestion-hogar-inteligente-utilizan-realidad-aumentada-edificio-inteligente-fondo-aislado-hogar-inteligente-generar-ai_893737-1195_gah09m.avif"
          className="dark:hidden w-[272px] h-[572px]"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/di1v23yy0/image/upload/v1694127920/sistemas-modernos-gestion-hogar-inteligente-utilizan-realidad-aumentada-edificio-inteligente-fondo-aislado-hogar-inteligente-generar-ai_893737-1195_gah09m.avif"
          className="hidden dark:block w-[272px] h-[572px]"
          alt=""
        />
      </div>
    </div>
    </div>
  );
};

export default Mockupcolors;
