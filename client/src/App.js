import './css/App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { createBrowserHistory } from "history";
import Login from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import Home from "./pages/HomePage";

function App() {
  const history = createBrowserHistory({ forceRefresh: true });
  return (
      <Router>
        <Routes history={history}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route  path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
  );
}

export default App;
