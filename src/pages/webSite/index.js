import Layout from 'components/Layout'
import PriceWeb from './components/PriceWeb'
import SectionLapto from './components/SectionLapto'
import SectionTablet from './components/SectionTablet'
import SectionDesktop from './components/SectionDesktop'
import PriceWeb2 from './components/PriceWeb2'
import PriceWeb3 from './components/Priceweb3'



const Index = () => {
  return (
    <Layout>
    <div className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen'>
     <SectionLapto/>
      <PriceWeb/>
      <SectionTablet/>
      <PriceWeb2/>
      <SectionDesktop/>
      <PriceWeb3/>
      </div>
      </Layout>
  )
}

export default Index