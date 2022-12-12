import '../css/Reg.css'
import InputMask from 'react-input-mask';
import {useState} from 'react';

function RegisterApp(){
    const [phone, setPhone] = useState('');
    const handleInput = ({ target: { value } }) => setPhone(value);
    return (
        <div className="page">
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
            <button id="register-btn">ЗАРЕЄСТРУВАТИСЯ</button>
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