import React from "react";
import NavMyCar from "./NavMyCar";
import ListCar from "./ListCar";

import FootMyCar from "./FootMyCar";
import FilterCar from "./FilterCar";


const Homepage = ({
  Data,
  setsearchTitleCar,
  setsearchmodeleCar,
  searchTitleCar,
  searchModeleCar,
  searchSerieCar,
  setsearchSerieCar,
}) => {
  return (
    <>
      <NavMyCar />
      <FilterCar
        setsearchTitleCar={setsearchTitleCar}
        setsearchmodeleCar={setsearchmodeleCar}
        setsearchSerieCar={setsearchSerieCar}
      />
      <ListCar
        searchTitleCar={searchTitleCar}
        searchModeleCar={searchModeleCar}
        searchSerieCar={searchSerieCar}
        Data={Data}
      />
   
      <FootMyCar />
    </>
  );
};

export default Homepage;
