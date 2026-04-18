import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/og.jpg'
import hero_title from '../../assets/hero_title.png'
import hero_play from '../../assets/Play_icon.png'
import hero_info from '../../assets/info_icon.png'
import Titlecard from '../../Components/Titlecard.jsx/Titlecard'
import Footer from '../../Components/Footer/Footer'
import { useNavigate } from 'react-router-dom'


const Home = () => {
 const navigate = useNavigate()
  return (
    <div className='home'>
        <Navbar/>
        <div className="hero-section">
          <img src={hero_banner} alt='' className='bg-image'/>
          <div className="hero-caption">
            <img src={hero_title} alt='' className='cap-img'/>
            <p>After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.</p>
            <div className="her-btn">
             <button className='btn'> <img src={hero_play} alt=''/>Play</button>
             <button className='btn dark-btn' > <img src={hero_info} alt=''/>More Info</button>
            </div>
                         <Titlecard/>
          </div>
        </div>
        <div className="more-cards">
          <Titlecard title={"BlockBuster Movies"} category={"top_rated"}/>
           <Titlecard title={"Only on Netflix"} category={"popular"}/>
            <Titlecard title={"Upcoming"} category={"upcoming"}/>
             <Titlecard title={"Top Picks For You"} category={"now_playing"}/>
      </div>
      <Footer/>
    </div>
  )
}

export default Home