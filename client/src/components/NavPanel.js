import "../css/Nav.css";
import person from "../source/person-outline.svg";
import { Link } from "react-router-dom";

function NavPanelApp() {
  return (
      <div className="nav-panel">
        <div className="nav-panf">
          <h4>Автомобілі з пробігом</h4>
            <Link id="account-btn" to="/login">
                <div id="person-img-acc">
                    <img src={person} alt="not found" draggable="false"></img>
                    Увійти
                </div>
              </Link>
        </div>
        <div className="line"></div>
        <div className="nav-pan-sec">
            <ul className="nav-menu">
                <li className="sell">Продати
                  <ul className="sell-list">
                      <li className="sell-list-item">Комісійний продаж</li>
                      <li className="sell-list-item">Викуп автомобіля</li>
                      <li className="sell-list-item">Оцінка вартості <span style={{color: "red"}}> online</span></li>
                      <li className="sell-list-item">Обмін автомобіля</li>
                    </ul>
                </li>
                <li>Купити</li>
                <li className="service">Послуги
                <ul className="service-list">
                      <li className="service-list-item">Кредитування</li>
                      <li className="service-list-item">Страхування</li>
                      <li className="service-list-item">Автозапчастини</li>
                    </ul>
                </li>
                <li className="about">Про Компанію
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
