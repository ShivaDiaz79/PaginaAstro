import Layout from "components/Layout";
import Project from "./components/Project";
import Cube from "./components/Cube";
import AnimatedCard from "./components/AnimatedCard";
import AnimatedVideoComponent from "./components/FlagsSection";

const Animaciones = () => {
  const projects = [
    {
      title1: "Creamos",
      title2: "Todo",
      src: "jomor_design.avif",
    },
    {
      title1: "Tipo",
      title2: "De",
      src: "la_grange.avif",
    },
    {
      title1: "Animaciones",
      title2: "Que",
      src: "deux_huit_huit.avif",
    },
    {
      title1: "Puedas",
      title2: "Llegar",
      src: "nothing_design_studio.avif",
    },
    {
      title1: "A",
      title2: "Imaginar",
      src: "mambo_mambo.avif",
    },
  ];

  return (
    <Layout>
      <div className="pt-24 px-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
        <AnimatedCard
          title="Eleva tu Presencia con Animaciones Web de Vanguardia"
          description="Entra en el mundo de la excelencia digital con nuestras animaciones web de última generación. Nuestros efectos visuales y transiciones cautivadoras transformarán tu sitio en una experiencia inmersiva única. Impulsa la retención de usuarios y la diferenciación de la competencia. Descubre el potencial ilimitado de tu presencia en línea con nuestras animaciones de élite."
        />
      </div>
      <main className="sm:min-h-screen h-96 flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 sm:pt-20">
        <div className="w-3/4">
          <p className="text-2xl font-bold ">Astro Estudio</p>
          <div className="flex flex-wrap">
            {projects.map((project, index) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </div>
      </main>
      <div className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
        <Cube />
        <AnimatedVideoComponent
          title=" El Poder de las Animaciones en Sitios Web"
          description="En el competitivo mundo digital de hoy, la primera impresión cuenta más que nunca. Las animaciones en las páginas web no solo son una tendencia estilística, sino una herramienta poderosa para cautivar a los visitantes y aumentar la eficacia de tu sitio. Al integrar animaciones de manera estratégica, puedes transformar una experiencia de navegación estática en una experiencia dinámica e inmersiva.

          Las animaciones no solo hacen que tu sitio web sea visualmente atractivo, sino que también mejoran la usabilidad al guiar a los usuarios de manera intuitiva y proporcionar realimentación instantánea. Desde sutiles transiciones hasta llamativas animaciones de desplazamiento, estas dinámicas características comunican profesionalismo y cuidado en cada clic.
          
          ¿El resultado? Visitantes más comprometidos, tiempos de permanencia más largos y tasas de conversión más altas. Descubre cómo las animaciones pueden elevar tu presencia en línea y brindar a tus usuarios una experiencia única y memorable. ¡Haz que tu sitio web cobre vida y destaque en el mundo digital!."
          videoUrl="https://res.cloudinary.com/di1v23yy0/video/upload/v1693866198/video_bmbknn.webm" // Reemplaza con la URL de tu video
        />
      </div>
    </Layout>
  );
};

export default Animaciones;
