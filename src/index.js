import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import TabMenu from "./components/tabmenu";
import AdminSectionComponent from "./components/admin/adminSection";
import FoodComponent from "./components/user/foodComponent";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <TabMenu />
      <Routes>
        <Route path="/about" element={<AdminSectionComponent/>} />
        <Route path="/service" element={<FoodComponent/>} />  
        <Route
            path="*"
            element={
              <div>
                <h2>404 Page not found etc</h2>
              </div>
            }
          />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
