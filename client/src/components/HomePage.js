import "../css/Home.css";
import NavPanel from "./NavPanel";
import SidePanel from "./SidePanel";
import MainContent from "./MainContent";
import React from "react";

function HomeApp() {
  const [data, SetData] = React.useState([]);
  const dataFetchedRef = React.useRef(false);
  React.useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;

    GetCars();
  }, []);
  async function GetCars() {
    await fetch("/api/getcar", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (result) {
        console.log(result.cars);
        SetData([result.cars]);
      });
  }
  function Filter(obj) {
    console.log(obj);

    fetch("/api/filter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.cars);
        SetData([result.cars]);
      });
  }
  function BuyCar(id) {
    fetch("/api/delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ _id: id }),
    })
      .then((res) => res.json())
      .then((result) => {
        SetData([result.cars]);
      });
  }
  return (
    <div className="home-page">
      <NavPanel />
      <div className="main-content">
        <h1 className="main-header">
          Оголошення про продаж б/у авто з пробігом в Києві
        </h1>
        <div className="main-content-pod">
          <SidePanel filter={Filter} />
          <MainContent data={data} buyCar={BuyCar} />
        </div>
      </div>
    </div>
  );
}

export default HomeApp;
