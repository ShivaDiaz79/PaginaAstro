import React from 'react';

const DetallesInfoproducto = () => {
  const productos = [
  
    {
      title: 'Consulta Estratégica Personalizada:',
      description: 'Comenzamos con una consulta profunda para conocer tus objetivos y visión. ',
      image: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1695499474/discutiendo-estadisticas_274679-104_eok4od.avif',
      subtitle: 'Hacemos Equipo',
    },
    {
      title: 'Estrategia de Contenido Específica:',
      description: 'Te proporciono una estrategia de contenido sólida que hará que tus InfoProductos se destaquen.',
      image: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1695496399/grupo-personas-dispositivos-frente-graficos-ideas-conceptuales_1134-17174_ee2yn5.avif',
      subtitle: 'Armamos tu Exito',
    },
    {
      title: 'Creación de Contenido Impactante:',
      description: 'Trabajo en la producción de contenido atractivo, desde artículos hasta videos, diseñado para cautivar a tu audiencia.',
      image: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1695496399/palabra-contenido-empresaria-apuntando-algun-lugar-contra-boton-azul_1134-53846_tjahsq.avif',
      subtitle: 'TUS IDEAS TE DAN GANANCIAS',
    },
    {
      title: 'SEO y Optimización para Google:',
      description: 'Tu contenido será altamente visible en línea gracias a técnicas de SEO avanzadas. Aprovecho palabras clave estratégicas para atraer un tráfico cualificado..',
      image: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1695496399/concepto-marketing-digital-linea-engranajes-ruedas-dentadas-iconos-simbolos-marketing-linea-redes-sociales-seo-sitio-web-publicidad-palabras-clave-marketing-internet_593195-352_hrzg3q.avif',
      subtitle: 'LLEGAMOS A DONDE NADIE LLEGA',
    },
    {
      title: 'Distribución Inteligente:',
      description: 'Implemento una estrategia de distribución en redes sociales y otros canales, aprovechando la potencia de las plataformas.',
      image: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1695496399/hombre-negocios-actuacion-contenido-senal-mano_38816-1633_svs7a0.avif',
      subtitle: 'MEJOR ALCANCE',

    },
    {
        title: 'Participación y Conexión:',
        description: 'Me aseguro de que te conectes con tu audiencia respondiendo a preguntas y comentarios. Mantengo esa conexión y el compromiso a través de redes sociales activas..',
        image: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1695496399/imagen-compuesta-empresario-mostrando-tableta-digital-pantalla-blanco-oficina-creativa_1134-27611_pua7im.avif',
        subtitle: 'FLUJOS DE INTERACIONES',
      },
      {
        title: 'Datos que Hablan:',
        description: 'Utilizo herramientas de análisis para rastrear el rendimiento de tu contenido. Ajusto la estrategia basada en datos para obtener resultados óptimos.',
        image: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1695496399/hombres-jovenes-signos-digitales-mientras-hacen-informe-oficina_488220-45298_szfhig.avif',
        subtitle: 'LA CLAVE DEL EXITO',
      },
      {
        title: 'Generación de Leads y Ventas:',
        description: 'Implemento estrategias probadas para generar leads y convertirlos en ventas. Dirijo el tráfico hacia tus páginas de venta de InfoProductos..',
        image: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1695496398/marketing-contenidos-contenido-datos-blogging-medios-comunicacion-informacion-publicacion-concepto-vision_36325-4060_ucgm47.avif',
        subtitle: 'FIDELIZAMOS TU PUBLICO',
      },
    
      {
        title: 'Informes Detallados:',
        description: 'Te entrego informes regulares con métricas clave y resultados concretos que serviran como dato historico para la elaboracion de nuevos infoproductos.',
        image: 'https://res.cloudinary.com/di1v23yy0/image/upload/v1695496398/negocios-negocios-trabajo-equipo-financiero-trabajando-reunion-negocio-negocios-linea_24883-1061_qw63cv.avif',
        subtitle: 'PLANIFICACION',
      },
  ];

  return (
    <section className="text-black body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">{productos[0].title}</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">{productos[0].description}</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {productos.map((producto, index) => (
            <div key={index} className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={producto.image} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">{producto.subtitle}</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{producto.title}</h1>
                  <p className="leading-relaxed">{producto.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetallesInfoproducto;

