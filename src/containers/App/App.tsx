import React from "react";
import Header from "../../components/Header";
import "./App.css";
import { Route } from "react-router-dom";
import Categories from "../../components/Categories";

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
    </>
  );
};

export default App;
