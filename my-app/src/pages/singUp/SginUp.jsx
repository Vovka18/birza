import React from 'react'
import Header from '../../components/header/Header'
import Inputs from '../../components/inputs/Inputs';
import Input from '../../components/inputs/_Input';
import Button from '../../components/button/Button';
import WelcomeCard from '../../components/login/WelcomeCard';
import { ReactComponent as LoginCross } from "../../assets/icons/login-cross.svg";
import { ReactComponent as LoginEye } from "../../assets/icons/login-close-eye.svg";
import './SginUp.css'

const SginUp = () => {
  return (
    <div className='SginUp'>
        <Header/>
        <div className="reg-wrapper">
            <div className="reg">
                <WelcomeCard text={"Добро пожаловать!"} />

                <Inputs>
                    <Input placeholder="E-mail / номер телефона" icon={<LoginCross/>} />
                    <Input placeholder="Пароль" icon={<LoginEye/>} />
                    <Input placeholder="Подтвердите пароль" icon={<LoginEye/>} />
                </Inputs>

                <div className="action">
                    <Button text="Зарегистрироваться" />
                    <p>Есть аккаунт? <span>Войти</span></p>
                </div>

            </div>
        </div>
    </div>
  )
}

export default SginUp