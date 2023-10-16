import React from 'react'
import DescriptionMaster from './DescriptionMaster'
import TrayectoMaster from './TrayectoMaster'
import PriceInfo from './PriceInfo'
import TarjetaMarcas from './TarjetaMarcas'

const SectionMantenimiento = () => {
  return (
    <div>
      <TarjetaMarcas/>
        <DescriptionMaster/>
        <TrayectoMaster/>
        <PriceInfo/>
    </div>
  )
}

export default SectionMantenimiento