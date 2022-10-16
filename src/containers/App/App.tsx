import React from "react";
import Header from "../../components/Header";
import "./App.css";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <Header />
      <Route exact path="/">
        {/* <div className="App">

</div> */}
      </Route>
    </>
  );
};

export default App;
