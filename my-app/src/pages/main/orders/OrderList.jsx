import React, { useEffect, useState } from 'react'
import { ReactComponent as CloseIco} from "../../../assets/icons/orderList-close.svg"
import { ReactComponent as PenIco} from "../../../assets/icons/orderList-pen.svg"
import './OrderList.css'

const OrderList = ({id, orderData}) => {
    
    const [ orderActive, setOrderActive ] = useState(false)
        

    return orderActive === false ? 
            <li className='OrderList' key={id} onClick={()=>setOrderActive(true)}>
                <ul className='text'>
                    <li>
                        <div className={orderData.color == true ? "line line-green" : "line line-red" }></div>
                        Лимитный ордер
                    </li>
                    <li>
                        <div className="wrapper"></div>
                        Количество
                    </li>
                    <li>
                        <div className="wrapper"></div>
                        Цена
                    </li>
                </ul>
                <ul className='data'>
                    <li>{orderData.limitOrders}</li>
                    <li>{orderData.count} <span>{orderData.count2}</span></li>
                    <li>{orderData.price}</li>
                </ul>
                <ul className='input'>
                    <li>{orderData.date}</li>
                    <button>Отменить</button>
                </ul>
            </li>
            
            :

            <li className='OrderListActive'>
                <div className="BTCUSDTdata">
                    <div className="currency">
                        <div className={orderData.color == true ? "line line-green" : "line line-red" }></div>
                        <h2>BTCUSDT</h2>
                        <div className="progression">
                            5x
                        </div>
                    </div>
                    <div className="text">
                        TP / SL    -- / -
                        <PenIco/>
                    </div>
                    <CloseIco onClick={()=>setOrderActive(false)}/>
                </div>
                <div className="otherData">
                    <ul>
                        <li><p>Размер (USDT)</p> <h3>250</h3></li>
                        <li><p>Цена входа</p> <h3>65,835</h3></li>
                    </ul>
                    <ul>
                        <li><p>PnL (ROE)</p> <h3 className='pnl'>+32.78 USDT (+1.48%)</h3></li>
                        <li><p>Текущая цена</p> <h3>65,901</h3></li>
                    </ul>
                    <ul>
                        <li><p>Маржа</p> <h3>100 USDT</h3></li>
                        <li><p>Цена ликвидации</p> <h3>65,043</h3></li>
                    </ul>
                </div>
            </li>
}

export default OrderList