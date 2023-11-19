import React from "react";

import "../css/ListCar.css";
import Car from "./Car";

const ListCar = ({ Data, searchTitleCar, searchSerieCar, searchModeleCar }) => {
  return (
    <div className="babahom">
      {Data.filter((car) => {
      
        return (
          
         car.title.toLowerCase().includes(searchTitleCar) &&
          (!searchSerieCar || car.serie === searchSerieCar) &&
          (!searchModeleCar || car.modele.toLowerCase().includes(searchModeleCar))
        );
      }).map((filtercar) => (
        <Car key={filtercar.id} carhba={filtercar} />
      ))}
    </div>
  );
};

export default ListCar;
