import React from "react";
// import { createGlobalStyle } from "styled-components";
import { Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/main.scss";

const App = () => {
  return (
    <div data-test="AppComponent">
      {/* <GlobalStyle /> */}
      <BrowserRouter>
        <Route path="/" exact component={Home} />
      </BrowserRouter>
    </div>
  );
};

// const GlobalStyle = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css?family=Quicksand&display=swap');
// @import url('https://fonts.googleapis.com/css?family=Libre+Baskerville&display=swap');

//   body {
//     margin : 0;
//     padding: 0;
//     font-family: 'Quicksand', sans-serif;
//   }

//   a{
//     text-decoration : none;
//   }
// `;

export default App;
