import React from "react";
import Header from "../../components/header/Header";
import WelcomeCard from "../../components/login/WelcomeCard";
import Inputs from "../../components/inputs/Inputs";
import Input from "../../components/inputs/_Input";
import Button from "../../components/button/Button";
import { ReactComponent as LoginCross } from "../../assets/icons/login-cross.svg";
import { ReactComponent as LoginEye } from "../../assets/icons/login-close-eye.svg";
import "./Login.css";

const Login = () => {
  return (
    <div className="login">
      <Header />
      <div className="auth-wrapper">
        <div className="auth">
          <WelcomeCard text={"Добро пожаловать!"} />

          <Inputs>
            <Input placeholder="E-mail / номер телефона" icon={<LoginCross/>} />
            <Input placeholder="Пароль" icon={<LoginEye/>} />
          </Inputs>

          <div className="action">
            <Button text="Войти" />
            <p>Забыли пароль?</p>
          </div>

          <p>Еще нет аккаунта? <span>Зарегистрируйтесь</span></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
