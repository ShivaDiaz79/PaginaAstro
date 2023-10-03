import React, { useState } from "react";
import Laptopmockup from "./Laptopmockup";

const SectionDesktop = () => {
  const [content, setContent] = useState(null);

  const showContent1 = () => {
    setContent(
      "WordPress: Potencia y Escalabilidad en tus Manos Con WordPress, llevamos tu presencia en línea al siguiente nivel. Aprovechamos el poder de esta plataforma de código abierto para desarrollar sitios web altamente funcionales y escalables. Ya sea un blog, un sitio corporativo o una plataforma de comercio electrónico, WordPress ofrece una base sólida para tus ambiciones en línea.."
    );
  };

  const showContent2 = () => {
    setContent(
      "Wix: La Versatilidad Creativa en su Máxima Expresión Con Wix, transformamos tus ideas en un sitio web visualmente impresionante. Aprovechamos las herramientas de diseño intuitivas de Wix para crear páginas web personalizadas que cautivarán a tu audiencia. Desde blogs elegantes hasta tiendas en línea vibrantes, Wix ofrece la versatilidad que necesitas para destacar en línea."
    );
  };

  const showContent3 = () => {
    setContent(
      "Shopify: Desarrollamos tu Pasaporte al Éxito en el Comercio Electrónico Con Shopify, convertimos tus sueños de comercio electrónico en realidad. Creamos tiendas en línea atractivas y efectivas que maximizan tus ventas en línea. Desde la configuración de productos hasta la gestión de pedidos y pagos seguros, Shopify brinda todo lo que necesitas para triunfar en el mundo del comercio electrónico.."
    );
  };

  return (
    <div className="mx-auto flex flex-col items-center text-center">
      <div className="lg:max-w-lg lg:w-full md:w-5/6">
        <Laptopmockup />
      </div>

      <div className="mt-8">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Creación de Sitios Web
          <br className="hidden lg:inline-block" />
          Impulsados por las Plataformas Más Poderosas
        </h1>
        <div className="flex w-full md:justify-start justify-center items-end animate-pulse">
          <h1>haz clic aqui ⬇️</h1>
        </div>
    

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
      {content && (
          <div className="border rounded-lg p-4 mt-4 pb-5 leading-relaxed">
            {content}
          </div>
        )}
    </div>
  );
};

export default SectionDesktop;
