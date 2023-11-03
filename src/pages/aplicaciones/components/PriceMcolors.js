import React from 'react';
import Link from 'next/link';

const PriceCard = ({ price, discount, title, features, link, bgClass }) => (
  <div className={`relative p-6 ${bgClass}`}>
    <div className="absolute inset-x-0 transform translate-y-px -top-1">
      <div className="flex justify-center transform -translate-y-1/2 rounded-3xl">
        <span className="inline-flex px-4 py-1 text-sm font-bold tracking-wider uppercase bg-white border-8 border-blue-600 text-gray-800 rounded-xl">
          APLICACIONES
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
        <p className="mt-6 text-xl font-semibold text-white">{title}</p>
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
        href={`https://wa.me/+59133931210/?text=Hola,%20me%20interesa%20una%20aplicación%20web.`}
        className="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 bg-white"
        target="_blank"
      >
        Contratar {price}
      </Link>
    </div>
  </div>
);

const PriceApps = () => {
  const priceCards = [
    {
      price: '$10.000',
      discount: '',
      title: 'NATIVAS',
      features: [
        '✔️ Diseño de interfaz de usuario personalizado y atractivo.',
        '✔️ Acceso a características específicas del sistema operativo (sensores, notificaciones, etc.).',
        '✔️ Integración con servicios de geolocalización y mapas.',
        '✔️ Alto rendimiento y velocidad.',
        '✔️ Funciones de seguridad avanzada y cifrado de datos.',
        '✔️ Compatibilidad con múltiples dispositivos y pantallas.',
        '✔️ Integración de funciones de pago y compras dentro de la aplicación.',
        '✔️ Notificaciones push avanzadas y en tiempo real.',
        '✔️ Uso de diseño nativo para iOS y Android.',
        '✔️ Entrega en un plazo específico.',
        '✔️ Código fuente de la aplicación.',
        '✔️ Soporte técnico post-lanzamiento.',
        '✔️ Personalización de iconos de la aplicación.',
        '✔️ Pruebas exhaustivas y resolución de problemas.',
        '✔️ Optimización de rendimiento para una experiencia fluida.',
      ],
      link:'https://wa.me/+59133931210',
      bgClass: 'bg-blue-600 rounded-3xl',
    },
    {
      price: ' CONSULTE',
      discount: '',
      title: 'HIBRIDAS',
      features: [
        '✔️ Desarrollo con una única base de código para iOS y Android.',
        '✔️ Implementación rápida y costos de desarrollo más bajos.',
        '✔️ Mantenimiento de una única base de código.',
        '✔️ Uso de tecnologías web estándar (JavaScript).',
        '✔️ Diseño responsivo para adaptarse a diversas pantallas.',
        '✔️ Integración con servicios web y en la nube.',
        '✔️ Actualizaciones de la aplicación sin aprobación de tiendas de aplicaciones.',
        '✔️ Notificaciones push a través de servicios de terceros.',
        '✔️ Compatibilidad con múltiples sistemas operativos (iOS y Android).',
        '✔️ Entrega en un plazo específico.',
        '✔️ Código fuente de la aplicación.',
        '✔️ Soporte técnico post-lanzamiento.',
        '✔️ Diseño de interfaz de usuario adaptable.',
        '✔️ Pruebas exhaustivas y resolución de problemas.',
        '✔️ Optimización de rendimiento para una experiencia fluida.',
      ],
      link:'https://wa.me/+59133931210',
      bgClass: 'bg-blue-600 rounded-3xl',
    },
    {
      price: '$3999',
      discount: '',
      title: 'CONSTRUCTOR APP',
      features: [
        'Aplicaciones Móviles Básicas:',
        '✔️ Diseño de interfaz de usuario atractivo.',
        '✔️ Personalización de colores y logotipos de la marca.',
        '✔️ Integración de contenido multimedia, como imágenes y videos.',
        '✔️ Notificaciones push para mantener a los usuarios informados.',
        '✔️ Formularios de contacto y retroalimentación.',
        '✔️ Integración de redes sociales para compartir contenido.',
        '✔️ Catálogo de productos o servicios.',
        '✔️ Función de búsqueda para facilitar la navegación.',
        '✔️ Información de contacto y ubicación.',
        '✔️ Enlaces a sitios web y redes sociales.',
        'Características Avanzadas de Aplicaciones Móviles:',
        '✔️ Integración con API de terceros para servicios específicos, como mapas o reservas.',
        '✔️ Formularios interactivos para recopilar datos de usuarios.',
        '✔️ Creación de cuentas de usuario y perfiles personalizados.',
        '✔️ Galería de imágenes o cartera de proyectos.',
        '✔️ Acceso a contenido exclusivo o restringido para usuarios registrados.',
        '✔️ Integración con sistemas de análisis y estadísticas.',
        '✔️ Chat en vivo o soporte de mensajería para atención al cliente.',
        '✔️ Calendario de eventos o reservas en línea.',
        '✔️ Sistema de comentarios o reseñas.',
        '✔️ Integración con sistemas de gestión de contenido (CMS).',
      ],
      link:'https://wa.me/+59133931210',
      bgClass: 'bg-blue-600 rounded-3xl',
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

export default PriceApps;
