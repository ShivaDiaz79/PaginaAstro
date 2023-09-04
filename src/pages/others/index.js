
import React from 'react'

import ProductCard from './components/ProductCard'

import CustomImageEffect from 'components/Animaciones/CustomImageEffect'
import ParallaxSection from 'components/Animaciones/ParallaxSection'


const index = () => {
  return (
    <main>
         <div>
      
      <ParallaxSection>
        <h2>This is a Parallax Section</h2>
        <p>Some content inside the parallax section.</p>
      </ParallaxSection>
    </div>
    <div>
      <ProductCard/>
    
    
      <CustomImageEffect/>
     

    </div>
 
    </main>
  )
}

export default index