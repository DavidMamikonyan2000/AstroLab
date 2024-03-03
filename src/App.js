import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import PatinetSingle from "./patientSingle/PatinetSingle";
import Login from "./login/Login";
import Register from "./register/Register";
import PrivateRoutes from "./PrivateRoutes";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact element={<PrivateRoutes />}>
            <Route exact path="/" element={<Home />} />
            <Route path="/patient/:id" element={<PatinetSingle />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
