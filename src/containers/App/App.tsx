import Header from "../../components/Header";
import { Route, Switch } from "react-router-dom";
import Categories from "../../components/Categories";
import Category from "../../components/Category";
import Item from "../../components/Item";
import Cart from "../../components/Cart";
import { StyledApp } from "../../components/styles/App.styled";

const App = () => {
  return (
    <StyledApp>
      <Header />
      <Switch>
        <Route exact path="/">
          <Categories />
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
    </StyledApp>
  );
};

export default App;
