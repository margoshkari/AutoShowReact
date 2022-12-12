import "../css/Home.css";
import person from "../source/person-outline.svg";
import { Link } from "react-router-dom";

function HomeApp() {
  return (
    <div className="home-page">
      <div className="nav-panel">
        <div className="nav-panf">
          <h4>Автомобілі з пробігом</h4>
            <Link id="account-btn" to="/login">
                <div id="person-img-acc">
                    <img src={person} alt="not found"></img>
                    Увійти
                </div>
              </Link>
        </div>
        <div className="line"></div>
        <div className="nav-pan-sec">
            <div className="nav-menu">
                <span>Продати</span>
                <span>Купити</span>
                <span>Послуги</span>
                <span>Про Компанію</span>
                <span>Контакти</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default HomeApp;
