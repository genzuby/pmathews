import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import { MenuContextStore } from "./context/MenuStyleContext";
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
      <MenuContextStore>
        <BrowserRouter>
          <Menus />
          <Route path="/" exact component={Home} />
          <Route path="/aboutme" exact component={Aboutme} />
          <Route path="/books" exact component={Books} />
          <Route path="/articles" exact component={Articles} />
          <Route path="/professional" exact component={Professional} />
        </BrowserRouter>
      </MenuContextStore>
    </div>
  );
};

export default App;
