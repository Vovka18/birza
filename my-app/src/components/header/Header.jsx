import React from 'react'
import {ReactComponent as Logo} from '../../assets/icons/Logo.svg'
import {ReactComponent as Download} from '../../assets/icons/Download.svg'
import {ReactComponent as Profile} from '../../assets/icons/profile.svg'
import {ReactComponent as Info} from '../../assets/icons/info.svg'
import {ReactComponent as BurgerMenu} from '../../assets/icons/burger-menu.svg'
import "./Header.css"

const Header = ({deposit=false, hasMenu=false, hasMenu2=false}) => {
  return (
    <div className='header'>
        <Logo/>
        {
            deposit === true 
            ?
            <button><Download/> <h2>Депозит</h2></button>
            :
            <></>
        }
        {
            hasMenu === true 
            ?
            <div className='menu'>
                <div className="button-menu profile"><Profile/></div>
                <div className="button-menu info"><Info/></div>
                <div className="button-menu burger-menu"><BurgerMenu/></div>
            </div>
            :
            <></>
        }
        {
            hasMenu2 === true 
            ?
            <div className='menu menu2'>
                <div className="button-menu profile"><Profile/></div>
                <div className="line"></div>
                <div className="button-menu info"><Info/></div>
                <div className="button-menu burger-menu"><BurgerMenu/></div>
            </div>
            :
            <></>
        }
    </div>
  )
}

export default Header