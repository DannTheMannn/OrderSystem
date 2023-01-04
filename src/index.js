import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import TabMenu from "./components/tabmenu";
import FoodSectionComponent from "./components/admin/foodSection";
import CartComponent from "./components/user/cartComponent";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <TabMenu />
      <Routes>
        <Route path="/about" element={<FoodSectionComponent/>} />
        <Route path="/service" element={<CartComponent/>} />  
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
