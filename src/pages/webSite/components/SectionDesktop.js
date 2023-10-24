import React, { useState } from "react";
import FontsWe3 from "../../../../components/FontsWeb3";

const SectionDesktop = () => {
  const [content, setContent] = useState(null);

  const showContent1 = () => {
    setContent(
      "WordPress es la plataforma de gestión de contenido líder en el mundo y su elección para llevar su presencia en línea al más alto nivel. Nosotros somos su equipo de expertos en desarrollo web, comprometidos a ofrecerle una solución excepcional en línea. Con una base sólida en WordPress, creamos sitios web que superan las expectativas. Esta plataforma versátil es ideal para una amplia gama de aplicaciones, desde sitios web corporativos hasta blogs y tiendas en línea. Nuestra experiencia en desarrollo nos permite aprovechar al máximo WordPress y personalizar su sitio de acuerdo a sus necesidades específicas. Nuestro enfoque en el diseño centrado en el usuario, la funcionalidad excepcional y la atención meticulosa al detalle garantiza que su sitio web se destaque en el competitivo mundo en línea. Con WordPress como base, le ofrecemos un sitio web que refleja su visión y le ayuda a lograr sus objetivos en línea. Confíe en nuestro equipo de expertos y en WordPress como la solución profesional para llevar su presencia en línea al siguiente nivel. Juntos, creamos una presencia web de clase mundial."
    );
  };

  const showContent2 = () => {
    setContent(
      "Wix es una plataforma de creación de sitios web que destaca por su facilidad de uso y su enfoque en el diseño visual. Como tu socio en el diseño web, utilizaremos Wix para llevar tus ideas en línea. Wix es ideal para personas y pequeñas empresas que desean un sitio web visualmente atractivo sin necesidad de conocimientos técnicos profundos. Con nuestra experiencia en desarrollo, utilizaremos las diversas plantillas y herramientas de diseño de Wix para personalizar tu sitio web de manera sencilla y sin complicaciones. Desde blogs hasta pequeñas tiendas en línea, Wix es una plataforma versátil que se adapta a tus necesidades. Con nuestro equipo a la cabeza, garantizamos que tu sitio web se destacará y reflejará tu creatividad. Tu visión es nuestra prioridad, y Wix es la herramienta que utilizaremos para hacerla realidad. Confía en nosotros como tu socio en el diseño web con Wix. Juntos, crearemos un sitio web visualmente impresionante que cautivará a tu audiencia en línea"
    );
  };

  const showContent3 = () => {
    setContent(
      "Shopify es la elección predilecta para empresas como la tuya que desean triunfar en el comercio en línea. Esta plataforma de comercio electrónico líder se destaca por su facilidad de uso y ha sido diseñada especialmente para satisfacer las necesidades de las empresas en línea. Con Shopify, obtendrás una amplia gama de temas y complementos que simplifican la creación y gestión de tus tiendas en línea, sin importar si eres una pequeña boutique o una gran empresa. Lo que realmente distingue a Shopify es su capacidad de personalización, lo que te permite crear una tienda en línea que refleje la esencia de tu marca y tus productos de manera única. Además, Shopify cuenta con un eficaz sistema de gestión de productos y pedidos que facilita la administración de tu inventario y la atención a tus clientes. Desde pequeñas boutiques hasta gigantes del comercio electrónico, confían en Shopify para impulsar sus negocios en línea con éxito. Si buscas una solución confiable, adaptable y poderosa para tu tienda en línea, Shopify es tu aliado perfecto."
    );
  };

  return (
    <div className="mx-auto flex flex-col items-center ">
      <div className="lg:max-w-lg lg:w-full md:w-5/6">
        <FontsWe3 />
      </div>

      <div className="mt-8">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 text-center font-medium text-gray-900">
        Servicios de Desarrollo Web en Shopify, WordPress y Wix
        </h1>
        <p className="sm:px-20">
          Te ofrecemos la creación de un sitio web de alto rendimiento. Nuestros expertos utilizan estas plataformas
          líderes para desarrollar sitios web eficientes, amigables con SEO y
          optimizados para una experiencia de usuario excepcional. Confía en
          nuestra experiencia para crear un sitio web que se destaque y cumpla
          con tus requisitos únicos.
        </p>
        <div className="flex w-full md:justify-start justify-center sm:ps-96 animate-pulse">
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
