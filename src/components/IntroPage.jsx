import React from "react";
import "../css/IntroPage.css";
import { Link } from "react-router-dom";


const IntroPage = () => {
  return (
    <>
      
        <div className="sidhom">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKd8RHfB6FNbZulT0bf3dFhRFnGgStbgzpsQ&usqp=CAU"
            alt=""
          />
          <div className="fils">
            <p>
              Our honorable client , you want to buy , you want to rent , we are
              the closest to you .
            </p>
              <button ><Link to="/Homepage" >Get Start</Link></button> 
           
          </div>
        </div>
    
    </>
  );
};

export default IntroPage;
