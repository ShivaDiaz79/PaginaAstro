import React from 'react';

const SectionRedes = () => {
  const items = [
    {
      title: 'Diseño de Logo Personalizado:',
      description:
        'Nuestro servicio de diseño de logo personalizado es la piedra angular de la identidad de marca. Trabajamos estrechamente contigo para crear un logotipo que trascienda lo meramente estético. Cada elemento se selecciona cuidadosamente para reflejar los valores, la misión y la visión de tu empresa. Tu logotipo no solo será único y memorable, sino que también se convertirá en un símbolo duradero de tu marca.',
    },
    {
      title: 'Manual de Marca Integral',
      description:
        'Desarrollamos manuales de marca completos y detallados que trascienden lo visual. No se trata solo de paletas de colores y tipografías, sino de las reglas que guiarán todas las interacciones de tu marca con el mundo. Nuestro objetivo es garantizar la coherencia en todas las aplicaciones visuales, desde la comunicación impresa hasta la presencia en línea, para que tu marca siempre se destaque.',
    },
    {
      title: 'Diseño Gráfico Creativo',
      description:
        'Nuestro equipo de diseño gráfico combina creatividad y experiencia técnica para crear materiales gráficos que van más allá de la estética superficial. Ya sea en forma de folletos impresos, gráficos para redes sociales o cualquier otro medio, nuestros diseños cuentan historias, transmiten mensajes y dejan huellas imborrables en la mente de tu audiencia.',
    },
    {
      title: 'Diseño de Material Publicitario:',
      description:
        'La publicidad es el rostro de tu marca para el mundo. Nuestro servicio de diseño publicitario se centra en crear anuncios, banners y otros elementos visuales que trasciendan lo ordinario. Cada diseño está cuidadosamente concebido para maximizar el impacto de tus campañas y atraer la atención de tu público objetivo..',
    },
    {
      title: 'Diseño de Envases y Etiquetas',
      description:
        'El diseño de envases y etiquetas es crucial en la comercialización de productos. Creamos diseños que no solo atraen visualmente, sino que también cuentan una historia. Consideramos la funcionalidad, la estética y la experiencia del usuario al diseñar envases y etiquetas que resalten en los estantes y conecten con los compradores.',
    },
    {
      title: 'Diseño de Presentaciones y Documentos',
      description:
        'Las presentaciones y los documentos son herramientas poderosas de comunicación. Nuestro servicio de diseño se asegura de que cada presentación y documento sea visualmente impactante y profesional. Utilizamos diseño gráfico y tipografía experta para comunicar tu mensaje con claridad y estilo.',
    },
  ];

  const renderItems = () =>
    items.map((item, index) => (
      <div key={index} className="p-4 md:w-1/3 flex flex-col  text-justify-between ">
      
        <div className="flex-grow">
          {renderTitleAndDescription(item.title, item.description)}
        
        </div>
      </div>
    ));

  const renderTitleAndDescription = (title, description) => (
    <div className="mt-5">
      <h1 className="sm:text-2xl text-2xl font-medium title-font text-center text-black mb-4  ">
        {title}
      </h1>
      <p className="text-base mx-10 text-black bg-slate-300 p-5 rounded-2xl text-justify-between transform hover:scale-110 transition-transform duration-300 ease-in-out">
        {description}
      </p>
      <div className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex my-4"></div>
      </div>
    </div>
  );

  return (
    <section className="text-black body-font">
      <div className=" px-5 py-24">
        <div className=" text-center ">
          <h1 className='text-4xl'>DISEÑO GRAFICO - DISEÑO UX-UI</h1>
          {renderTitleAndDescription(
            'Transforma tu Visión en Realidad:',
            'En el mundo del marketing y la publicidad, sorprendentemente, un gran número de profesionales aún subestima la trascendental sinergia entre la construcción de una identidad de marca sólida y la experiencia del usuario (UX) y la interfaz de usuario (UI). La verdad es que fusionar estas disciplinas es esencial para forjar conexiones emocionales duraderas con el público objetivo y garantizar un impacto significativo en la percepción de una marca. En Astro Estudio, entendemos la importancia de una identidad de marca sólida. Nuestro enfoque es llevar tus ideas y visión a la vida, creando una marca única que resonará con tu audiencia.'
          )}
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 ">
          {renderItems()}
        </div>
      </div>
    </section>
  );
};

export default SectionRedes;

