import React, { useState } from "react";
import Tabletmockup from "./Tabletmockup";

// Función para renderizar un párrafo con estilo personalizado
const renderStyledParagraph = (text, className) => (
  <p className={`mb-8 leading-relaxed ${className}`}>{text}</p>
);

const SectionTablet = () => {
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isReviewsOpen, setReviewsOpen] = useState(false);

  const toggleDescription = () => {
    setDescriptionOpen(!isDescriptionOpen);
  };

  const toggleReviews = () => {
    setReviewsOpen(!isReviewsOpen);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            Knausgaard typewriter readymade marfa
          </h1>
          {renderStyledParagraph(
            "Chillwave portland ugh, knausgaard fam polaroid iPhone. Man braid swag typewriter affogato, hella selvage wolf narwhal dreamcatcher.",
            "text-sm mt-2 text-gray-500 w-full"
          )}
          <div className="flex w-full md:justify-start justify-center items-end">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
              <label
                htmlFor="hero-field"
                className="leading-7 text-sm text-gray-600"
              >
                Placeholder
              </label>
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
          <div className="flex lg:flex-row md:flex-col">
            <div className="w-full mt-4 border rounded border-gray-300 p-4">
              <p
                onClick={toggleDescription}
                className="text-indigo-500 cursor-pointer"
              >
                Description
              </p>
              {isDescriptionOpen && (
                <p className="leading-relaxed mb-4">
                  Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                  sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo
                  juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                  seitan poutine tumeric. Gastropub blue bottle austin listicle
                  pour-over, neutra jean.
                </p>
              )}
            </div>
            <div className="w-full mt-4 border rounded border-gray-300 p-4">
              <p onClick={toggleReviews} className="text-indigo-500 cursor-pointer">
                Reviews
              </p>
              {isReviewsOpen && (
                <p className="leading-relaxed mb-4">
                  Reviews content goes here.
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Tabletmockup />
        </div>
      </div>
    </section>
  );
};

export default SectionTablet;

