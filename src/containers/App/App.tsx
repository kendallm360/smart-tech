import React from "react";
import Header from "../../components/Header";
import "./App.css";
import { Route } from "react-router-dom";
import Categories from "../../components/Categories";
import Category from "../../components/Category";

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
    </>
  );
};

export default App;
