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
  function AddCar() {
    let year = document.getElementById("car-year");
    let brand = document.getElementById("car-brand");
    let body = document.getElementById("car-body");
    let fuel = document.getElementById("car-fuel");
    let drive_type = document.getElementById("car-drive");
    let gearbox = document.getElementById("car-gearbox");
    fetch("/api/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: document.getElementById("car-name").value,
        image: document.getElementById("car-image").value,
        price: document.getElementById("car-price").value,
        probig: document.getElementById("car-prob").value,
        year: year.options[year.selectedIndex].text,
        brand: brand.options[brand.selectedIndex].text,
        body: body.options[body.selectedIndex].text,
        fuel: fuel.options[fuel.selectedIndex].text,
        drive_type: drive_type.options[drive_type.selectedIndex].text,
        gearbox: gearbox.options[gearbox.selectedIndex].text,
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
        <h1>Додати машину</h1>
        <div className="add-fields">
          {/*NAME*/}
          <div className="add-field">
            <label>Назва</label>
            <input type="text" id="car-name"></input>
          </div>
          {/*IMAGE*/}
          <div className="add-field">
            <label>Посилання на фото</label>
            <input type="text" id="car-image"></input>
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

        <button id="add-btn" onClick={AddCar}>
          ДОДАТИ
        </button>
      </div>
    </div>
  );
}

export default AddCarApp;
