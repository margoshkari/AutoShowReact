import "../css/Nav.css";
import person from "../source/person-outline.svg";
import { Link } from "react-router-dom";
import React from "react";
import { createBrowserHistory } from "history";

function NavPanelApp() {
  const history = createBrowserHistory({ forceRefresh: true });
  const [navigate, SetNavigate] = React.useState("/login");
  const dataFetchedRef = React.useRef(false);
  React.useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        if (data.isLogin) {
          SetNavigate("/");
          document.getElementById("account-btn").onclick = () => {
            LogOut();
          };
          document.getElementById("text-btn-acc").innerText = "Вийти";
          console.log(data);
        } else {
          SetNavigate("/login");
          document.getElementById("account-btn").onclick = () => {
            history.push("/login");
            history.go();
          };
          document.getElementById("text-btn-acc").innerText = "Увійти";
        }
      });
  }, []);
  function LogOut() {
    fetch("/api/logout")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    history.push("/");
    history.go();
  }
  return (
    <div className="nav-panel">
      <div className="nav-panf">
        <h4>Автомобілі з пробігом</h4>
        <Link id="account-btn" to={navigate}>
          <div id="person-img-acc">
            <img src={person} alt="not found" draggable="false"></img>
            <span id="text-btn-acc"></span>
          </div>
        </Link>
      </div>
      <div className="line"></div>
      <div className="nav-pan-sec">
        <ul className="nav-menu">
          <li className="sell">
            Продати
            <ul className="sell-list">
              <Link id="account-btn" to="/sell">
                <li className="sell-list-item">Комісійний продаж</li>
              </Link>
              <li className="sell-list-item">Викуп автомобіля</li>
              <li className="sell-list-item">
                Оцінка вартості <span style={{ color: "red" }}> online</span>
              </li>
              <li className="sell-list-item">Обмін автомобіля</li>
            </ul>
          </li>
          <li>Купити</li>
          <li className="service">
            Послуги
            <ul className="service-list">
              <li className="service-list-item">Кредитування</li>
              <li className="service-list-item">Страхування</li>
              <li className="service-list-item">Автозапчастини</li>
            </ul>
          </li>
          <li className="about">
            Про Компанію
            <ul className="about-list">
              <li className="about-list-item">«ВІДІ Автомобілі з пробігом»</li>
              <li className="about-list-item">Персонал</li>
              <li className="about-list-item">Політика з якості</li>
              <li className="about-list-item">Новини</li>
              <li className="about-list-item">Вакансії</li>
            </ul>
          </li>
          <li>Контакти</li>
        </ul>
      </div>
    </div>
  );
}

export default NavPanelApp;
