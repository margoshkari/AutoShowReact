import "../css/Log.css";
import person from "../source/person-outline.svg";
import close from "../source/close-outline.svg";
import { Link } from "react-router-dom";

function LoginApp() {
  function LogIn() {
    let userlog = document.getElementById("userlog").value;
    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userlog: userlog,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }
  return (
    <div className="page">
      <div className="form">
        <Link id="close-img" to="/" draggable="false">
          <img src={close} alt="not found" draggable="false"></img>
        </Link>
        <img
          id="person-img"
          src={person}
          alt="not found"
          draggable="false"
        ></img>
        <h1>Вхід в особистий кабінет</h1>
        <span id="info">
          Для входу в кабінет введіть ел. пошту або телефон
          <br />
          та отримайте код авторизації.
        </span>
        <div className="fields">
          <label>Телефон або ел. пошта</label>
          <input type="text" id="userlog"></input>
        </div>

        {/* <Link class="link" to="/" draggable="false"> */}
          <button id="login-btn" onClick={LogIn}>УВІЙТИ</button>
        {/* </Link> */}
        <Link class="link" to="/register" draggable="false">
          <button id="reg-btn">ЗАРЕЄСТРУВАТИСЯ</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginApp;
