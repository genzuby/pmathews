import React from "react";
import Heros from "../components/Heros";
import Menus from "../components/Menus";
import Cards from "../components/Cards";
import Bottom from "../components/Bottom";

const Home = () => {
  return (
    <div>
      <Menus />
      <Heros />
      <Cards />
      <Bottom />
    </div>
  );
};

export default Home;
