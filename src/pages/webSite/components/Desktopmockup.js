import Image from "next/image";

const Desktopmockup = () => {
  return (
    <div className="m-2 sm:mt-20">
      <div className="relative sm:mt-20  border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
        <div className="rounded-xl overflow-hidden h-[140px] md:h-[262px]">
          <video
        src="https://res.cloudinary.com/di1v23yy0/video/upload/v1689032599/desarrolloweb_tky2xg.mp4"
            controls
            loop
            autoPlay
            muted
            className="dark:hidden w-full h-full object-cover transform hover:scale-150 transition-transform duration-300 ease-in-out"
          ></video>
          <video
            src="https://res.cloudinary.com/di1v23yy0/video/upload/v1689032599/desarrolloweb_tky2xg.mp4"
            controls
            loop
            autoPlay
            muted
            className="hidden dark:block w-full h-full object-cover transform hover:scale-150 transition-transform duration-300 ease-in-out"
          ></video>
        </div>
      </div>
      <div className="relative mx-auto  bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
      <div className="relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]"></div>
    </div>
  );
};

export default Desktopmockup;

