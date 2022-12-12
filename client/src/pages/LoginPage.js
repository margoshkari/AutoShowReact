import '../css/Log.css'
import person from "../source/person-outline.svg"
import close from "../source/close-outline.svg"
import { Link } from "react-router-dom";

function LoginApp(){
    
    return (
        <div className="page">
            <div className="form">
                <Link id="close-img" to="/">
                    <img src={close} alt="not found"></img>
                </Link>
                <img id="person-img" src={person} alt="not found"></img>
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
        </div>
    )
}

export default LoginApp;