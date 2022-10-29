import Header from "../../components/Header";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Categories from "../../components/Categories";
import Category from "../../components/Category";
import Item from "../../components/Item";
import Cart from "../../components/Cart";
//may not need
// import { useQuery } from "react-query";
// import Drawer from "@material-ui/core/Drawer";
// import LinearProgress from "@material-ui/core/LinearProgress";
// import Grid from "@material-ui/core/Grid";
// import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart"
// import Badge from "@material-ui/core/Badge"

const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Categories />
          </div>
        </Route>

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
      </Switch>
    </>
  );
};

export default App;
