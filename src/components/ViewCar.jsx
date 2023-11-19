import React from "react";
import "../css/ViewCar.css";
import FootMyCar from "./FootMyCar";
import { useParams } from "react-router-dom";


const ViewCar = ({Data}) => {
  console.log(Data)
  const url = parseFloat(useParams().id);
  const carsearched = Data.filter((car) => {
    if (car.id === url) {
      return car;
    }
  })[0];

  return (
    <>
      <div className="mother">
        <div className="tsawer">
          <img
            src={carsearched.image1}
            alt=""
          />
          <img
            src={carsearched.image2}
            alt=""
          />
          <img
            src={carsearched.image3}
            alt=""
          />
        </div>

        <div className="basdepage">
          <div className="ktiba">
            <h6>carte description </h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex
              ratione provident suscipit, minima magni quidem, perferendi
              adipisci eos perspiciatis laudantium.
            </p>
          </div>
          <div className="boutonet">
           
            <button> <a href="#foot">contact</a></button>
            <button> <a href="#video">teaser</a> </button>
          </div>
        </div>
        <video id="video" controls autoPlay>
          <source src={carsearched.teaser} type="video/mp4" />
        </video>
       <FootMyCar/>
       

      </div>
    </>
  );
};

export default ViewCar;
