import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import IntroPage from "./components/IntroPage";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import ViewCar from "./components/ViewCar";
import FootMyCar from "./components/FootMyCar";
import About from "./components/About";
import { useSelector } from "react-redux";

function App() {
 
  const [searchTitleCar, setsearchTitleCar] = useState("");
  const [searchModeleCar, setsearchmodeleCar] = useState("");
  const [searchSerieCar, setsearchSerieCar] = useState("");
  
 const carData = useSelector((state)=>state.car.carData)


  return (
   
    <Routes>
      <Route path="/" element={<IntroPage />} />
      <Route
        path="/Homepage"
        element={
          <Homepage
          setsearchTitleCar={setsearchTitleCar}
            setsearchmodeleCar={setsearchmodeleCar}
            setsearchSerieCar={setsearchSerieCar}
            searchTitleCar={searchTitleCar}
            searchModeleCar={searchModeleCar}
            searchSerieCar={searchSerieCar}
            
            Data={carData}
          />


         
        }
      />
      <Route path="/about" element={<About/>} />
     <Route path="/contact" element={<FootMyCar/>} />
      <Route path="/:id" element={<ViewCar Data={carData} />} />
    </Routes>
    
  );
}

export default App;
