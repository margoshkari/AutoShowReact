import "../css/Reg.css";
import InputMask from "react-input-mask";
import { useState } from "react";
import person from "../source/person-outline.svg";
import close from "../source/close-outline.svg";
import { Link } from "react-router-dom";
import React from "react";
import { createBrowserHistory } from "history";

function RegisterApp() {
  const [phone, setPhone] = useState("");
  const handleInput = ({ target: { value } }) => setPhone(value);
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
  function Register() {
    fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: document.getElementById("user-name").value,
        surname: document.getElementById("user-surname").value,
        patronymic: document.getElementById("user-patronymic").value,
        email: document.getElementById("user-email").value,
        phone: phone,
        password: document.getElementById("user-password").value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.isRegister) {
          console.log(data.error.errors[0].msg);
          ShowValidationMessage(
            data.error.errors[0].param,
            data.error.errors[0].msg
          );
        }
        else{
          history.push("/login");
          history.go();
        }
      });
  }
  function ShowValidationMessage(param, msg) {
    let fields = document.getElementsByClassName("reg-inp");
    Array.from(fields).forEach((element) => {
      element.style = "border: 1px solid black";
    });
    switch (param) {
      case "username":
        document.getElementById("user-name").style = "border: 1px solid red";
        break;
      case "password":
        document.getElementById("user-password").style =
          "border: 1px solid red";
        break;
      case "patronymic":
        document.getElementById("user-patronymic").style =
          "border: 1px solid red";
        break;
      case "surname":
        document.getElementById("user-surname").style = "border: 1px solid red";
        break;
      case "email":
        document.getElementById("user-email").style = "border: 1px solid red";
        break;
      case "phone":
        document.getElementById("user-phone").style = "border: 1px solid red";
        break;
    }
    let span = document.getElementById("error_message");
    span.style = "color: red;";
    span.innerHTML = msg;
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
        <h1>Реєстрація</h1>
        <div className="fields">
          <label className="form-label">Ім'я</label>
          <input type="text" id="user-name" className="reg-inp"></input>
          <label className="form-label">Прізвище</label>
          <input type="text" id="user-surname" className="reg-inp"></input>
          <label className="form-label">По батькові</label>
          <input type="text" id="user-patronymic" className="reg-inp"></input>
          <label className="form-label">Ел. пошта</label>
          <input type="email" id="user-email" className="reg-inp"></input>
          <label className="form-label">Телефон</label>
          <PhoneInput
            id="user-phone"
            value={phone}
            onChange={handleInput}
            className="reg-inp"
          ></PhoneInput>
          <label className="form-label">Пароль</label>
          <input type="password" id="user-password" className="reg-inp"></input>
        </div>
        <span id="error_message"></span>
        <button id="register-btn" onClick={Register}>
          ЗАРЕЄСТРУВАТИСЯ
        </button>
        <Link class="link" to="/login" draggable="false">
          Вже зареєструвалися?
        </Link>
      </div>
    </div>
  );
}
function PhoneInput(props) {
  return (
    <InputMask
      mask="+38(099)999-99-99"
      value={props.value}
      onChange={props.onChange}
    ></InputMask>
  );
}

export default RegisterApp;
