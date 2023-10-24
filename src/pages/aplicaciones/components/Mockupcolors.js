import React from "react";

const Mockupcolors = () => {
  return ( 
    <div className="transform hover:scale-110 transition-transform duration-300 ease-in-out mt-32">
    <div className="relative mx-auto border-gray-300 dark:border-gray-800 bg-gray-300 dark:bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] sm:m-32">
      <div className="h-[32px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
      <div className="h-[46px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
      <div className="h-[64px] w-[3px] bg-gray-300 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
      <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <img
          src="https://res.cloudinary.com/di1v23yy0/image/upload/t_Banner 9:16/v1698126493/2_bp5ksk.jpg"
          className="dark:hidden w-[272px] h-[572px] transform hover:scale-110 transition-transform duration-300 ease-in-out"
          alt=""
        />
        <img
          src="https://res.cloudinary.com/di1v23yy0/image/upload/t_Banner 9:16/v1698126493/2_bp5ksk.jpg"
          className="hidden dark:block w-[272px] h-[572px]"
          alt=""
        />
      </div>
    </div>
    </div>
  );
};

export default Mockupcolors;
