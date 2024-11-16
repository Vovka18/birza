import React from 'react'
import './Orders.css'
import Button from '../../../components/button/Button'
import OrderList from './OrderList'

const Orders = ({setStateBuyOrder}) => {

    const orders = [
        {
            limitOrders: "BTC / USDT",
            count: "0.023 ",
            count2: "/ 0.03",
            price: "65,713",
            date: "11-11-24 13:31",
            color: true, //green
            data:{
                currency:"BTCUSDT",
                progression: 5,
                text: "TP / SL    -- / -",
                size: 250,
                pnl: "+32.78 USDT (+1.48%)",
                marza: "100 USDT",
                priceLogIn: "65,835",
                currentPrice: "65,901",
                liquidationPrice: "65,043" 
            }
        },
        {
            limitOrders: "BTC / USDT",
            count: "0.023 ",
            count2: "/ 0.03",
            price: "65,713",
            date: "11-11-24 13:31",
            color: false, //red
            data:{
                currency:"BTCUSDT",
                progression: 5,
                text: "TP / SL    -- / -",
                size: 250,
                pnl: "+32.78 USDT (+1.48%)",
                marza: "100 USDT",
                priceLogIn: "65,835",
                currentPrice: "65,901",
                liquidationPrice: "65,043" 
            }
        },
        {
            limitOrders: "BTC / USDT",
            count: "0.023 ",
            count2: "/ 0.03",
            price: "65,713",
            date: "11-11-24 13:31",
            color: true, //green
            data:{
                currency:"BTCUSDT",
                progression: 5,
                text: "TP / SL    -- / -",
                size: 250,
                pnl: "+32.78 USDT (+1.48%)",
                marza: "100 USDT",
                priceLogIn: "65,835",
                currentPrice: "65,901",
                liquidationPrice: "65,043" 
            }
        },
        {
            limitOrders: "BTC / USDT",
            count: "0.023 ",
            count2: "/ 0.03",
            price: "65,713",
            date: "11-11-24 13:31",
            color: true, //green
            data:{
                currency:"BTCUSDT",
                progression: 5,
                text: "TP / SL    -- / -",
                size: 250,
                pnl: "+32.78 USDT (+1.48%)",
                marza: "100 USDT",
                priceLogIn: "65,835",
                currentPrice: "65,901",
                liquidationPrice: "65,043" 
            }
        }
    ]

  return (
    <div className='Orders'>

        <div className="orders-menu">
            <span>
                <p className='p-activ'>Открытые ордера (2)</p>
                <div className="line line-active"></div>
            </span>
            <span>
                <p>История ордеров</p>
                <div className="line"></div>
            </span>
            <span>
                <p>История сделок</p>
                <div className="line"></div>
            </span>
        </div>

        <div className={orders.length > 0 ? "order-list" : "order-list null-order-list"}>
            {orders.length > 0 ? 
                <ul>
                    {orders.map((data, id)=><OrderList key={id} id={id} orderData={data} />)}
                </ul>
            :
                <span className='nullLists'>Здесь будут отображаться<br/>Ваши открытые ордера</span>
                
            }
        </div>

        <div className="buttons">
            <Button text={"Купить"}  onClick={()=>setStateBuyOrder(true)}/>
            <Button text={"Продать"}/>
        </div>
    </div>
  )
}

export default Orders