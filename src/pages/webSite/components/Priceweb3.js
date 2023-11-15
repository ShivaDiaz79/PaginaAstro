import Link from "next/link";
import React from "react";

const PriceCard = ({ price, discount, title, features, link, bgClass }) => (
  <div className={`relative p-6 ${bgClass}`}>
    <div className="absolute inset-x-0 transform translate-y-px -top-1">
      <div className="flex justify-center transform -translate-y-1/2 rounded-3xl">
        <span className="inline-flex px-4 py-1 text-sm font-bold tracking-wider uppercase bg-white border-8 border-blue-600 text-gray-800 rounded-xl">
          Servicios
        </span>
      </div>
    </div>
    <div className="flex flex-col p-4">
      <div className="py-6">
        <h2 className="text-5xl  leading-6 text-white">
          <span className="ml-auto font-extrabold text-white text-center">
            {" "}
            {price}{" "}
          </span>
          {discount && (
            <del className="text-3xl font-medium text-white">{discount}</del>
          )}
        </h2>
        <p className="mt-6 text-xl text-center font-extrabold text-white">
          {title}
        </p>
        {features && (
          <ul className="mt-2 space-y-2 text-base text-white">
            {features.map((feature, index) => (
              <li key={index} className="flex space-x-3">
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link
        href={`https://wa.me/+59133931210/?text=Hola,%20me%20interesa%20una%20página%20web.`}
        className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
        target="_blank"
      >
        Contratar {price}
      </Link>
    </div>
  </div>
);

const PriceWeb3 = () => {
  const priceCards = [
    {
      price: "$ 600-900",
      discount: "",
      title: "WORDPRESS",
      features: [
        "✔️ 100 GB Almacenamiento SSD",
        "✔️ Personalización de diseño",
        "✔️ Diseño receptivo",
        "✔️ 10 páginas web",
        "✔️ Certificado de seguridad grati",
        "✔️ Ancho de banda ilimitado",
        "✔️ WordPress administrado",
        "✔️ Email gratis",
        "*Tiempo de entrega: 10 días hábiles",
        "Requisitos:",
        "✔️ Manual de marcas (Logo, tipografía, paleta de colores, misión, visión, etc)",
        "✔️ Contenido a para la plataforma",
        "*Pago adicional de $ 160,00 al año para hosting y dominio.",
        "CON WooCommerce $ 900",
        "✔️ 100 GB Almacenamiento SSD",
        "✔️ 10 páginas web",
        "✔️ 20 productos",
        "✔️ Personalización de diseño",
        "✔️ Diseño receptivo",
        "✔️ 10 páginas web",
        "✔️ Certificado de seguridad grati",
        "✔️ Ancho de banda ilimitado",
        "✔️ WordPress administrado",
        "✔️ Email gratis",
        "*Tiempo de entrega: 20 días hábiles",
        "Requisitos:",
        "✔️ Manual de marcas (Logo, tipografía, paleta de colores, misión, visión, etc)",
        "✔️ Contenido a para la plataforma",
        "*Pago adicional de $ 160,00 al año para hosting y dominio.",
      ],
      link: "https://wa.me/+59133931210",
      bgClass: "bg-blue-600 rounded-3xl",
    },
    {
      price: "$ 800",
      discount: "",
      title: "WIX",
      features: [
        "✔️ 10 paginas (inicio, secciones, servicio, contacto, etc.)",
        "✔️ 35 GB Almacenamiento SSD",
        "✔️ Botón de WhatsApp",
        "✔️ Contacto con mapa",
        "✔️ Personalización de diseño",
        "✔️ Diseño receptivo",
        "✔️ Menú plegable",
        "✔️ Diseño UX/UI",
        "✔️ Botones a escoger",
        "✔️ Analíticas del sitio web",
        "✔️ Email gratis",
        "✔️ Ancho de banda ilimitado",
        "Requisitos:",
        "✔️ Manual de marcas (Logo, tipografía, paleta de colores, misión, visión, etc)",
        "✔️ Contenido a para la plataforma",
        "*Tiempo de entrega: 20 días hábiles.",
        "*Pago adicional de $ 160,00 al año para hosting y dominio.",
      ],
      link: "https://wa.me/+59133931210",
      bgClass: "bg-blue-600 rounded-3xl",
    },
    {
      price: "$ 900 ",
      discount: "",
      title: "SHOPIFY",
      features: [
        "✔️ 50 GB Almacenamiento SSD",
        "✔️ Hasta 30 productos",
        "✔️ 10 paginas",
        "✔️ Mega menú",
        "✔️ Diseño receptivo",
        "✔️ Diseño UX/UI",
        "✔️ Video Background",
        "✔️ Pasarela de pago",
        "✔️ Analíticas del sitio web",
        "✔️ 2 Landing page de productos",
        "✔️ 2 email gratis",
        "Requisitos:",
        "✔️ Manual de marcas (Logo, tipografía, paleta de colores, misión, visión, etc)",
        "✔️ Contenido a para la plataforma",
        "*Tiempo de entrega: 20 días hábiles.",
        "*Pago adicional de $ 280,00 al año para hosting y dominio.",
      ],
      link: "https://wa.me/+59133931210",
      bgClass: "bg-blue-600 rounded-3xl",
    },
  ];

  return (
    <section>
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="mx-auto space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:mx-auto xl:grid-cols-3">
          {priceCards.map((card, index) => (
            <PriceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceWeb3;
