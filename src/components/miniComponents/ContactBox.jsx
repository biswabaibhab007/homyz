import React from 'react'
import './ContactBox.css'
const ContactBox = (props) => {
  return (
    <div className="flexStart row contactModes">
      <div className="contactTypeBox flexColStart">
        <div className="flexCenter contactBoxUpSection">
          <span className="flexCenter contactTypeIcon" >
            {props.icon}
          </span>
          <div className="flexColStart contactTypeText ">
            <span className="contactTypeName primaryText">{props.name}</span>
            <span className="contactTypeNumber secondaryText">021 123 145 14
            </span>
          </div>
        </div>
        <div className="flexCenter contactBoxDownSection">
          <button className='contactBtn'>{props.btnText}</button>
        </div>
      </div>
    </div>
  )
}

export default ContactBox