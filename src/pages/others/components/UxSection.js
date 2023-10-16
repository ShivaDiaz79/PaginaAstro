import React from "react";
import Image from "next/image";
import DetallesInfoproducto from "./DetallesInfoproducto";

// Función para crear el cuadro de imagen
const ImageBox = () => (
  <div className="rounded-lg h-96 overflow-hidden">
    <Image
      width={400}
      height={800}
      alt="content"
      className="object-cover object-center h-full w-full"
      src="https://res.cloudinary.com/di1v23yy0/image/upload/v1695190057/BLOG_infoprodutoresindicam-1_pkreag.png"
    />
  </div>
);

// Función para crear el cuadro de información del usuario
const UserInfoBox = () => (
  <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
    <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
      <Image
        width={400}
        height={800}
        alt="content"
        className="object-cover object-center h-full w-full rounded-full"
        src="https://res.cloudinary.com/di1v23yy0/image/upload/v1696469643/YOUTUBE-editada_gjwybh.png"
      />
    </div>
    <div className="flex flex-col items-center text-center justify-center">
      <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
        ¿Qué Son los InfoProductos?
      </h2>
      <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
      <p className="text-base">Todo lo que tenes que saber </p>
    </div>
  </div>
);

// Función para crear el cuadro de información del contenido
const ContentBox = () => (
  <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
    <p className="leading-relaxed text-lg mb-4">
      Los InfoProductos son tu puerta de entrada al mundo de los ingresos
      pasivos y la creación de valor. Estos son productos digitales que tú, como
      experto en tu nicho, puedes crear y vender. Pueden ser eBooks, cursos en
      línea, guías descargables y mucho más. Imagina compartir tus conocimientos
      con una audiencia global y obtener ganancias por ello.{" "}
    </p>
    <h2>¿Por Qué Deberías Considerarlos?</h2>
    <p>
      Los beneficios son significativos. Además de compartir tu pasión y
      experiencia con el mundo, puedes generar ingresos sustanciales. ¿Por qué
      limitar tus ganancias a un empleo tradicional cuando puedes crear activos
      digitales que te generen dinero mientras duermes? Esto significa libertad
      financiera y más tiempo para lo que realmente te importa.
    </p>
  </div>
);

const UxSection = () => (
  <section className="text-black body-font">
    <h1 className="text-5xl text-center">MONETIZA TUS IDEAS</h1>

    <div className="container px-5 py-24 mx-auto flex flex-col">
      <div className="lg:w-4/6 mx-auto">
        <ImageBox />
        <div className="flex flex-col sm:flex-row ">
          <UserInfoBox />
          <ContentBox />
        </div>
      </div>
      <DetallesInfoproducto />
    </div>
  </section>
);

export default UxSection;
