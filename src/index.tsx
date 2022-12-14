import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./contexts/context";
import DisabledContext from "./contexts/disabledContext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <CartContext>
      <DisabledContext>
        <App />
      </DisabledContext>
    </CartContext>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
