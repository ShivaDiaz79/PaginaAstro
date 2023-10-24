import React from "react";

const Laptopmockup = () => {
  return (
    <main>
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
        <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
        <video
        src="https://res.cloudinary.com/di1v23yy0/video/upload/v1689032609/desarrolloweb2_m9i2ze.mp4"
            controls
            loop
            autoPlay
            muted
            className="dark:hidden w-full h-full object-cover transform hover:scale-150 transition-transform duration-300 ease-in-out"
          ></video>
          <video
            src="https://res.cloudinary.com/di1v23yy0/video/upload/v1689032609/desarrolloweb2_m9i2ze.mp4"
            controls
            loop
            autoPlay
            muted
            className="hidden dark:block w-full h-full object-cover transform hover:scale-150 transition-transform duration-300 ease-in-out"
          ></video>
        </div>
      </div>
      <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
      </div>
    </main>
  );
};

export default Laptopmockup;
