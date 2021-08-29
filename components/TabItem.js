import React from 'react';


const TabItem = ({menuItem, fetchAnimal}) => {
  return(
    <div onClick={(e) => fetchAnimal(menuItem.animal)} >
      {menuItem.text}
    </div>
  );
};

export default TabItem;