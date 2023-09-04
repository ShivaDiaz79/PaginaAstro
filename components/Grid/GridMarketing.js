import React from "react";

const GridMarketing = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 mx-2 pt-40   ">
      <div className="h-32 rounded-lg bg-gray-100 hover:animate-background  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transform duration-300 ease-in-out hover:scale-150 ">Redes Sociales</div>
      <div className="h-32 rounded-lg bg-gray-100 hover:animate-background  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transform duration-300 ease-in-out hover:scale-150 ">Diseño </div>
      <div className="h-32 rounded-lg bg-gray-100 hover:animate-background  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transform duration-300 ease-in-out hover:scale-150 ">Campañas de Ventas</div>
    </div>
  );
};

export default GridMarketing;
