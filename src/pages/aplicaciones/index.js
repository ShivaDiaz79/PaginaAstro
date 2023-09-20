import Layout from 'components/Layout'
import React from 'react'
import PriceApps from './components/PriceApps'



import SectionApps from './components/SectionApps'
import SectionMcolors from './components/SectionMcolors'
import SectionIphone from './components/SectionIphone'
import PriceMcolors from './components/PriceMcolors'
import PriceIphone from './components/PriceIphone'

const index = () => {
  return (
    <Layout>
    <div className=' bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen '>
     <SectionApps/>
      
      <PriceApps/>
      <SectionMcolors/>
      <PriceMcolors/>
      <SectionIphone/>
      <PriceIphone/>
  
      </div>
      </Layout>
  )
}

export default index