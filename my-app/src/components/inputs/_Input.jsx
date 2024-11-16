import React from 'react'
import './Inputs.css'

const Input = ({type="text", placeholder, icon=null, btn=false}) => { //btn - для pass recover ""
  return (
    <div className="input-wrapper">
        <input type={type} placeholder={placeholder} className={icon ? "inputSVG" : ""}/>
        {
          icon?  
          <div className={btn ? "icon-block  icon-block-btn" : "icon-block"}>
            {icon}
          </div>
          :
          ""      
        }
    </div>
  )
}

export default Input