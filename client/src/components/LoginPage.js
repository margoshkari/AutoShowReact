import "../css/Log.css";
import person from "../source/person-outline.svg";
import close from "../source/close-outline.svg";
import { Link } from "react-router-dom";
import React from "react";
import { createBrowserHistory } from "history";

function LoginApp() {
  const history = createBrowserHistory({ forceRefresh: true });
  const dataFetchedRef = React.useRef(false);
  React.useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        if (data.isLogin) {
          history.push("/");
          history.go();
        }
      });
  }, []);
  function LogIn() {
    fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userlog: document.getElementById("userlog").value,
        password: document.getElementById("password-log").value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.isLogin){
          history.push("/");
          history.go();
        }
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
          <label className="form-label">Пароль</label>
          <input type="password" id="password-log"></input>
        </div>

        {/* <Link class="link" to="/" draggable="false"> */}
        <button id="login-btn" onClick={LogIn}>
          УВІЙТИ
        </button>
        {/* </Link> */}
        <Link className="link" to="/register" draggable="false">
          <button id="reg-btn">ЗАРЕЄСТРУВАТИСЯ</button>
        </Link>
      </div>
    </div>
  );
}

export default LoginApp;
