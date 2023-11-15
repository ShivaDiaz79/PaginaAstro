import Layout from "components/Layout";
import Project from "./components/Project";
import Cube from "./components/Cube";
import AnimatedCard from "./components/AnimatedCard";
import AnimatedVideoComponent from "./components/FlagsSection";
import ImageFlot from "./components/ImageFlot";

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
      <div className="pt-24 px-3 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-full">
        <AnimatedCard
          title="Eleva tu Presencia con Animaciones Web de Vanguardia"
          description="Entra en el mundo de la excelencia digital con nuestras animaciones web de última generación. Nuestros efectos visuales y transiciones cautivadoras transformarán tu sitio en una experiencia inmersiva única. Impulsa la retención de usuarios y la diferenciación de la competencia. Descubre el potencial ilimitado de tu presencia en línea con nuestras animaciones de élite."
        />
      </div>
      <div className="h-screen">
      <ImageFlot/>
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
      </div>
    </Layout>
  );
};

export default Animaciones;
