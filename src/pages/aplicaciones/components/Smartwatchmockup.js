import React from "react";

const Smartwatchmockup = () => {
  return (
    <div className="py-10 transform hover:scale-150 transition-transform duration-300 ease-in-out">
      <div className="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px] "></div>
      <div className="relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]">
        <div className="h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg"></div>
        <div className="h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden h-[193px] w-[188px]">
          <img
            src="https://res.cloudinary.com/di1v23yy0/image/upload/v1694126938/interfaz-reloj-inteligente-futurista-representacion-3d-tecnologia-holografica-dispositivos-avanzados-perfecto-disenos-tecnologicos-ciencia-ficcion_561855-3233_b9xohh.avif"
            className="transform hover:scale-150 transition-transform duration-300 ease-in-out dark:hidden h-[193px] w-[188px]"
            alt="reloj"
          />
        </div>
      </div>
      <div className="relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]"></div>
    </div>
  );
};

export default Smartwatchmockup;
