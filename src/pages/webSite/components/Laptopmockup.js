import React from "react";
import Image from "next/image";

const Laptopmockup = () => {
  return (
    <main>
      <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
        <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
          <div style={{ width: "100%", height: "100%" }}>
            <Image
              src="https://res.cloudinary.com/di1v23yy0/image/upload/v1698706811/Captura_de_pantalla_2023-10-30_a_la_s_18.59.42_yn4ozv.png"
              alt="Imagen del lugar"
              className="object-cover"
              layout="fill"
            />
          </div>
        </div>
      </div>
      <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
      </div>
    </main>
  );
};

export default Laptopmockup;
