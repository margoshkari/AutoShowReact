import '../css/Log.css'
import logo from "../source/person-outline.svg"

function LoginApp(){
    return (
        <div className="log-page">
            <img id="person-img" src={logo}></img>
            <h1>Вхід в особистий кабінет</h1>
            <span id="info">Для входу в кабінет введіть ел. пошту або телефон<br/>
            та отримайте код авторизації.</span>
            <div className="fields">
                <label>Телефон або ел. пошта</label>
                <input type="text"></input>
            </div>
            <button id="login-btn">УВІЙТИ</button>
            <button id="reg-btn">ЗАРЕЄСТРУВАТИСЯ</button>
        </div>
    )
}

export default LoginApp;