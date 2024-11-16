import React, { useEffect } from 'react'
import { ReactComponent as ArrowBottom } from "../../assets/icons/main-arrow-bottom.svg"
import './ExchangeRate.css'

const ExchangeRate = ({marketState}) => {

  return (
    <div className="exchangeRate">
        <ul>
            <li className='BTC-USDT'><h3>BTC/USDT</h3> <ArrowBottom  onClick={()=>marketState(true)}/></li>
            <li><h2>68 386</h2></li>
            <li><h5>+0,78 %</h5></li>
        </ul>
        <ul>
            <li><p>Объем за 24 ч (USDT)</p><h4>125,28M</h4></li>
            <li><p>Минимум за 24Ч</p><h4>67 474,7</h4></li>
        </ul>
        <ul>
            <li><p>Сумма за 24 ч (BTC)</p><h4>1,82K</h4></li>
            <li><p>Максимум за 24Ч</p><h4>69 494,9</h4></li>
        </ul>
    </div>
  )
}

export default ExchangeRate