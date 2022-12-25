import "../css/Main.css";
import speedometr from "../source/speedometer-outline.svg";
import car from "../source/car-outline.svg";
import petrol from "../source/color-fill-outline.svg";
import build from "../source/build-outline.svg";
import cog from "../source/cog-outline.svg";

function MainContentApp({ data, buyCar }) {
  function Buy(e) {
    let id = e.target.value;
    buyCar(id);
  }
  return (
    <div className="content">
      <div id="main-grid" className="grid">
        {data.length <= 0 ? (
          ""
        ) : (
          <>
            {data.map((car_item) =>
              car_item.map((car_elem) => (
                <div className="grid-item" key={car_elem._id}>
                  <img
                    className="car-img"
                    src={car_elem.image}
                    alt="not found"
                  ></img>
                  <div className="car-info">
                    <div className="car-header">
                      <h3>{car_elem.name}</h3>
                      <h3>
                        <span style={{ color: "red" }}>{car_elem.year}</span>
                      </h3>
                    </div>
                    <span className="infw-pic">
                      <img
                        className="speedometer"
                        src={speedometr}
                        alt="not found"
                        draggable="false"
                      ></img>
                      {car_elem.probig} тис. км
                    </span>
                    <div className="info-grid">
                      <span className="infw-pic">
                        <img
                          className="icons"
                          src={car}
                          alt="not found"
                          draggable="false"
                        ></img>
                        {car_elem.body}
                      </span>
                      <span className="infw-pic">
                        <img
                          className="icons"
                          src={petrol}
                          alt="not found"
                          draggable="false"
                        ></img>
                        {car_elem.fuel}
                      </span>
                      <span className="infw-pic">
                        <img
                          className="icons"
                          src={build}
                          alt="not found"
                          draggable="false"
                        ></img>
                        {car_elem.drive_type}
                      </span>
                      <span className="infw-pic">
                        <img
                          className="icons"
                          src={cog}
                          alt="not found"
                          draggable="false"
                        ></img>
                        {car_elem.gearbox}
                      </span>
                    </div>
                    <p className="hryv">₴ {parseInt(car_elem.price * 36.92)}</p>
                    <p className="dollar">$ {car_elem.price}</p>
                    <button
                      id="detail-btn"
                      value={car_elem._id}
                      onClick={(e) => {
                        Buy(e);
                      }}
                    >
                      КУПИТИ
                    </button>
                  </div>
                </div>
              ))
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default MainContentApp;
