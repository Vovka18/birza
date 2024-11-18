import React, { useEffect, useState } from "react";
import "./Profile.css";
import SearchInput from "../searchInput/SearchInput";
import { ReactComponent as CopyBold } from "../../../assets/icons/copyBold.svg";
import { ReactComponent as Arrow } from "../../../assets/icons/header-arrow-toggle-menu.svg";

const Profile = ({closeFun, stateProfile}) => {

    const [ tradeMenu, setTradeMenu ] = useState(false)
    const [ activeMenu, aetActiveMenu ] = useState(false)

    const statusVerified = true

  const copyText = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Текст скопирован: " + text);
      })
      .catch((err) => {
        console.error("Не удалось скопировать текст: ", err);
      });
  };

  useEffect(()=>{
    console.log(tradeMenu);
    
  },[tradeMenu])

  return (
    <div className={stateProfile ? "Profile ProfileActive" : "Profile"} >
      <SearchInput closeFun={closeFun} />

      <div className="userData">
        <h1>nik***@gm**.com</h1>
        <div className="userId" onClick={() => copyText("457284")}>
          <p>ID: 457284</p>
          <CopyBold />
        </div>
      </div>

      <div className="cryptoMarket">
        <ul>
            <li>Спот<div className="liData">Мейкер / Тейкер: <span>0.1% / 0.1%</span></div></li>
            <li>Фьючерсы<div className="liData">Мейкер / Тейкер: <span>0.02% / 0.06%</span></div></li>
        </ul>
      </div>

    <div className="account">
        <div className="sidebarMenu">

            <div className="toggleMenu">
                <div className="headlineMenu" onClick={()=>setTradeMenu(!tradeMenu)}>
                    <h2>Торговля</h2>
                    <Arrow/>
                </div>
                <ul className={tradeMenu == true ? "ulMenu ulActive1" : "ulMenu"}>
                    <li>Спотовая торговля</li>
                    <li>Фьючерсная торговля</li>
                    <li>Инвестиционные портфели</li>
                </ul>
            </div>

            <div className="toggleMenu">
                <div className="headlineMenu" onClick={()=>aetActiveMenu(!activeMenu)}>
                    <h2>Мои активы</h2>
                    <Arrow/>
                </div>
                <ul className={activeMenu == true ? "ulMenu ulActive2" : "ulMenu"}>
                    <li>Обзор</li>
                    <li>Купить криптовалюту</li>
                    <li>Вывести средства</li>
                    <li>Конвертация</li>
                    <li>Перевод</li>

                </ul>
            </div>


            <div className="verefication">
                <h2>Верификация личности</h2>
                <div className={statusVerified ? "verifiedStatus verifiedTrue" : "verifiedStatus verifiedFalse"}>
                    <h2>
                    {statusVerified ? "Успешно" : "Не верефицирован"}
                    </h2>
                </div>
            </div>

            <h2 className="TransactionHistory">История транзакций</h2>
        </div>

    </div>
    <div className="logOut"><p>Выйти из аккаунта</p></div>

            

    </div>
  );
};

export default Profile;
