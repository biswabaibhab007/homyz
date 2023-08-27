import React from 'react'

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

// css for react-accessible-accordion
import 'react-accessible-accordion/dist/fancy-example.css';

import {MdOutlineArrowDropDown} from 'react-icons/md';

import './Value.css'
import data from '../../utils/accordion'
const Value = () => {
  return (
    <div className='v-wrapper'>
      <div className="paddings flexCenter innerWidth v-container">
        {/* left side */}
        <div className="flexCenter v-left ">
          <div className="v-image-container">
            <img src="./value.png" alt="image of a building" />
          </div>
        </div>
        {/* right side */}
        <div className="flexColStart v-right">
          <span className='orangeText'>
          Our Value
          </span>
          <span className='primaryText'>
          Value We Give To You
          </span>
          <span className='secondaryText'>
          Torem Mpsum Kolor Bit, Hmet Donsectetur adipisicing elit.<br/>
          Ndeus adipisci facere obcaecati, ullam pariatur recusandae 
          </span>

          {/* ACCORDION SECTION */}
          <Accordion
          allowMultipleExpanded = {false} // make sure at on one time only one section is expanded 
          preExpanded={[0]} //our 0th value should be pre expanded
          >
            {
              data.map((item, i) => {
                return(
                  <AccordionItem className="accordionItem" key={i} uuid={i}>
                    <AccordionItemHeading>

                      <AccordionItemButton className="accordionButton">
                        <div className="flexCenter icon">{item.icon}</div>
                        <span className="primaryText">
                        {item.heading}
                        </span>
                        <div className="flexCenter icon">
                          <MdOutlineArrowDropDown size={20} />
                        </div>
                      </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                      <p className='secondaryText'>{item.detail}</p>
                    </AccordionItemPanel>
                  </AccordionItem>
                )
              })
            }
          </Accordion>

        </div>
      </div>
    </div>
  )
}

export default Value