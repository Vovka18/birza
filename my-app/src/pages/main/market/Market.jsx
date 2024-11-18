import React from 'react'
import { ReactComponent as MarketClose } from '../../../assets/icons/marketClose.svg'
import { ReactComponent as MarketSearch } from '../../../assets/icons/MarketSearch.svg'
import { ReactComponent as Follow } from '../../../assets/icons/marketFollowActive.svg'
import { ReactComponent as FollowActive } from '../../../assets/icons/marketFollow.svg'
import './Market.css'

const Market = ({stateActive, setStateActive}) => {

    const marketList = [
        {
            isFollow: false,
            currency: "BTC",
            lastPrice: "74938,51",
            precent: "+1,38%"
        },
        {
            isFollow: true,
            currency: "BTC",
            lastPrice: "74938,51",
            precent: "+1,38%"
        },
        {
            isFollow: false,
            currency: "BTC",
            lastPrice: "74938,51",
            precent: "+1,38%"
        },
        {
            isFollow: false,
            currency: "BTC",
            lastPrice: "74938,51",
            precent: "+1,38%"
        },
        {
            isFollow: false,
            currency: "BTC",
            lastPrice: "74938,51",
            precent: "+1,38%"
        },
        {
            isFollow: false,
            currency: "BTC",
            lastPrice: "74938,51",
            precent: "+1,38%"
        },
        {
            isFollow: false,
            currency: "BTC",
            lastPrice: "74938,51",
            precent: "+1,38%"
        },
        {
            isFollow: false,
            currency: "BTC",
            lastPrice: "74938,51",
            precent: "+1,38%"
        },
        {
            isFollow: false,
            currency: "BTC",
            lastPrice: "74938,51",
            precent: "+1,38%"
        },
    ]

  return (
    <div className={stateActive == true ? 'Market MarketActive' : 'Market'}>
        <div className="headline">
            <h3>Рынки</h3>
            <MarketClose onClick={()=>setStateActive(false)}/>
        </div>
        <div className="searchCoin">
            <div className="searchIco">
                <MarketSearch/>
            </div>
            <input type="text" placeholder='Поиск монет' />
        </div>

        <div className="menu">
            <p>Избранные</p>
            <p className='active'>Спот</p>
            <p>Фьючерсы</p>
            <p>Акции</p>
        </div>

        <div className="sampleBlock">
            <div className="spot">
                <ul>
                    <li>Пара</li>
                    <li>Последняя цена</li>
                    <li>Последняя цена</li>
                </ul>

                <div className="list">
                    <ul>
                        {marketList.map((spotData)=>
                            <li>
                                <div className="currency">
                                    {spotData.isFollow ?  <Follow/> : <FollowActive/>}
                                    <h4>{spotData.currency}<span>/USDT</span></h4>
                                </div>
                                <p className='lastPrice'>{spotData.lastPrice}</p>
                                <p className='precent'>{spotData.precent}</p>
                            </li>
                        )}
                        

                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Market