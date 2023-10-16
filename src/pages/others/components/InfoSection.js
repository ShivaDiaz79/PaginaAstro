import React from 'react';

function Step({ number, title, description }) {
  return (
    <div className="flex relative pb-12">
      <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10">
        <svg
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          className="w-5 h-5"
          viewBox="0 0 24 24"
        >
          {number === 1 ? (
            <>
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </>
          ) : (
            <>
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              <circle cx="12" cy="5" r="3"></circle>
            </>
          )}
        </svg>
      </div>
      <div className="flex-grow pl-4">
        <h2 className="font-medium title-font text-sm text-black mb-1 tracking-wider">{title}</h2>
        <p className="leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function InfoSection() {
  const stepsData = [
    {
      number: 1,
      title: 'Requisitos de Suscriptores y Visualizaciones:',
      description: 'Debes tener al menos 1,000 suscriptores y 4,000 horas de tiempo de visualización en los últimos 12 meses.',
    },
    {
      number: 2,
      title: 'Aprobación del Programa de Socios de YouTube:',
      description: 'Una vez que cumplas con los requisitos, puedes solicitar unirte al Programa de Socios de YouTube.',
    },
    {
      number: 3,
      title: 'Configuración de una Cuenta de AdSense: ',
      description: 'Necesitarás una cuenta de AdSense para recibir pagos. Sigue los pasos para configurar tu cuenta y vincularla a tu canal de YouTube.',
    },
    {
      number: 4,
      title: 'Generación de Ingresos:',
      description: 'A medida que tu contenido se monetice con anuncios, YouTube compartirá contigo aproximadamente el 55% de los ingresos generados por esos anuncioss.',
    },
    {
      number: 5,
      title: 'Guias para Monetizar tu Canal de YouTube',
      description: 'Para monetizar tus ideas y compartir tu talento.',
    },
  ];

  return (
    <section className="text-black body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full">
          <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
            {stepsData.map((step, index) => (
              <Step key={index} {...step} />
            ))}
          </div>
          <img
            className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12"
            src="https://res.cloudinary.com/di1v23yy0/image/upload/v1696469643/YOUTUBE-editada_gjwybh.png"
            alt="youtube"
          />
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
