import "../css/Home.css";
import "../css/Side.css";

function SidePanelApp(){
    return(
        <div className="side-panel">
            <div className="side-header">
                <h4>ПІДБІР АВТОМОБІЛЯ</h4>
            </div>
            <div className="filters">
                <div className="price-filter">
                    <span className="price-sp">ЦІНА, ГРН</span>
                    <div className="price-inp">
                        <input type="number" id="min-price-inp"></input>
                        <span> <b>-</b> </span>
                        <input type="number" id="max-price-inp"></input>
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
                <div className="year-filter">
                    <span className="year-sp">РІК</span>
                    <div className="year-inp">
                        <select name="years" id="min-year">
                            <option selected disabled value='' hidden="hidden"></option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                        <span> <b>-</b> </span>
                        <select name="years" id="max-year">
                            <option selected disabled value='' hidden="hidden"></option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                        </select>
                    </div>
                    <div className="line-filter"></div>
                </div>
            </div>
        </div>
    );
}
export default SidePanelApp;