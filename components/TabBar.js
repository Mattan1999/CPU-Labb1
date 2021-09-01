import React from "react";
import TabItem from "./TabItem";

const TabBar = ({ fetchAnimal }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        height: "3.5em",
        position: "absolute",
        bottom: "0",
      }}
    >
      <TabItem fetchAnimal={fetchAnimal} />
    </div>
  );
};

export default TabBar;
