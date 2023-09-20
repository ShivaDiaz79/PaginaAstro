import React from 'react';

const CenteredImageWithText = () => {
  return (
    <div className="grid grid-cols-3 gap-4 items-center justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen  py-8">
      {/* Columna Izquierda - En dispositivos móviles, aparecerá primero */}
      <div className="col-span-3 md:col-span-1 md:order-1">
        <h2 className="text-2xl font-semibold text-gray-800">Título Izquierda</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, mi sed scelerisque euismod.
        </p>
      </div>

      {/* Columna Central con Imagen */}
      <div className="col-span-3 md:col-span-1 md:order-2">
        <img
          src="https://res.cloudinary.com/di1v23yy0/image/upload/v1694127920/sistemas-modernos-gestion-hogar-inteligente-utilizan-realidad-aumentada-edificio-inteligente-fondo-aislado-hogar-inteligente-generar-ai_893737-1195_gah09m.avif"
          alt="Imagen en el Centro"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Columna Derecha - En dispositivos móviles, aparecerá después de la imagen */}
      <div className="col-span-3 md:col-span-1 md:order-3">
        <h2 className="text-2xl font-semibold text-gray-800">Título Derecha</h2>
        <p className="text-gray-600 mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam gravida, mi sed scelerisque euismod.
        </p>
      </div>

     </div>
    
  );
};

export default CenteredImageWithText;



