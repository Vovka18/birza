import React from 'react'
import SearchInput from '../searchInput/SearchInput'
import "./BurgerMenu.css"

const BurgerMenu = ({closeFun, stateProfile}) => {
  return (
    <div className={stateProfile ? 'BurgerMenu BurgerMenuActive' : 'BurgerMenu'}>
        <SearchInput closeFun={closeFun}/>
        <ul className='settings'>
            <li><h2>Уведомления</h2> <p>Включены</p></li>
            <li><h2>Язык</h2> <p>Русский</p></li>
            <li><h2>Валюта</h2> <p>USD</p></li>
        </ul>
        <ul>
            <li><h2>Политика конфиденциальности</h2></li>
            <li><h2>О команде MARKETFX</h2></li>
        </ul>
        <ul>
            <li><h2>Служба поддержки</h2></li>
        </ul>
    </div>
  )
}

export default BurgerMenu