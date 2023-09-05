import React from "react";

const GridMaster = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 mx-2 ps-20 pt-20">
      <div className="h-60 w-60 rounded-s-3xl sm:ms-28 bg-gray-100 hover:animate-background rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transform duration-300 ease-in-out hover:scale-105  sm:hover:scale-150 ">
        Animaciones 
      </div>
      <div className="h-60 w-60 rounded-lg sm:ms-28 bg-gray-100 hover:animate-background  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s] transform duration-300 ease-in-out hover:scale-105  sm:hover:scale-150 ">
        Diseño 2D y 3D{" "}
      </div>
    </div>
  );
};

export default GridMaster;
