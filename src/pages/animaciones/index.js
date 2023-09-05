import Layout from 'components/Layout'
import React from 'react'
import TextReveal from '../../../components/Animaciones/TextReveal'

const index = () => {
  return (
    <Layout>
    <div className=' bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 min-h-screen '>
      <TextReveal/>
      </div>
      </Layout>
  )
}

export default index