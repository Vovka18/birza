import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import './ScheduleWrapper.css'

const ScheduleWrapper = () => {

    const [ menuSelection, setMenuSelection ] = useState(1);

  return (
    <div className="schedule-wrapper">
        <div className="schedule-menu">
            <span onClick={()=>setMenuSelection(1)}>
                <h4 className={menuSelection == 1 ? "span-active" : ""}>График</h4>
                <div className={menuSelection == 1 ? "line line-activ" : "line"}></div>
            </span>
            <span onClick={()=>setMenuSelection(2)}>
                <h4 className={menuSelection == 2 ? "span-active" : ""}>Стакан ордеров</h4>
                <div className={menuSelection == 2 ? "line line-activ" : "line"}></div>
            </span>
        </div>


            <div className="schedule">
                <div className="schedule-time">
                    <p>Время</p> 
                    <Dropdown/>
                </div>
        <div className={menuSelection == 2 ? "wrapper-menu wrapper-menu-active" :"wrapper-menu"}>
                <div className="schedule-block">

                </div>
                <div className="OrderGlass">

                </div>
            </div>
        </div>
        
    </div>
  )
}

export default ScheduleWrapper