import "../css/Reg.css";
import InputMask from "react-input-mask";
import { useState } from "react";
import person from "../source/person-outline.svg";
import close from "../source/close-outline.svg";
import { Link } from "react-router-dom";

function RegisterApp() {
  const [phone, setPhone] = useState("");
  const handleInput = ({ target: { value } }) => setPhone(value);
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
        // if (data.isRegister) {
        //   updateRegister(true);
        // } else {
        //   console.log(data.error.errors[0].msg);
        //   ShowValidationMessage(
        //     data.error.errors[0].param,
        //     data.error.errors[0].msg
        //   );
        //   updateRegister(false);
        // }
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
        <h1>Реєстрація</h1>
        <div className="fields">
          <label className="form-label">Ім'я</label>
          <input type="text" id="user-name"></input>
          <label className="form-label">Прізвище</label>
          <input type="text" id="user-surname"></input>
          <label className="form-label">По батькові</label>
          <input type="text" id="user-patronymic"></input>
          <label className="form-label">Ел. пошта</label>
          <input type="email" id="user-email"></input>
          <label className="form-label">Телефон</label>
          <PhoneInput
            value={phone}
            onChange={handleInput}
          ></PhoneInput>
          <label className="form-label">Пароль</label>
          <input type="password" id="user-password"></input>
        </div>
        {/* <Link class="link" to="/login" draggable="false"> */}
        <button id="register-btn" onClick={Register}>
          ЗАРЕЄСТРУВАТИСЯ
        </button>
        {/* </Link> */}
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
