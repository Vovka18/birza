import React, { useEffect, useState } from 'react'
import { ReactComponent as BuyClose } from '../../../assets/icons/buy-close.svg'
import { ReactComponent as BuyPlus } from '../../../assets/icons/buy-order-plus.svg'
import Inputs from '../../../components/inputs/Inputs'
import BuyInput from '../../../components/inputs/BuyInput'
import Button from '../../../components/button/Button'
import './BuyOrder.css'

const BuyOrder = ({stateActive, setStateActive}) => {
    // const [ activeBlock, setActivBlock ] = useState(false)
    const [ menuSelection, setMenuSelection ] = useState(1);
    const [ buySell, setBuySell ] = useState(1);
    const [ limitMarket, setLimitMarket ] = useState(1)
    const [ countUSDT, setCountUSDT ] = useState(0)

    const [ price, setPrice ] = useState("")
    const [ count, setCount ] = useState("")
    const [ precent, setPrecent ] = useState("")
    const [ volume, setVolume ] = useState("")


    return (
        <div className={stateActive == true ? "BuyOrder BuyOrderActive" : "BuyOrder"}>
        <div className="headline">
            <h3>Разместить ордер</h3>
            <BuyClose onClick={()=>setStateActive(false)}/>
        </div>
        <div className="buy-menu">
            <span onClick={()=>setMenuSelection(1)}>
                <h4 className={menuSelection === 1 ? "span-active" : ""}>Спот</h4>
                <div className={menuSelection === 1 ? "line line-activ" : "line"}></div>
            </span>
            <span onClick={()=>setMenuSelection(2)}>
                <h4 className={menuSelection === 2 ? "span-active" : ""}>Фьючерсы</h4>
                <div className={menuSelection === 2 ? "line line-activ" : "line"}></div>
            </span>
        </div>

        <div className={menuSelection === 2 ? "orderWrapper orderWrapperFutures" : "orderWrapper"}>

            <div className="Spot">
                <div className="slideButtons-wrapper">
                    <div className="slideButtons">
                        <p className={buySell=== 1 ? "active" : ""} onClick={()=>setBuySell(1)}>Купить</p>
                        <p className={buySell=== 2 ? "active" : ""} onClick={()=>setBuySell(2)}>Продать</p>
                        <div className={buySell=== 2 ? "dynamicSldier activeSldier" : "dynamicSldier"}></div>
                    </div>
                </div>

                <div className="limitMarket">
                    <p className={limitMarket == 1 ? "active" : ""} onClick={()=>setLimitMarket(1)}>Рыночный</p>
                    <p className={limitMarket == 2 ? "active" : ""} onClick={()=>setLimitMarket(2)}>Лимитный</p>
                </div>

                <div className="available">
                    <h4>Доступно</h4>
                    <div className="usdt">{countUSDT} USDT <BuyPlus/></div>
                </div>

                <Inputs>
                    <BuyInput placeholder='Цена' textData='USDT' valueInput={price} setInputChange={setPrice}/>
                    <BuyInput placeholder='Количество' textData='BTC' valueInput={count} setInputChange={setCount}/>
                    <div className="buttons">
                        <div className={precent == "25" ? "countPercent precentActive" : "countPercent"} onClick={()=>setPrecent("25")}>25%</div>
                        <div className={precent == "50" ? "countPercent precentActive" : "countPercent"} onClick={()=>setPrecent("50")}>50%</div>
                        <div className={precent == "75" ? "countPercent precentActive" : "countPercent"} onClick={()=>setPrecent("75")}>75%</div>
                        <div className={precent == "100" ? "countPercent precentActive" : "countPercent"} onClick={()=>setPrecent("100")}>100%</div>
                    </div>
                    <BuyInput placeholder='Объём' textData='USDT' valueInput={volume} setInputChange={setVolume}/>
                </Inputs>

                <Button text={"Купить BTC"}/>
            </div>  
        
            <div className="Futures">
                <div className="slideButtons-wrapper">
                        <div className="slideButtons">
                            <p className={buySell=== 1 ? "active" : ""} onClick={()=>setBuySell(1)}>Лонг</p>
                            <p className={buySell=== 2 ? "active" : ""} onClick={()=>setBuySell(2)}>Шорт</p>
                            <div className={buySell=== 2 ? "dynamicSldier activeSldier" : "dynamicSldier"}></div>
                        </div>
                    </div>

                    <div className="limitMarket">
                        <p className={limitMarket == 1 ? "active" : ""} onClick={()=>setLimitMarket(1)}>Рыночный</p>
                        <p className={limitMarket == 2 ? "active" : ""} onClick={()=>setLimitMarket(2)}>Лимитный</p>
                    </div>

                    <div className="available">
                        <h4>Доступно</h4>
                        <div className="usdt">{countUSDT} USDT <BuyPlus/></div>
                    </div>

                    <Inputs>
                        <BuyInput placeholder='Цена входа' textData='USDT' valueInput={price} setInputChange={setPrice}/>
                        <BuyInput placeholder='Размер' textData='BTC' valueInput={count} setInputChange={setCount}/>
                        <div className="buttons">
                            <div className={precent == "3" ? "countPercent precentActive" : "countPercent"} onClick={()=>setPrecent("3")}>3x</div>
                            <div className={precent == "5" ? "countPercent precentActive" : "countPercent"} onClick={()=>setPrecent("5")}>5x</div>
                            <div className={precent == "10" ? "countPercent precentActive" : "countPercent"} onClick={()=>setPrecent("10")}>10x</div>
                            <div className={precent == "20" ? "countPercent precentActive" : "countPercent"} onClick={()=>setPrecent("20")}>20x</div>
                        </div>
                        <BuyInput placeholder='Маржа' textData='USDT' valueInput={volume} setInputChange={setVolume}/>
                    </Inputs>
                    <Inputs className="futuresInputs">
                        <BuyInput placeholder='Тейк-профит' textData='USDT' valueInput={price} setInputChange={setPrice}/>
                        <BuyInput placeholder='Стоп-лосс' textData='BTC' valueInput={count} setInputChange={setCount}/>

                    </Inputs>

                    <Button text={"Подтвердить ордер"}/>
                </div>
            </div>
    </div>
  )
}

export default BuyOrder