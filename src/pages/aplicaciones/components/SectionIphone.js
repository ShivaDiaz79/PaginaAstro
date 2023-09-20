import React, { useState } from 'react';
import Iphone12mockup from './Iphone12mockup';

const SectionIphone = () => {
  const [content, setContent] = useState(null);

  const showContent1 = () => {
    setContent(
      'El Apple de los creadores de apps. Excelente diseños, elementos basados en localización, facilidad de uso, su sencillo sistema para subir imágenes. producto muy refinado que ofrece muchas opciones de gran potencia. Reproduce una radio, publica una imagen en el muro social, escucha tu podcast favorito y más. Cree notificaciones automáticas y vea cómo se mostrarán sus notificaciones automáticas a los usuarios de su aplicación.Toma capturas de pantalla para la tienda de aplicaciones y mucho más'
    );
  };

  const showContent2 = () => {
    setContent(
      'Plantillas son bellísimas y la facilidad de uso una de las mejores. Además también ofrece funcionalidades innovadoras como notificaciones push. CMS, eCommerce,Diseño modular, Apps Nativa , Notificaciones push, Login , Estadísticas y Anuncios , Back office , Soporte humano real, Otras características , Extensiones populares, Compras dentro de la app ,Productos Importación/Exportación, Entrega local, Recoger en tienda, Franjas horarias, Push programadas, Chat, Zapier, Google AMP'
    );
  };

  const showContent3 = () => {
    setContent(
      'El creador de apps para la empresa. Plantillas muy elegantes con una amplia variedad de opciones para jugar con ellas. En general sus prestaciones son muy avanzadas. Funciones personalizadas, Realidad aumentada, Mapas interactivos, Compras en la aplicación Registro / inicio de sesión de correo electrónico único, Integraciones de API y SDK de terceros      '
    );
  };
  
  return (
    <div className="mx-auto flex flex-col items-center sm:text-center min-h-screen border border-red-800">
      <div className="lg:max-w-lg lg:w-full md:w-5/6">
      
      </div>
      <div className="mt-8">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
        Desarrollo de Aplicaciones Móviles 
          <br className="hidden lg:inline-block" /> Creador de aplicaciones
        </h1>
        <p>Las aplicaciones creadas con plantillas o gestores de contenido son soluciones de desarrollo que utilizan diseños y funcionalidades predefinidas como base. Estas aplicaciones se caracterizan por su rapidez en la implementación y la capacidad de personalización limitada en comparación con las aplicaciones desarrolladas desde cero.</p>
        {content && (
          <div className="border rounded-lg p-4 mb-4 leading-relaxed">
            {content}
          </div>
        )}
        <div className="lg:text-center m-11" >
          <div className="flex flex-col lg:flex-row justify-center items-center">
            <button
              onClick={showContent1}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4 lg:mb-0 lg:mr-4"
            >
             ShoutEm 
            </button>
            <button
              onClick={showContent2}
              className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4 lg:mb-0 lg:mx-4"
            >
             GoodBarber
            </button>
            <button
              onClick={showContent3}
              className="inline-flex text-white text-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mb-4 lg:mb-0 lg:ml-4"
            >
             Mobile Roadie
            </button>
          </div>
         
        </div> <Iphone12mockup />
      </div>
    </div>
  );
};

export default SectionIphone;