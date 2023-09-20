import Layout from 'components/Layout'
import SectionMantenimiento from './components/SectionMantenimiento'
import SectionTraffiker from './components/SectionTraffiker'


const index = () => {
  return (
    <Layout>
    <div className=' bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen '>
      <SectionMantenimiento/>
      <SectionTraffiker/>
      

      </div>
      </Layout>
  )
}

export default index