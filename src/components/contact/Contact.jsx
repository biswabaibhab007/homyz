import React from 'react'
import './contact.css';

// react icons
import { MdCall } from 'react-icons/md'
import {BsFillCameraVideoFill} from 'react-icons/bs'
import { BsFillChatDotsFill } from 'react-icons/bs'
import {BsFillChatFill} from 'react-icons/bs'

import ContactBox from '../miniComponents/ContactBox';

const Contact = () => {
  return (
    <>
    <div className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="orangeText">
            Our Contact Us
          </span>
          <span className='primaryText'>
            Easy to contact us
          </span>
          <span className="secondaryText">
            We believe in providing you the best services to our customers.
          </span>

          {/* boxes for contacts */}
          <div className="contact-container">

          <div className="contactModes">
            <ContactBox name="Call" btnText="Call now" icon={< MdCall width={25}/>} />
            <ContactBox name="Chat" btnText="Chat now" icon={< BsFillChatDotsFill width={25}/>} />
          </div>
          <div className="contactModes">
            <ContactBox name="Video Call" btnText="Video Callnow" icon={< BsFillCameraVideoFill width={25}/>} />
            <ContactBox name="Message" btnText="Message now" icon={< BsFillChatFill width={25}/>} />
          </div>
          </div>
        </div>
        {/* right side */}
        <div className="c-right">
          <div className="image-container">
            <img src="./contact.jpg" alt="contact image"/>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default Contact