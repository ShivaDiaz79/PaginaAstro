import React from "react";

const TabletMockup = () => {
  return (
    <div className="pt-20 pb-20 m-2">
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]">
        <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
        <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
        <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
        <div className="rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800">
          <video
            src="https://res.cloudinary.com/di1v23yy0/video/upload/v1689032636/programas_vbh15v.mp4"
            controls
            loop
            autoPlay
            muted
            className="dark:hidden w-full h-full object-cover transform hover:scale-150 transition-transform duration-300 ease-in-out"
          ></video>
          <video
            src="https://res.cloudinary.com/di1v23yy0/video/upload/v1689032636/programas_vbh15v.mp4"
            controls
            loop
            autoPlay
            muted
            className="hidden dark:block w-full h-full object-cover transform hover:scale-150 transition-transform duration-300 ease-in-out"
          ></video>
        </div>
      </div>
    </div>
  );
};

export default TabletMockup;


