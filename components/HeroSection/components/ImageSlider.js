import React, { useState, useEffect } from 'react';

const images = [
  {
    src: '/Img/blancowhite.png',
    title: 'Título 1',
    text: 'Siempre detallan quién es el autor, y por lo geSiempre detallan quién es el autor, y por lo geSiempre detallan quién es el autor, y por lo ge',
  },
  {
    src: '/Img/blancowhite.png',
    title: 'Título 2',
    text: 'TSiempre detallan quién es el autor, y por lo ge Siempre detallan quién es el autor, y por lo geSiempre detallan quién es el autor, y por lo ge',
  },
  {
    src: '/Img/blancowhite.png',
    title: 'Título 3',
    text: 'TSiempre detallan quién es el autor, y por lo geSiempre detallan quién es el autor, y por lo geSiempre detallan quién es el autor, y por lo ge',
  },
  {
    src: '/Img/blancowhite.png',
    title: 'Título 4',
    text: 'Siempre detallan quién es el autor, y por lo geSiempre detallan quién es el autor, y por lo geSiempre detallan quién es el autor, y por lo ge',
  },
  {
    src: '/Img/blancowhite.png',
    title: 'Título 5',
    text: 'TSiempre detallan quién es el autor, y por lo geSiempre detallan quién es el autor, y por lo geSiempre detallan quién es el autor, y por lo ge',
  },
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Cambiar de imagen cada 5 segundos
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const isEven = currentImage % 2 === 0;

  return (
    <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 border border-purple-600 md:h-96">
      <div className={`md:w-1/2 p-4 ${isEven ? 'order-2' : 'order-1'}`}>
        <img
          src={images[currentImage].src}
          alt={images[currentImage].title}
          className="w-full h-full object-cover md:h-auto"
        />
      </div>
      <div className={`md:w-1/2 p-4 ${isEven ? 'order-1' : 'order-2'}`}>
        <h2 className="text-3xl text-black font-semibold mb-2">
          {images[currentImage].title}
        </h2>
        <p className="text-black">{images[currentImage].text}</p>
      </div>
    </div>
  );
};

export default ImageSlider;
