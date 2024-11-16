import React from 'react'
import './WelcomeCard.css'
import {ReactComponent as Logo} from '../../assets/icons/Logo.svg'

const WelcomeCard = ({text}) => {
  return (
    <div className='WelcomeCard'>
        <h3>{text}</h3>
        <Logo/>
    </div>
  )
}

export default WelcomeCard