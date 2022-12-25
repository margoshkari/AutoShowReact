import "../css/Side.css";
import down from "../source/chevron-down-outline.svg";

function SidePanelApp({ filter }) {
  function Filter() {
    let year_min = document.getElementById("min-year");
    let year_max = document.getElementById("max-year");
    let brand = document.getElementsByClassName("brand-checks");
    let brandArray = [];
    let body = document.getElementsByClassName("body-checks");
    let bodyArray = [];
    for (let index = 0; index < brand.length; index++) {
      if (brand[index].checked) {
        brandArray.push(brand[index].value);
      }
    }
    for (let index = 0; index < body.length; index++) {
      if (body[index].checked) {
        bodyArray.push(body[index].value);
      }
    }
    let obj = {};
    obj.innerObj = {
      price_min: document.getElementById("min-price-inp").value,
      price_max: document.getElementById("max-price-inp").value,
      year_min: year_min.options[year_min.selectedIndex].text,
      year_max: year_max.options[year_max.selectedIndex].text,
      probig_min: document.getElementById("min-probig-inp").value,
      probig_max: document.getElementById("max-probig-inp").value,
      brandArray: brandArray,
      bodyArray: bodyArray,
    };
    filter(obj.innerObj);
  }
  return (
    <div className="side-panel">
      <div className="side-header">
        <h4>ПІДБІР АВТОМОБІЛЯ</h4>
        <button onClick={Filter}>Фільтр</button>
      </div>
      <div className="filters">
        {/*PRICE FILTER */}
        <div className="filter">
          <span className="sp">ЦІНА, ГРН</span>
          <div className="price-inp">
            <input
              type="number"
              className="filter-inp"
              id="min-price-inp"
            ></input>
            <span>
              {" "}
              <b>-</b>{" "}
            </span>
            <input
              type="number"
              className="filter-inp"
              id="max-price-inp"
            ></input>
          </div>
          <div className="line-filter"></div>
          <div>
            <div className="checks">
              <input type="checkbox" id="spec-prop"></input>
              <label>Показувати тільки спецпропозиції</label>
            </div>
            <div className="checks">
              <input type="checkbox" id="pdv"></input>
              <label>ПДВ включено</label>
            </div>
          </div>
          <div className="line-filter"></div>
        </div>
        {/*YEAR FILTER */}
        <div className="filter">
          <span className="sp">РІК</span>
          <div className="year-inp">
            <select name="years" className="filter-inp" id="min-year">
              <option selected disabled value="" hidden="hidden"></option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
            <span> </span>
            <select name="years" className="filter-inp" id="max-year">
              <option selected disabled value="" hidden="hidden"></option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
          <div className="line-filter"></div>
        </div>
        {/*PROBIG FILTER */}
        <div className="filter">
          <span className="sp">ПРОБІГ, КМ</span>
          <div className="prob-inp">
            <input
              type="number"
              className="filter-inp"
              id="min-probig-inp"
              placeholder="Пробіг від"
            ></input>
            <span> </span>
            <input
              type="number"
              className="filter-inp"
              id="max-probig-inp"
              placeholder="Пробіг до"
            ></input>
          </div>
          <div className="line-filter"></div>
        </div>
        {/*BRAND FILTER */}
        <div className="filter brand-filter">
          <span className="sp im">
            МАРКА{" "}
            <img
              src={down}
              id="down-img"
              alt="not found"
              draggable="false"
            ></img>
          </span>
          <div className="brand">
            <ul className="filter-list">
              <li>
                <div className="checks">
                  <input
                    type="checkbox"
                    value="Audi"
                    className="brand-checks"
                  ></input>
                  <label>Audi</label>
                </div>
              </li>
              <li>
                <div className="checks">
                  <input
                    type="checkbox"
                    value="BMW"
                    className="brand-checks"
                  ></input>
                  <label>BMW</label>
                </div>
              </li>
            </ul>
          </div>
          <div className="line-filter"></div>
        </div>
        {/*BODY TYPE*/}
        <div className="filter body-filter">
          <span className="sp im">
            ТИП КУЗОВА{" "}
            <img
              src={down}
              id="down-img"
              alt="not found"
              draggable="false"
            ></img>
          </span>
          <div className="body">
            <ul className="filter-list">
              <li>
                <div className="checks">
                  <input
                    type="checkbox"
                    className="body-checks"
                    value="Хетчбек"
                  ></input>
                  <label>Хетчбек</label>
                </div>
              </li>
              <li>
                <div className="checks">
                  <input
                    type="checkbox"
                    className="body-checks"
                    value="Седан"
                  ></input>
                  <label>Седан</label>
                </div>
              </li>
            </ul>
          </div>
          <div className="line-filter"></div>
        </div>
      </div>
    </div>
  );
}
export default SidePanelApp;
