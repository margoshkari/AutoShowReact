import "../css/Add.css";
import { Link } from "react-router-dom";
import close from "../source/close-outline.svg";
import React from "react";
import { createBrowserHistory } from "history";

function AddCarApp() {
  const history = createBrowserHistory({ forceRefresh: true });
  const dataFetchedRef = React.useRef(false);
  React.useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    fetch("/api/profile")
      .then((res) => res.json())
      .then((data) => {
        if (!data.isLogin) {
          history.push("/login");
          history.go();
        }
      });
  }, []);
  return (
    <div className="page">
      <div className="form">
        <Link id="close-img" to="/" draggable="false">
          <img src={close} alt="not found" draggable="false"></img>
        </Link>
        <h1>Додати машину</h1>
        <div className="add-fields">
          {/*NAME*/}
          <div className="add-field">
            <label>Назва</label>
            <input type="text" id="car-name"></input>
          </div>
          {/*PRICE*/}
          <div className="add-field">
            <label>Ціна $</label>
            <input type="number" id="car-price"></input>
          </div>

          {/*PROBIG*/}
          <div className="add-field">
            <label className="form-label">Пробіг</label>
            <input type="number" id="car-prob"></input>
          </div>

          {/*YEAR*/}
          <div className="add-field">
            <label className="form-label">Рік</label>
            <select name="years" className="add-inp" id="car-year">
              <option selected disabled value="" hidden="hidden"></option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>

          {/*BRAND*/}
          <div className="add-field">
            <label className="form-label">Марка</label>
            <select name="years" className="add-inp" id="car-brand">
              <option selected disabled value="" hidden="hidden"></option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
            </select>
          </div>

          {/*BODY*/}
          <div className="add-field">
            <label className="form-label">Тип Кузова</label>
            <select name="years" className="add-inp" id="car-body">
              <option selected disabled value="" hidden="hidden"></option>
              <option>Хетчбек</option>
              <option>Седан</option>
            </select>
          </div>

          {/*FUEL*/}
          <div className="add-field">
            <label className="form-label">Тип Палива</label>
            <select name="years" className="add-inp" id="car-fuel">
              <option selected disabled value="" hidden="hidden"></option>
              <option>Бензин</option>
              <option>Дизель</option>
            </select>
          </div>

          {/*TYPE OF DRIVE*/}
          <div className="add-field">
            <label className="form-label">Тип Приводу</label>
            <select name="years" className="add-inp" id="car-drive">
              <option selected disabled value="" hidden="hidden"></option>
              <option>Передній</option>
              <option>Задній</option>
            </select>
          </div>

          {/*GEARBOX*/}
          <div className="add-field">
            <label className="form-label">Тип КПП</label>
            <select name="years" className="add-inp" id="car-gearbox">
              <option selected disabled value="" hidden="hidden"></option>
              <option>Автомат</option>
              <option>Механічна</option>
            </select>
          </div>
        </div>

        <button id="add-btn">ДОДАТИ</button>
      </div>
    </div>
  );
}

export default AddCarApp;
