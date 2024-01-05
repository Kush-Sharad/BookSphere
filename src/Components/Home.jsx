import React from 'react'
import Carousel from './Carousel'
import Searchbar from '../Searchbar'
import Services from '../Services'
import Footerbar from '../Footerbar'

const Home = () => {
  return (
    <div>
        <Searchbar/>
        <Carousel/>
        <Services/>
        <Footerbar/>
    </div>
  )
}

export default Home