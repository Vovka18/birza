import React, { useEffect, useState } from 'react';
import { ReactComponent as Arrowtop } from '../../assets/icons/BuyInput-arrow-top.svg'
import { ReactComponent as ArrowBottom } from '../../assets/icons/BuyInput-arrow-bottom.svg'
import './Inputs.css'

const BuyInput = ({placeholder="", textData="", setInputChange}) => {
    
    const [inputValue, setInputValue] = useState(0);

    useEffect(()=>{
        setInputChange(inputValue)
    },[inputValue])

  return (
    <div className='BuyInput'>
        <input placeholder={placeholder}  type="number" min="0" onChange={(e)=>setInputValue(e.target.value)} value={inputValue == 0 ? "" : inputValue}/>
        <div className="inputData">
            {textData}
            <div className="arrows">
                <Arrowtop className="arrow up" onClick={()=>setInputValue((prev)=>Number(prev)+1)}/>
                <ArrowBottom className="arrow down" onClick={()=>setInputValue((prev)=>Number(prev)-1)}/>
            </div>
        </div>
    </div>
  )
}

export default BuyInput