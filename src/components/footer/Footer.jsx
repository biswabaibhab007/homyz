import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <section className="f-wrapper">
    <div className="flexStart paddings innerWidth footerContainer">
      
      <div className="flexStart paddings f-left">
        <div className="f-logo ">
          <img src="/logo2.png" alt="footer logo" width={250} />
        </div>
        <div className="flexStart f-textContent">
          <span>
          Our Vision is to provide the best
          </span>
        </div>
      </div>
      
      <div className="f-right">
        <div className="info flexStart">
          <span className='primaryText'>
            Information
          </span>
          <span className='secondaryText address'>
            Plot no- 56, Sec-32, Mohali, Punjab
          </span>
        </div>
        <div className="list ">
          <ul className='flexStart'>
            <li>Property</li>
            <li>Services</li>
            <li>Products</li>
            <li>About Us</li>
          </ul>
        </div>

      </div>
    </div>
    </section>
  )
}

export default Footer