import React from "react";
import { useContext } from "react";
import TestContext from "../testContext";
import { Text } from "react-native";

const TabItem = ({ fetchAnimal }) => {
  const menuItems = useContext(TestContext);

  return (
    <>
      {menuItems.map((item) => {
        return (
          <button
            key={item.id}
            style={{
              border: "none",
              height: "100%",
              width: "100%",
              backgroundColor: "#39AFEA",
            }}
            onClick={() => fetchAnimal(item.animal)}
          >
            <Text
              style={{
                fontSize: 16,
                color: "#FFFFFF",
              }}
            >
              {item.text}
            </Text>
          </button>
        );
      })}
    </>
  );
};

export default TabItem;
