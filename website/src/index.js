import React from "react";
import ReactDOM from "react-dom/client"; // Asegúrate de importar ReactDOM
import App from "./App";
import "./index.css";
import "./index.scss";
//import NotFound from "./NotFound"; // Importa el componente NotFound
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router> {/* Router debe envolver las rutas */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
