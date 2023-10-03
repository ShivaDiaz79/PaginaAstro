import React from 'react';

// Función para renderizar cada elemento del trayecto
const renderTrayectoItem = (number, title, description) => (
  <div className="flex relative pb-20 sm:items-center md:w-2/3 mx-auto" key={number}>
    <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
      <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
    </div>
    <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-indigo-500 text-white relative z-10 title-font font-medium text-sm">{number}</div>
    <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
      <div className="flex-shrink-0 w-24 h-24 bg-indigo-100 text-indigo-500 rounded-full inline-flex items-center justify-center">
        {renderIcon(number)}
      </div>
      <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
        <h2 className="font-medium title-font text-gray-900 mb-1 text-xl">{title}</h2>
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

// Función para renderizar el icono de cada elemento del trayecto
const renderIcon = (number) => {
  switch (number) {
    case 1:
      return (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      );
    case 2:
      return (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      );
    case 3:
      return (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
          <circle cx="12" cy="5" r="3"></circle>
          <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
        </svg>
      );
    case 4:
      return (
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-12 h-12" viewBox="0 0 24 24">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
          <circle cx="12" cy="7" r="4"></circle>
        </svg>
      );
    default:
      return null;
  }
};

const TrayectoMaster = () => {
  return (
    <div>
      <section className="text-black body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {[1, 2, 3, 4].map(number => renderTrayectoItem(number, getTitle(number), getDescription(number)))}
        </div>
      </section>
    </div>
  );
}

// Función para obtener el título según el número del trayecto
const getTitle = (number) => {
  switch (number) {
    case 1:
      return 'Implementación de Herramientas de Analítica Web:';
    case 2:
      return 'Desarrollo y Mantenimiento de Bases de Datos:';
    case 3:
      return 'Estrategia y Planificación Digital:';
    case 4:
      return 'Soporte Técnico para Usuarios Finales:';
    default:
      return '';
  }
};

// Función para obtener la descripción según el número del trayecto
const getDescription = (number) => {
  switch (number) {
    case 1:
      return 'El Web Master puede configurar y gestionar herramientas de analítica web, como Google Analytics, para rastrear el tráfico, el comportamiento de los usuarios y otros datos relevantes. Esto proporciona información valiosa para tomar decisiones informadas sobre estrategias de marketing y mejoras en el sitio.';
    case 2:
      return 'Si el sitio web o la aplicación requieren una base de datos, el Web Master puede encargarse de su diseño, desarrollo, optimización y mantenimiento. Esto asegura un almacenamiento eficiente y seguro de la información.';
    case 3:
      return 'El Web Master puede colaborar en la elaboración de estrategias digitales, incluida la planificación de campañas de marketing, la identificación de oportunidades de mejora y la implementación de nuevas funcionalidades o características para mejorar la experiencia del usuario.';
    case 4:
      return 'El Web Master puede proporcionar soporte técnico a los usuarios finales, ayudándoles con problemas o preguntas relacionadas con el sitio web o la aplicación. Esto puede incluir asistencia por correo electrónico, chat en vivo o a través de un sistema de tickets.';
    default:
      return '';
  }
};

export default TrayectoMaster;
