import React from 'react'

const items = [
  'Animaciones JavaScript personalizadas:',
  'Animaciones SVG:',
  'Animaciones en 3D (usando Three.js):',
  'Animaciones de carga y transiciones de página:',
  'Animaciones para aplicaciones móviles',
  'Animaciones de personajes y storytelling:',
];

const GridAnimations = () => {
  return (
  
    <div className="container px-5 py-24 mx-auto z-10">
    <div className="text-center mb-20"></div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 hover:animate-background bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]">
      {items.map((item, index) => (
        <div key={index} className="p-2 sm:w-1/2 w-full">
          <div className="bg-gray-100 rounded flex p-4 h-full items-center">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
              viewBox="0 0 24 24"
            >
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
            <span className="title-font font-medium">{item}</span>
          </div>
        </div>
      ))}
    </div>
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Y mucho más
    </button>
  </div>
    
  )
}

export default GridAnimations