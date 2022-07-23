import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Popular from "./components/Popular";
import Loosers from "./components/Loosers";
import Gainers from "./components/Gainers";
import AllStocks from "./components/AllStocks";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/loosers" element={<Loosers />} />
          <Route path="/gainers" element={<Gainers />} />
          <Route path="/all" element={<AllStocks />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
