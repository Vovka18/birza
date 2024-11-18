import React from 'react'
import { ReactComponent as Close } from '../../../assets/icons/header-close-block.svg'
import Button from "../../button/Button"
import "./Notification.css"
import NotificationList from './NotificationList'

const Notification = ({closeFun, stateProfile}) => {
    const list = [
        {
            headline: "Уведомление о входе в систему",
            type: "auth",
            time: "15:12",
            message: "Вы зашли в свой аккаунт с Android Chrome 10.0",
            date: "2024-11-18"
            
        },
        {
            headline: "Уведомление о входе в систему",
            type: "auth",
            time: "15:12",
            message: "Вы зашли в свой аккаунт с Android Chrome 10.0",
            date: "2024-11-17"
            
        },
        {
            headline: "Уведомление о входе в систему",
            type: "auth",
            time: "15:12",
            message: "Вы зашли в свой аккаунт с Android Chrome 10.0",
            date: "2024-11-17"
            
        },
        {
            headline: "Уведомление о входе в систему",
            type: "auth",
            time: "15:12",
            message: "Вы зашли в свой аккаунт с Android Chrome 10.0",
            date: "2024-11-17"
            
        },
        
        {
            headline: "Уведомление о входе в систему",
            type: "auth",
            time: "15:12",
            message: "Вы зашли в свой аккаунт с Android Chrome 10.0",
            date: "2024-11-15"
            
        },
    ]
  return (
    <div className={stateProfile ? 'Notification NotificationActive' : 'Notification'}>
        <div className="headline">
            <h2>Уведомления</h2>
            <Close onClick={()=>closeFun(false)}/>
        </div>
        <div className="NotificationBlock">
            <NotificationList list={list}/>
        </div>
            <div className="buttons">
                <p>Удалить все</p>
                <Button text={"Все прочитано"}/>
            </div>
    </div>
  )
}

export default Notification