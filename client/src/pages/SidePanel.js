import "../css/Home.css";
import "../css/Side.css";
import down from "../source/chevron-down-outline.svg"

function SidePanelApp(){
    return(
        <div className="side-panel">
            <div className="side-header">
                <h4>ПІДБІР АВТОМОБІЛЯ</h4>
            </div>
            <div className="filters">
                {/*PRICE FILTER */}
                <div className="filter">
                    <span className="sp">ЦІНА, ГРН</span>
                    <div className="price-inp">
                        <input type="number" className="filter-inp" id="min-price-inp"></input>
                        <span> <b>-</b> </span>
                        <input type="number" className="filter-inp" id="max-price-inp"></input>
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
                            <option selected disabled value='' hidden="hidden"></option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                        <span>  </span>
                        <select name="years" className="filter-inp" id="max-year">
                            <option selected disabled value='' hidden="hidden"></option>
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
                        <input type="number" className="filter-inp" id="min-price-inp" placeholder="Пробіг від"></input>
                        <span> </span>
                        <input type="number" className="filter-inp" id="max-price-inp" placeholder="Пробіг до"></input>
                    </div>
                    <div className="line-filter"></div>
                </div>
                {/*BRAND FILTER */}
                 <div className="filter brand-filter">
                    <span className="sp im">МАРКА <img src={down} id="down-img" alt="not found"  draggable="false"></img></span>
                    <div className="brand">
                       <ul className="filter-list">
                            <li>
                                <div className="checks">
                                    <input type="checkbox"></input>
                                    <label>Audi</label>
                                </div>
                            </li>
                            <li>
                                <div className="checks">
                                    <input type="checkbox"></input>
                                    <label>BMW</label>
                                </div>
                            </li>
                       </ul>
                    </div>
                    <div className="line-filter"></div>
                </div>
                {/*BODY TYPE*/}
                <div className="filter body-filter">
                    <span className="sp im">ТИП КУЗОВА <img src={down} id="down-img" alt="not found"  draggable="false"></img></span>
                    <div className="body">
                       <ul className="filter-list">
                            <li>
                                <div className="checks">
                                    <input type="checkbox"></input>
                                    <label>Хетчбек</label>
                                </div>
                            </li>
                            <li>
                                <div className="checks">
                                    <input type="checkbox"></input>
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