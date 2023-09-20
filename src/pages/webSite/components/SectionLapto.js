import React, { useState } from "react";
import Desktopmockup from "./Desktopmockup";

const SectionLapto = () => {
  const [activeTab, setActiveTab] = useState("Description"); // Estado para rastrear la pestaña activa

  const tabs = ["Description", "Reviews", "Details"];

  const content = {
    Description: `Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.`,
    Reviews: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tempus quam, ac auctor nulla. Vivamus fringilla consectetur tortor, at convallis justo bibendum eu.`,
    Details: `Suspendisse potenti. Vestibulum in urna vel justo hendrerit lacinia eget vel libero. Integer vitae mi quis tortor consectetur luctus. Nunc in dictum leo.`,
  };

  // Función para cambiar la pestaña activa
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // Función para renderizar información
  const renderInfo = (label, value) => (
    <div className="flex border-t border-gray-200 py-2">
      <span className="text-gray-500">{label}</span>
      <span className="ml-auto text-gray-900">{value}</span>
    </div>
  );

  // Función para renderizar cantidad
  const renderQuantity = (label, value) => (
    <div className="flex border-t border-b mb-6 border-gray-200 py-2">
      <span className="text-gray-500">{label}</span>
      <span className="ml-auto text-gray-900">{value}</span>
    </div>
  );

  // Función para renderizar precio y botón
  const renderPriceButton = () => (
    <div className="flex">
      <span className="title-font font-medium text-2xl text-gray-900">
        $58.00
      </span>
      <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
        Button
      </button>
      <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
        <svg
          fill="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
        </svg>
      </button>
    </div>
  );

  return (
    <section className="text-gray-600 body-font overflow-hidden flex flex-col-1">
      <div className="px-5 py-24 mx-auto flex flex-col-1">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
             titulo
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              Animated Night Hill Illustrations
            </h1>
            <div className="flex mb-4">
              {tabs.map((tab) => (
                <a
                  key={tab}
                  className={`flex-grow ${
                    activeTab === tab
                      ? "text-indigo-500 border-b-2 border-indigo-500"
                      : "border-b-2 border-gray-300"
                  } py-2 text-lg px-1`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </a>
              ))}
            </div>

            <p className="leading-relaxed mb-4">{content[activeTab]}</p>
            {renderInfo("Color", "Blue")}
            {renderInfo("Size", "Medium")}
            {renderQuantity("Quantity", "4")}
            {renderPriceButton()}
          </div>
          <Desktopmockup />
        </div>
      </div>
    </section>
  );
};

export default SectionLapto;
