import { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import CartContext from "./contexts/context";

// interface ICartItem {
//   id: number;
//   name: string;
//   image: string;
//   price: number;
//   quantity: number;
// }

// interface AppContextInterface {
//   cart: ICartItem[];
// }

//alterate logic for the line above myContext
// const defaultContext = {
//   cart: [
//     //in the event I wanted cart to have at least 1 object inside with given structure
//     // {
//     //   name: "",
//     //   image: "",
//     //   price: 0,
//     //   quantity: 0,
//     // },
//   ],
// };
//old example:
// export const myContext = createContext<AppContextInterface | null>(null);
//current variable in use:
// export const myContext = createContext<AppContextInterface>(defaultContext);
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <CartContext>
      {/* <myContext.Provider value={defaultContext}> */}
      <App />
      {/* </myContext.Provider> */}
    </CartContext>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
