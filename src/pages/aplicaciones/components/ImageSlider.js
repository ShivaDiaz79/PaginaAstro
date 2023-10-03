import React, { useState, useEffect } from 'react';

const images = [
  {
    src: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1695769692/nuevo-concepto-idea-innovacion-creatividad_34478-136_tuyjja.avif',
    title: 'Desarrollo de Aplicaciones a tu Alcance',
    text: '¿Quieres llevar tu negocio o idea al mundo de las aplicaciones móviles y web sin complicaciones? Como desarrolladores de aplicaciones expertos, te ofrecemos la solución perfecta. Utilizamos constructores de aplicaciones avanzados para crear apps personalizadas y atractivas que se ajusten a tus necesidades.',
  },
  {
    src: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1695769691/conceptos-marketing-digital-publicidad-digital-promocion-medios-redes-sociales-seo-atraccion-clientes-marketing-contenido-digital_27634-1425_yuzd0y.avif',
    title: 'Tu Aplicación, Tu Estilo: Diseño Personalizado',
    text: 'En nuestro servicio de desarrollo de aplicaciones, ponemos énfasis en el diseño personalizado. Trabajamos contigo para crear una aplicación que refleje tu visión y valores. Nuestros constructores de aplicaciones permiten una personalización total, desde el aspecto visual hasta las funciones específicas que deseas.',
  },
  {
    src: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1695769691/concepto-negocios-tecnologia-personas-cierre-mano-mujer-iconos-aplicaciones-telefono-inteligente-transparente-pantalla-reloj-inteligente_380164-118409_lxj59b.avif',
    title: 'Ahorra Tiempo y Costos en Desarrollo de Apps',
    text: 'El desarrollo de aplicaciones tradicional puede ser costoso y llevar mucho tiempo. Con nuestra experiencia en constructores de aplicaciones, aceleramos el proceso y reducimos los costos. Obtén una aplicación de calidad en menos tiempo y dentro de tu presupuesto.',
  },
  {
    src: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1695769691/concepto-negocios-personas-medios-comunicacion-tecnologia-manos-pagina-web-negocios-pantalla-telefono-inteligente-sobre-fondo-negro_380164-173526_jvhnkf.avif',
    title: 'Llega a Más Usuarios con Aplicaciones Multiplataforma',
    text: 'No te limites a una sola plataforma. Desarrollamos aplicaciones que funcionan en dispositivos iOS y Android, así como en la web. Amplía tu alcance y llega a una audiencia más amplia con nuestras soluciones multiplataforma.',
  },
  {
    src: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1695769691/marketing-medios-sociales-concepto-negocio-e-internet_218381-2401_owzctj.avif',
    title: 'Actualizaciones sin Preocupaciones para tu Aplicación',
    text: 'El mantenimiento y las actualizaciones son esenciales para el éxito continuo de tu aplicación. Con nuestro servicio, implementamos actualizaciones sin complicaciones para mantener tu aplicación siempre en su mejor estado. Nos encargamos de las mejoras técnicas para que tú puedas concentrarte en hacer crecer tu negocio.',
  },
];

const ImageSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Cambiar de imagen cada 5 segundos
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  const isEven = currentImage % 2 === 0;

  return (
    <div className="flex flex-col md:flex-row items-center mb-4 md:mb-0 border border-purple-600 md:h-96">
      <div className={`md:w-1/2 p-4 ${isEven ? 'order-2' : 'order-1'}`}>
        <img
          src={images[currentImage].src}
          alt={images[currentImage].title}
          className="w-full h-96 object-cover md:full"
        />
      </div>
      <div className={`md:w-1/2 p-4 ${isEven ? 'order-1' : 'order-2'}`}>
        <h2 className="text-3xl text-center text-black font-semibold mb-2">
          {images[currentImage].title}
        </h2>
        <p className="text-black">{images[currentImage].text}</p>
      </div>
    </div>
  );
};

export default ImageSlider;
