import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Articles from "./pages/Articles";
import Books from "./pages/Books";
import Professional from "./pages/Professional";
import "./styles/main.scss";
import Menus from "./components/Menus";

const App = () => {
  return (
    <div data-test="AppComponent">
      <Menus />
      <Route path="/" exact component={Home} />
      <Route path="/aboutme" exact component={Aboutme} />
      <Route path="/books" exact component={Books} />
      <Route path="/articles" exact component={Articles} />
      <Route path="/professional" exact component={Professional} />
    </div>
  );
};

export default App;
