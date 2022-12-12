import '../css/Reg.css'
import InputMask from 'react-input-mask';
import {useState} from 'react';
import person from "../source/person-outline.svg"
import close from "../source/close-outline.svg"
import { Link } from "react-router-dom";

function RegisterApp(){
    const [phone, setPhone] = useState('');
    const handleInput = ({ target: { value } }) => setPhone(value);
    return (
        <div className="page">
          <div className='form'>
              <Link id="close-img" to="/">
                    <img src={close} alt="not found"></img>
                </Link>
            <img id="person-img" src={person} alt="not found"></img>
              <h1>Реєстрація</h1>
              <div className="fields">
                  <label>Ім'я</label>
                  <input type="text"></input>
                  <label>Прізвище</label>
                  <input type="text"></input>
                  <label>По батькові</label>
                  <input type="text"></input>
                  <label>Ел. пошта</label>
                  <input type="email"></input>
                  <label>Телефон</label>
                  <PhoneInput 
                      value={phone} 
                      onChange={handleInput}>
                  </PhoneInput>
              </div>
                  <Link class="link" to="/login">
                    <button id="register-btn">ЗАРЕЄСТРУВАТИСЯ</button>
                  </Link>
          </div>
        </div>
    )
}
function PhoneInput(props) {
    return (
      <InputMask 
        mask='+38(999)999-99-99' 
        value={props.value} 
        onChange={props.onChange}>
      </InputMask>
    );
  }

export default RegisterApp;