import React from "react";
import HomeButtons from "./common/buttons/homeButtons";

const Home = () => {
  console.log(this);
  return (
    <div>
      <HomeButtons />
      <div id="fade" />
      <div id="background" />
    </div>
  );
};

export default Home;
