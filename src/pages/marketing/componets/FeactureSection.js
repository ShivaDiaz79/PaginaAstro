import React from 'react';
import Image from 'next/image';

const FeatureSection = () => {
  const features = [
    {
      title: '1. Recepción del Producto o Servicio:',
      description: 'Comenzamos por comprender en profundidad tu producto o servicio. Esto incluye su propósito, características, mercado objetivo y objetivos comerciales',
    },
    {
      title: '2. Estrategia de Campaña:',
      description: 'Desarrollamos una estrategia de campaña personalizada que se alinee con tus objetivos comerciales. Esto incluye la definición de los mensajes clave, el diseño creativo y la selección de canales adecuados.',
    },
    {
      title: '3. Diseño Creativo:',
      description: 'Nuestro equipo de diseñadores crea contenido visual atractivo, incluyendo imágenes, videos y gráficos que se utilizarán en la campaña.',
    },
    {
      title: '4. Planificación de Medios:',
      description: 'Seleccionamos cuidadosamente los canales y medios de comunicación para maximizar el alcance de la campaña. Esto puede incluir publicidad en línea, redes sociales, correo electrónico, publicidad impresa, eventos y más.',
    },
    {
      title: '5. Implementación de la Campaña:',
      description: 'Ejecutamos la campaña en los canales seleccionados, asegurándonos de que todos los elementos creativos y mensajes se entreguen de manera efectiva.',
    },
    {
      title: '6. Seguimiento y Medición:',
      description: 'Realizamos un seguimiento constante de la campaña para evaluar su rendimiento. Utilizamos métricas clave, como el ROI, la tasa de conversión y la participación del público, para medir el éxito.',
    },
    {
      title: '7. Optimización Continua:',
      description: 'Basándonos en los datos recopilados, optimizamos la campaña en tiempo real para mejorar su efectividad y ajustarnos a las cambiantes tendencias del mercado.',
    },
    {
      title: '8. Informes y Análisis:',
      description: 'Proporcionamos informes detallados sobre el rendimiento de la campaña, destacando los logros y áreas de mejora. Esto te permite tomar decisiones informadas para futuras estrategias.',
    },
  ];

  return (
    <section className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
      <div className="flex flex-wrap items-center mx-auto max-w-7xl">
        <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
          <div className="relative w-full max-w-lg">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`absolute rounded-full bg-blue-300 ${
                  index % 2 === 0 ? '-left-4' : '-bottom-24 right-20'
                } w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob ${
                  index > 0 ? `animation-delay-${index * 1000}` : ''
                }`}
              ></div>
            ))}

            <div className="relative">
              <h1 className='text-center p-5 text-3xl '>ETAPAS DE CAMPAÑA</h1>
              <Image
                className="mt-5 object-cover object-center mx-auto rounded-lg shadow-2xl transform hover:scale-110 transition-transform duration-300 ease-in-out"
                alt="hero"
                src="https://res.cloudinary.com/di1v23yy0/image/upload/v1695496400/proceso-marketing-contenido-conceptual-comienza-idea-tema-escritura-diseno-recibe-comentarios-ilustrar_71983-916_ytmmo9.avif"
                height={600}
                width={600}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start mt-7 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
          <dl className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index}>
                {/* <dt className="inline-flex items-center justify-center flex-shrink-0 w-12 h-12 mb-5 text-blue-600 rounded-full bg-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 icon icon-tabler icon-tabler-aperture"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path
                      stroke="none"
                      d="M0 0h24v24H0z"
                      fill="none"
                    ></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <line x1="3.6" y1="15" x2="14.15" y2="15"></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(72 12 12)"
                    ></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(144 12 12)"
                    ></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(216 12 12)"
                    ></line>
                    <line
                      x1="3.6"
                      y1="15"
                      x2="14.15"
                      y2="15"
                      transform="rotate(288 12 12)"
                    ></line>
                  </svg>
                </dt> */}
                <dd className="flex-grow">
                  <h2 className="mb-3 text-lg font-medium tracking-tighter text-center text-black">
                    {feature.title}
                  </h2>
                  <p className="text-base leading-relaxed text-black bg-slate-400 p-4 rounded-xl transform hover:scale-110 transition-transform duration-300 ease-in-out">
                    {feature.description}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
