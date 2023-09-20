import Layout from 'components/Layout'
import React from 'react'
import PriceWeb from './components/PriceWeb'
import SectionLapto from './components/SectionLapto'
import SectionTablet from './components/SectionTablet'
import SectionDesktop from './components/SectionDesktop'



const index = () => {
  return (
    <Layout>
    <div className='bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen'>
     <SectionLapto/>
      <PriceWeb/>
      <SectionTablet/>
  
      <PriceWeb/>
      <SectionDesktop/>

      <PriceWeb/>

      </div></Layout>
  )
}

export default index