import Link from 'next/link';
import React from 'react';

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
        <h2 className="text-5xl font-thin leading-6 text-white">
          <span className="ml-auto font-extrabold text-white"> {price} </span>
          {discount && (
            <del className="text-3xl font-medium text-white">{discount}</del>
          )}
        </h2>
        <p className="mt-6 text-xl font-semibold text-white ">{title}</p>
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

const PriceWeb2 = () => {
  const priceCards = [
    {
      price: 'CONSULTAR',
      discount: '',
      title: 'Plan Personalizado',
      features: [
        'Valor de la Integración: $ 600,00 o Bs. 4.200,00',
        'Requisitos',
        '-Página creada con Next.js, Astro.js o React.js',  
        '-Pagina Creada con CMS,',
      ],
      link: "https://wa.me/+59133931210",
      bgClass: 'bg-blue-600 rounded-3xl',
    },
  ];

  return (
    <section>
      <div className="relative items-center w-full px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="mx-auto space-y-4 sm:space-y-0 w-auto">
          {priceCards.map((card, index) => (
            <PriceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceWeb2;

