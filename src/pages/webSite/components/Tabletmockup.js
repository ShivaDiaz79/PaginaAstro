import React from "react";
import Image from "next/image";

const TabletMockup = () => {
  return (
    <div className="pt-20 pb-20 m-2">
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
        <Image
            src="https://res.cloudinary.com/di1v23yy0/image/upload/v1698453151/Captura_de_pantalla_2023-10-27_a_la_s_19.43.43_wltpq9.png" // Reemplaza "URL_DE_LA_IMAGEN" por la URL de tu imagen
            alt="Imagen del lugar"
            className="dark:hidden w-full h-full object-cover transform hover:scale-150 transition-transform duration-300 ease-in-out"
            width={1300}
            height={1300}
          />
        </div>
      </div>
    </div>
  );
};

export default TabletMockup;


