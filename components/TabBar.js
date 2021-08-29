import React from 'react';
import TabItem from './TabItem';


const TabBar = ({fetchAnimal, menuItems}) => {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-evenly",
      width: "100%",
      height: "3.5em",
      position: "absolute",
      bottom: "0",
    }}
    >
      {menuItems.map((item) => {
        return (
          <button 
            key={item.id}
            style={{border: 'none', height: '100%', width: '100%', backgroundColor: '#39AFEA', fontSize: 16, color: '#FFFFFF'}}
          >
            <TabItem 
              menuItem={item}
              fetchAnimal={fetchAnimal}
            />
          </button>
        );
      })} 
    </div>
  );
};

export default TabBar;