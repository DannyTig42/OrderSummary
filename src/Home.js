import React from 'react'
import pic from './asset/illustration-hero.svg'
import Main from './Main'
import Footer from './Footer'
import SunMain from './SubMain'
import './Home.css'

const Home = () => {
  return (
    <div className='all'> 
        <img className='hero' src={pic} alt="" />
        <Main/>
        <SunMain/>
        <Footer/><br />
    </div>
  )
}

export default Home