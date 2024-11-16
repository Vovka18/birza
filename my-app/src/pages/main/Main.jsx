import React, { useState, useEffect } from 'react'
import Header from '../../components/header/Header'
import ScheduleWrapper from './ScheduleWrapper'
import ExchangeRate from './exchangeRate'
import Orders from './orders/Orders'
import BuyOrder from './orders/BuyOrder'
import Market from './market/Market'
import { ReactComponent as BuyApprovedIco } from '../../assets/icons/buy-message-approved.svg'
import { ReactComponent as BuyErrorIco } from '../../assets/icons/buy-message-error.svg'
import './Main.css'

const Main = () => {
  const [ buyOrderstate, setBuyOrderState ] = useState(false)
  const [ marketState, setMarketState ] = useState(false)
  const [ message, setMessage ] = useState({msg: "Ордер успешно размещён", status: "error"}) //status "error"/"approved"

  return (
      <div className='main'>

        <div className={"opening-wrapper"} style={buyOrderstate ? {visibility: "visible"} : {visibility: "hidden"}}>
            <div className={message.status === "approved" ? "message message-approved" : "message message-error"}>
              {message.status === "approved" ? <BuyApprovedIco/> : <BuyErrorIco/>}
              <p>{message.msg}</p>
            </div>
            <BuyOrder stateActive={buyOrderstate} setStateActive={setBuyOrderState}/>
        </div>

        <div className="opening-market" style={marketState ? {visibility: "visible"} : {visibility: "hidden"}}>
            <Market stateActive={marketState} setStateActive={setMarketState}/>
        </div>

        <div className="main-wrapper">
            <Header deposit={true} hasMenu={true} />
            <ExchangeRate marketState={setMarketState}/>
            <ScheduleWrapper/>

            <Orders  setStateBuyOrder={setBuyOrderState}/>
        </div>
    </div>
  )
}

export default Main