import React from 'react'
import "./Hero.css";
import {HiLocationMarker} from 'react-icons/hi';
import CountUp from 'react-countup';
import {motion} from 'framer-motion';
const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter paddings innerWidth hero-container">

        {/*left side*/}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1 
            initial={{y: "2rem", opacity:0}}
            animate={{y: 0, opacity: 1}}
            transition = {{
              duration: 2,
              type: "spring",
            }}>Discover<br/> Most Suitable<br/> Property</motion.h1>
          </div>
          <div className="flexColStart hero-des">
            <span className='secondaryText'>
            Find variety of properties that suit your lifestyle
            </span>
            <span className='secondaryText'>
            Forget all the difficulties of finding the right property
            </span>
          </div>
          <div className="search-bar">
            <HiLocationMarker color="var(--blue)" size={30}/>
            <input type="text" />
            <button className="button">search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
              <CountUp start={8500} end={9000} duration={4}/>
                <span className='plus'>+</span><br />
              </span>
              <span className='secondaryText'>Premium Products</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={3600} end={4000} duration={4}/>
                <span className='plus'>+</span><br />
              </span>
              <span className='secondaryText'>Happy Customers</span>
            </div>

            <div className="flexColCenter stat">
              <span>
                <CountUp start={38} end={50} duration={6}/>
                <span className='plus'>+</span><br />
              </span>
              <span className='secondaryText'>Awards</span>
            </div>
          </div>

        </div>
        {/* Right side*/}
        <div className="flexCenter hero-right">
          <motion.div className="image-container"
            initial={{x: "7rem", opacity:0}}
            animate={{x: 0, opacity: 1}}
            transition = {{
              duration: 2,
              type: "spring",
            }}>
            <img src="./hero-image.png" alt="building photo"/>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero