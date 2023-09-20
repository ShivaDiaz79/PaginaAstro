import Layout from 'components/Layout'
import Project from './components/Project'


const Animaciones = () => {
  const projects = [
    {
      title1: "Jomor",
      title2: "Design",
      src: "jomor_design.jpeg"
    },
    {
      title1: "La",
      title2: "Grange",
      src: "la_grange.jpeg"
    },
    {
      title1: "Deux Huit",
      title2: "Huit",
      src: "deux_huit_huit.jpeg"
    },
    {
      title1: "Nothing",
      title2: "Design Studio",
      src: "nothing_design_studio.png"
    },
    {
      title1: "Mambo",
      title2: "Mambo",
      src: "mambo_mambo.jpeg"
    }
  ]

  return (
    <Layout>
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 pt-20">
      <div className="w-3/4">
        <p className="text-2xl font-bold mb-4">Astro Estudio</p>
        <div className="flex flex-wrap">
          {projects.map((project, index) => (
            <Project key={index} project={project} />
          ))}
        </div>
      </div>
    </main>
    </Layout>
  )
}

export default Animaciones