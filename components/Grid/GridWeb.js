import React from "react";

const GridWeb = () => {
  return (
    <div className="grid grid-cols-1 gap-16 lg:grid-cols-3 lg:gap-8 ms-36  sm:pt-20  ">
      <div className=" h-32  w-32 sm:h-48 sm:w-48 rounded-full bg-gray-100 pt-14 hover:animate-background  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]transform duration-300 ease-in-out hover:scale-150 ">
      <p className=" text-center text-blue-700 -pt-8"> Redes Sociales</p>
      </div>
      <div className=" h-32  w-32 sm:h-48 sm:w-48 rounded-full bg-gray-100 pt-14 hover:animate-background  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transform duration-300 ease-in-out hover:scale-150  ">
      <p className=" text-center "> Diseño</p>
         </div>
      <div className="h-32  w-32 sm:h-48 sm:w-48 rounded-full bg-gray-100 pt-14 hover:animate-background  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transform duration-300 ease-in-out hover:scale-150 ">
        <p className=" text-center "> Campaña</p>
      
      </div>
    </div>
  );
};

export default GridWeb;
