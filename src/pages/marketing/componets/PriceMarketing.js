import React from 'react';
import Link from 'next/link';

const PriceCard = ({ price, discount, title, features, link, bgClass }) => (
  <div className={`relative p-6  ${bgClass} h-auto transform hover:scale-110 transition-transform duration-300 ease-in-out`}>
    <div className="absolute inset-x-0 transform translate-y-px -top-1">
      <div className="flex justify-center transform -translate-y-1/2 rounded-3xl">
        <span className="inline-flex px-4 py-1 text-sm font-bold tracking-wider uppercase bg-white border-8 border-blue-600 text-gray-800 rounded-xl">
          Servicios
        </span>
      </div>
    </div>
    <div className="flex flex-col h-auto p-4">
      <div className="py-6">
        <h2 className="text-5xl font-thin leading-6 text-white">
          <span className="ml-auto font-extrabold text-white"> {price} </span>
          {discount && (
            <del className="text-xl font-medium text-white">{discount}</del>
          )}
        </h2>
        <p className="mt-6 text-xl text-center font-semibold text-white ">{title}</p>
        {features && (
          <ul className="mt-2 space-y-2 font-rubik text-sm text-white">
            {features.map((feature, index) => (
              <li key={index} className="flex space-x-3">
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <Link
        href={`https://wa.me/+59133931210/?text=Hola,%20me%20interesa%20una%20sus%20servicios.`}
        className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
        target="_blank"
      >
        Contratar {price}
      </Link>
    </div>
  </div>
);

const PriceMarketing = () => {
  const priceCards = [
    {
      price: '$ 700.00',
      discount: '',
      title: 'Plan Basico',
      features: [
        '✔️ Creación y optimización de perfiles',
        '✔️ Planificación de contenido (Calendario de publicaciones)',
        '✔️ Identificación de temas y tipo de contenido',
        '✔️ Creación de contenido -8 Artes -2 Reels (máx. 10 segundos)',
        '✔️ Interacción con la audiencia',
        '✔️ Monitoreo constante',
        '✔️ Administración y mantenimiento de publicaciones, mensajes y comentarios',
        '✔️ Sesión de fotos (Max. 6 productos o servicios)',
        '✔️ Seguimiento y análisis estratégico',
        '✔️ Uso de herramientas para medir métricas de: Publicaciones, conversaciones y participación de la audiencia',
        '✔️ Configuración de respuesta automática en Facebook',
        '✔️ Ajuste de estrategia para mejorar resultados',
        '✔️ Landing page o catalogo promocionando 20 productos',
        '✔️ Reporte mensual',
        '* Manejo de Facebook, Instagram y Tik Tok',
        '*Contrato mínimo de 3 meses',
      ],
      link: 'https://wa.me/+59133931210',
      bgClass: 'bg-blue-600 rounded-3xl',
    },
    {
      price: '$ 950.00',
      discount: '',
      title: 'Plan Plus',
      features: [
        '✔️ Creación y optimización de perfiles',
        '✔️ Planificación de contenido (Calendario de publicaciones)',
        '✔️ Identificación de temas y tipo de contenido',
        '✔️ Creación de contenido -12 Artes -4 Reels (máx. 10 segundos)',
        '✔️ Interacción con la audiencia',
        '✔️ Monitoreo constante',
        '✔️ Administración y mantenimiento de publicaciones, mensajes y comentarios',
        '✔️ Sesión de fotos (Max. 8 productos o servicios)',
        '✔️ Seguimiento y análisis estratégico',
        '✔️ Uso de herramientas para medir métricas de: Publicaciones, conversaciones y participación de la audiencia',
        '✔️ Configuración de respuesta automática en Facebook',
        '✔️ Ajuste de estrategia para mejorar resultados',
        '✔️ Landing page o catalogo promocionando 35 productos',
        '✔️ Creación y gestión de campañas publicitarias',
        '✔️ Segmentación precisa del público objetivo',
        '✔️ ChatBot en WhatsApp Business con un máximo de 20 preguntas y respuestas (10 respuestas pueden ser con imágenes)',
        '✔️ Reporte mensual',
        '* Manejo de Facebook, Instagram y Tik Tok',
        '*Contrato mínimo de 6 meses',
      ],
      link:'https://wa.me/+59133931210',
      bgClass: 'bg-blue-600 rounded-3xl',
    },
    {
      price: '$ 1500.00',
      discount: '',
      title: 'Plan Personalizado',
      features: [
        '✔️ Creación y optimización de perfiles',
        '✔️ Planificación de contenido (Calendario de publicaciones)',
        '✔️ Identificación de temas y tipo de contenido',
        '✔️ Creación de contenido -12 Artes -4 Reels (máx. 15 segundos)',
        '✔️ Interacción con la audiencia',
        '✔️ Monitoreo constante',
        '✔️ Administración y mantenimiento de publicaciones, mensajes y comentarios',
        '✔️ Sesión de fotos (Max. 8 productos o servicios)',
        '✔️ Seguimiento y análisis estratégico',
        '✔️ Uso de herramientas para medir métricas de: Publicaciones, conversaciones y participación de la audiencia',
        '✔️ Configuración de respuesta automática en Facebook',
        '✔️ Ajuste de estrategia para mejorar resultados',
        '✔️ 2 Landing page o 2 catalogos promocionando hasta 20 productos',
        '✔️ Creación y gestión de campañas publicitarias',
        '✔️ Segmentación precisa del público objetivo',
        '✔️ ChatBot en WhatsApp Business con un máximo de 20 preguntas y respuestas (10 respuestas pueden ser con imágenes)',
        '✔️ Reporte mensual',
        '✔️ Página Web-Hecha con WordPress -Hosting y dominio por 1 año -Diseño UX/UI -Integracion de ChatBot en WhatsApp Business',
        '✔️ Manteenimiento Web (hasta 5 cambios de imagenes y noticias',
        '✔️ Reporte mensual',
        '✔️ Análisis de mercado y competencia',
        '✔️ Generación de Led',
        '✔️ Creación de LinkedIn',
        '* Manejo de Facebook, Instagram y Tik Tok',
        '*Contrato mínimo de 6 meses',
      ],
      link:'https://wa.me/+59133931210',
      bgClass: 'bg-blue-600 rounded-3xl',
    },
  ];

  return (
    <section>
      <div className="relative items-center px-5 py-24 mx-auto md:px-12 lg:px-16 max-w-7xl">
        <div className="mx-auto space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:mx-auto xl:grid-cols-3">
          {priceCards.map((card, index) => (
            <PriceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PriceMarketing;
