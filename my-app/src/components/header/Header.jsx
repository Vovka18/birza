import React, { useEffect, useState } from 'react'
import {ReactComponent as Logo} from '../../assets/icons/Logo.svg'
import {ReactComponent as Download} from '../../assets/icons/Download.svg'
import {ReactComponent as Profile} from '../../assets/icons/profile.svg'
import {ReactComponent as Info} from '../../assets/icons/info.svg'
import {ReactComponent as BurgerMenu} from '../../assets/icons/burger-menu.svg'
import ProfileBlock from './profile/Profile'
import Notification from './notification/Notification'
import BurgerMenuBlock from './burgerMenu/BurgerMenu'
import "./Header.css"

const Header = ({deposit=false, hasMenu=false, hasMenu2=false}) => {
    
    
    const [ blocksActive, setBlocksActive ] = useState(false)
    const [ profileBlcokVisible, setProfileBlcokVisible ] = useState(false)
    const [ notificationVisible, setNotificationVisible ] = useState(false)
    const [ burderMenuVisible, setBurderMenuVisible ] = useState(false)

    useEffect(()=>{
        console.log(profileBlcokVisible);
        
    },[profileBlcokVisible])

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
                <div className="button-menu profile" onClick={()=> setProfileBlcokVisible(true)}><Profile/></div>
                <div className="button-menu info" onClick={()=> setNotificationVisible(true)}><Info/></div>
                <div className="button-menu burger-menu"><BurgerMenu  onClick={()=> setBurderMenuVisible(true)}/></div>
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
        <div className="blocks" style={{visibility: profileBlcokVisible || notificationVisible || burderMenuVisible  ? "visible" : "hidden"}}>
            <ProfileBlock closeFun={setProfileBlcokVisible} stateProfile={profileBlcokVisible}/>
            <Notification closeFun={setNotificationVisible} stateProfile={notificationVisible}/>
            <BurgerMenuBlock closeFun={setBurderMenuVisible} stateProfile={burderMenuVisible}/>
        </div>            
    </div>
  )
}

export default Header