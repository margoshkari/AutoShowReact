import "../css/Home.css";
import NavPanel from "./NavPanel";
import SidePanel from "./SidePanel";

function HomeApp() {
  return (
    <div className="home-page">
      <NavPanel/>
      <div className="main-content">
        <h1>Оголошення про продаж б/у авто з пробігом в Києві</h1>
        <div className="main-content-pod">
          <SidePanel/>
        </div>
      </div>
    </div>
  );
}

export default HomeApp;
