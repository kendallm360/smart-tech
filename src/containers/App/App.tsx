import React from "react";
import Header from "../../components/Header";
import "./App.css";
import { Route } from "react-router-dom";
import Categories from "../../components/Categories";
import Category from "../../components/Category";
import Item from "../../components/Item";

const App = () => {
  return (
    <>
      <Header />

      <Route exact path="/">
        <div className="App">
          <div className="background">
            <Categories />
          </div>
        </div>
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
    </>
  );
};

export default App;
