import React from 'react'
import Header from '../../components/header/Header'
import Inputs from '../../components/inputs/Inputs';
import Input from '../../components/inputs/_Input';
import Button from '../../components/button/Button';
import WelcomeCard from '../../components/login/WelcomeCard';
import { ReactComponent as LoginEye } from "../../assets/icons/login-close-eye.svg";
import { ReactComponent as SendCode } from "../../assets/icons/SendCode.svg";
import'./PassRecover.css'

const PassRecover = () => {
  return (
    <div className='PassRecover'>
        <Header/>
        <div className="recover-wrapper">
            <div className="recover">
                <WelcomeCard text={"Восстановление пароля"} />

                <Inputs>
                    <Input placeholder="E-mail / номер телефона" icon={<SendCode/>} btn={true}/>
                    <Input placeholder="Код из письма" />
                    <Input placeholder="Новый пароль" icon={<LoginEye/>} />
                    <Input placeholder="Подтверждение пароля" icon={<LoginEye/>} />
                </Inputs>

                <div className="action">
                    <Button text="Зарегистрироваться" />
                    <p>Вспомнили пароль? <span>Войти</span></p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default PassRecover