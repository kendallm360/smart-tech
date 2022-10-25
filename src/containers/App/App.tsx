import { useState } from "react";
import { useQuery } from "react-query";
import Header from "../../components/Header";
import "./App.css";
import { Route } from "react-router-dom";
import Categories from "../../components/Categories";
import Category from "../../components/Category";
import Item from "../../components/Item";
import Cart from "../../components/Cart";
//may not need
// import Drawer from "@material-ui/core/Drawer";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import Grid from "@material-ui/core/Grid";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
// import Badge from "@material-ui/core/Badge"

export type TCartItem = {
  id: number;
  name: string;
  image: string;
  price: number;
  amount: number;
};
const App = () => {
  return (
    <>
      <Header />

      <Route exact path="/cart">
        <Cart />
      </Route>

      <Route
        exact
        path="/:id"
        render={({ match }) => {
          return <Category id={match.params.id} />;
        }}
      />

      <Route
        exact
        path="/:id/:name"
        render={({ match }) => {
          return <Item id={match.params.id} name={match.params.name} />;
        }}
      />

      <Route exact path="/">
        <div className="App">
          <div className="background">
            <Categories />
          </div>
        </div>
      </Route>
    </>
  );
};

export default App;
