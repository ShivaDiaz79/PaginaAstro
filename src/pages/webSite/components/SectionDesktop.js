import React, { useState } from 'react';
import Laptopmockup from './Laptopmockup';

const SectionDesktop = () => {
  const [content, setContent] = useState(null);

  const showContent1 = () => {
    setContent(
      'Este es el contenido del primer párrafo que aparece al hacer clic en el primer botón.'
    );
  };

  const showContent2 = () => {
    setContent(
      'Este es el contenido del segundo párrafo que aparece al hacer clic en el segundo botón.'
    );
  };

  const showContent3 = () => {
    setContent(
      'Este es el contenido del tercer párrafo que aparece al hacer clic en el tercer botón.'
    );
  };

  return (
    <div className="mx-auto flex flex-col items-center text-center">
      <div className="lg:max-w-lg lg:w-full md:w-5/6">
        <Laptopmockup />
      </div>
      <div className="mt-8">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Before they sold out
          <br className="hidden lg:inline-block" />readymade gluten
        </h1>
        {content && (
          <div className="border rounded-lg p-4 mb-4 leading-relaxed">
            {content}
          </div>
        )}
        <div className="lg:text-center">
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <button
              onClick={showContent1}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4 lg:mb-0 lg:mr-4"
            >
              WORDPRESS
            </button>
            <button
              onClick={showContent2}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4 lg:mb-0 lg:mx-4"
            >
              WIX
            </button>
            <button
              onClick={showContent3}
              className="inline-flex text-white text-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4 lg:mb-0 lg:ml-4"
            >
              SHOPIFY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionDesktop;

