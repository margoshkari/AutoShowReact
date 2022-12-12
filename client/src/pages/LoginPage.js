import '../css/Log.css'
import logo from "../source/person-outline.svg"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createBrowserHistory } from "history";

function LoginApp(){
    
    return (
        <div className="page">
            <img id="person-img" src={logo}></img>
            <h1>Вхід в особистий кабінет</h1>
            <span id="info">Для входу в кабінет введіть ел. пошту або телефон<br/>
            та отримайте код авторизації.</span>
            <div className="fields">
                <label>Телефон або ел. пошта</label>
                <input type="text"></input>
            </div>
            
                <Link class="link" to="/">
                    <button id="login-btn">УВІЙТИ</button>
                </Link>
                <Link class="link" to="/register">
                    <button id="reg-btn">ЗАРЕЄСТРУВАТИСЯ</button>
                </Link>
            
        </div>
    )
}

export default LoginApp;