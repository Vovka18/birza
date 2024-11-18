import React from "react";
import { ReactComponent as Close } from "../../../assets/icons/CloseList.svg";
import { ReactComponent as UserBox } from "../../../assets/icons/user-box.svg";
import { ReactComponent as Speaker } from "../../../assets/icons/NotificationSpeaker.svg";
import "./NotificationList.css"; // Стили, как на вашем макете

// Функция для определения группировки по дате
const groupByDate = (list) => {
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  return list.reduce((acc, item) => {
    const itemDate = item.date;

    let dateGroup = "";
    console.log(itemDate, " === ", yesterday);
    
    if (itemDate === today) dateGroup = "Сегодня";
    else if (itemDate === yesterday) dateGroup = "Вчера";
    else dateGroup = itemDate;

    if (!acc[dateGroup]) acc[dateGroup] = [];
    acc[dateGroup].push(item);
    return acc;
  }, {});
};

const NotificationList = ({ list }) => {
  const groupedNotifications = groupByDate(list);

    return Object.keys(groupedNotifications).map((date) => (
        <div className="notifiBlock" key={date}>
        <h3 className="date">{date}</h3>
        {groupedNotifications[date].map((item, idx) => (
            <ul>
                <li key={idx}>
                    <span>
                        {item.type === "auth" ? <UserBox /> : <Speaker />}
                        <h3 className="headline">{item.headline}</h3>
                    </span>
                    <Close />
                </li>
                <li className="time">{item.time}</li>
                <li className="message">{item.message}</li>
            </ul>
        ))}
        </div>
    ));

};

export default NotificationList;
