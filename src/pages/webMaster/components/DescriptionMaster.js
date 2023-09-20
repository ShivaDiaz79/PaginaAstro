import React from 'react';

// Función para renderizar cada elemento del contenido
const renderContentItem = (src, subtitle, title, description) => (
  <div className="xl:w-1/4 md:w-1/2 p-4" key={title}>
    <div className="bg-gray-100 p-6 rounded-lg">
      <img className="h-40 rounded w-full object-cover object-center mb-6" src={src} alt="content"/>
      <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{subtitle}</h3>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{title}</h2>
      <p className="leading-relaxed text-base">{description}</p>
    </div>
  </div>
);

const DescriptionMaster = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Nuestros Servicios</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-black text-xl"> Un Web Master es el director de orquesta detrás del escenario digital de una empresa, orquestando cada aspecto para crear una sinfonía armoniosa de éxito en línea. Su conocimiento y habilidades son esenciales para construir una presencia en línea efectiva y garantizar que un negocio prospere en el competitivo mundo digital de hoy. Ignorar la importancia de esta figura es prescindir de un recurso valioso que puede marcar la diferencia entre el éxito y el estancamiento en línea.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {[
              {
                src: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1694737833/papel-texto-mantenimiento-sitio-web-teclado-sobre-fondo-blanco_292052-356_zkfmtg.avif',
                subtitle: 'TU PAGINA SIEMPRE NECESITARA',
                title: 'Mantenimiento Web Integral:',
                description: 'El mantenimiento web integral es esencial para garantizar que tu sitio web o aplicación funcione sin problemas. Esto incluye la revisión y actualización constante de contenido, corrección de errores, y la implementación de medidas de seguridad. Un mantenimiento adecuado ayuda a mantener una experiencia de usuario positiva y atractiva. Por ejemplo, se realizan parches de seguridad para proteger contra amenazas en línea y se actualiza el contenido para mantenerlo relevante.',
              },
              {
                src: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1694737833/grafico-mensaje-charla-conversacion-burbuja-discurso_53876-127864_mpovqu.avif',
                subtitle: 'AUTOMATIZA TU TIEMPO',
                title: 'Desarrollo de ChatBot:',
                description: 'Un ChatBot (con o sin IA) es un programa de software que interactúa automáticamente con los usuarios en línea, respondiendo preguntas y proporcionando asistencia. Un ejemplo es "Whatsapp", un ChatBot diseñado para una tienda de arte en línea. Los usuarios pueden preguntar sobre productos, precios o incluso recibir recomendaciones de arte basadas en sus preferencias. Si Whatsapp utiliza inteligencia artificial (IA), puede aprender de las interacciones y mejorar sus respuestas con el tiempo.',
              },
              {
                src: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1694737833/manos-usando-telefono-inteligente-pago-linea_187217-54_hpzxvf.avif',
                subtitle: 'DALE LO MEJOR A TUS USUARIOS',
                title: 'Rendimiento Óptimo de tu Sitio o Aplicación:',
                description: 'Un rendimiento óptimo es esencial para una experiencia de usuario positiva. Esto implica la optimización de la velocidad de carga de tu sitio o aplicación. Por ejemplo, si tienes un sitio web de comercio electrónico, un rendimiento óptimo asegura que los clientes puedan navegar y comprar sin retrasos frustrantes. Un sitio web de alto rendimiento transmite una imagen de profesionalismo y confiabilidad. Los clientes se sienten más inclinados a confiar en una marca sin problemas.',
              },
              {
                src: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1694737833/interfaz-programacion-aplicaciones-api-texto-rompecabezas-icono-simple-integracion-software_406607-3593_ilod2y.avif',
                subtitle: 'TENDENCIA VIRTUAL',
                title: ' Integraciones:',
                description: 'Las integraciones permiten que tu sitio web o aplicación se comunique con otras herramientas o servicios. Por ejemplo, un sitio web de reservas de viajes podría integrarse con sistemas de pago para procesar transacciones. En el caso de Whatsapp, podría integrarse con una plataforma de pago para permitir a los usuarios comprar obras de arte directamente desde la conversación con el ChatBot. Otras integraciones podrian ser facebook, youtube, spotify que dan una perpectiva moderna.',
              },
            ].map(item => renderContentItem(item.src, item.subtitle, item.title, item.description))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default DescriptionMaster;
