import React from 'react';

const ContenYou = () => {
  return (
    <div className="flex flex-wrap items-center justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-60 py-8">
      {/* Sección Izquierda */}
      <div className="w-full sm:w-1/2 p-4">
        <img
          src="https://res.cloudinary.com/di1v23yy0/image/upload/v1694218789/primer-plano-hacker-que-usa-computadora-portatil-habitacion-oscura-concepto-ciberdelincuencia-primer-plano-vista-trasera-programadores-haciendo-programacion-generada-ia_538213-2834_h9jsp0.avif"
          alt="Imagen Izquierda"
          className="w-full h-auto rounded-lg"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
        Optimización de Contenido y Análisis de Datos Avanzados: Potencia tu Impacto Digital
        </h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          gravida, mi sed scelerisque euismod.
        </p>
      </div>

      {/* Ícono de YouTube */}
      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-10 h-10 text-white"
        >
          <path d="M21 12.24l-16-9.143-.01 18.285 16-9.142z"></path>
        </svg>
      </div>

      {/* Sección Derecha */}
      <div className="w-full sm:w-1/2 p-4">
        <img
          src="https://res.cloudinary.com/di1v23yy0/image/upload/v1694218797/transporte-tecnologia-moderna-concepto-personas-hombre-que-usa-sistema-navegacion-computadora-portatil-camion_380164-101775_vjsazl.avif"
          alt="Imagen Derecha"
          className="w-full h-auto rounded-lg"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">
          Título Derecha
        </h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          gravida, mi sed scelerisque euismod.
        </p>
      </div>

      {/* Imagen Redonda */}
      <div className="w-32 h-32 bg-gray-200 rounded-full flex items-center justify-center mt-8">
        <img
          src="https://res.cloudinary.com/di1v23yy0/image/upload/v1694218813/doble-exposicion-mapa-mundo-digital-abstracto-conexiones-escritura-mano-cuaderno-segundo-plano-investigacion-portatiles-concepto-estrategia_258654-22290_scqape.avif"
          alt="Imagen Redonda"
          className="w-24 h-24 rounded-full"
        />
      </div>

      {/* Bloques de Párrafos con Señaladores */}
      <div className="w-full h-full sm:ms-80 ">
        <div className="mb-4 ">
          <div className="w-4 h-4 bg-blue-500 rounded-full inline-block mr-2"></div>
          <p className="inline-block text-gray-800">Párrafo con señalador 1</p>
        </div>
        <div className="mb-4">
          <div className="w-4 h-4 bg-green-500 rounded-full inline-block mr-2"></div>
          <p className="inline-block text-gray-800">Párrafo con señalador 2</p>
        </div>
      </div>
    </div>
  );
};

export default ContenYou;
