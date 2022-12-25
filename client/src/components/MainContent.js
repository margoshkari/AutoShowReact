import "../css/Main.css";
import speedometr from "../source/speedometer-outline.svg";
import car from "../source/car-outline.svg";
import petrol from "../source/color-fill-outline.svg";
import build from "../source/build-outline.svg";
import cog from "../source/cog-outline.svg";
import React from "react";

function MainContentApp() {
  const [data, SetData] = React.useState([]);
  const dataFetchedRef = React.useRef(false);
  React.useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    GetCars();
  }, []);
  async function GetCars() {
    await fetch("/api/profile", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        SetData((oldArray) => [...oldArray, result]);
      });
  }
  return (
    <div className="content">
      <div id="main-grid" className="grid">
        {data.length <= 0 ? (
          ""
        ) : (
          <>
            {data.map((item) => (
              <div className="grid-item">
                <img
                  className="car-img"
                  src="https://vidi-automarket.com.ua/uploads/media/dc_car_gallery/0003/59/thumb_258040_dc_car_gallery_small.png"
                  alt="not found"
                ></img>
                <div className="car-info">
                  <div className="car-header">
                    <h3>Nissan TIIDA</h3>
                    <h3>
                      <span style={{ color: "red" }}>2010</span>
                    </h3>
                  </div>
                  <span className="infw-pic">
                    <img
                      className="speedometer"
                      src={speedometr}
                      alt="not found"
                      draggable="false"
                    ></img>
                    67 тис. км
                  </span>
                  <div className="info-grid">
                    <span className="infw-pic">
                      <img
                        className="icons"
                        src={car}
                        alt="not found"
                        draggable="false"
                      ></img>
                      Хетчбек
                    </span>
                    <span className="infw-pic">
                      <img
                        className="icons"
                        src={petrol}
                        alt="not found"
                        draggable="false"
                      ></img>
                      1.6 Бензин
                    </span>
                    <span className="infw-pic">
                      <img
                        className="icons"
                        src={build}
                        alt="not found"
                        draggable="false"
                      ></img>
                      Передній
                    </span>
                    <span className="infw-pic">
                      <img
                        className="icons"
                        src={cog}
                        alt="not found"
                        draggable="false"
                      ></img>
                      Автомат
                    </span>
                  </div>
                  <p className="hryv">₴ 340,000</p>
                  <p className="dollar">$ 8,396</p>
                  <button id="detail-btn">ДЕТАЛІ</button>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
}

export default MainContentApp;
