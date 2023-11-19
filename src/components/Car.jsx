import React from "react";

import Card from "react-bootstrap/Card";
import "../css/Car.css";
import { Link } from "react-router-dom";
// import { updateCar } from "../redux/slice/CarSlice";
// import { useDispatch } from "react-redux";

const Car = ({ carhba }) => {
  // const [etat, setetat] = useState(carhba.isRented);
  // function handleClick() {
  // setetat(!etat);}
// const dispatch = useDispatch()
  return (
    <>
   
      <Card className="childs">
      <Link to={`/${carhba.id}`}>
       <Card.Img
          variant="top"
          src={carhba.image1}
        />
        </Link>
        
        <Card.Body>
          <Card.Title> {carhba.title}  </Card.Title>
          <Card.Title>  {carhba.modele} </Card.Title>
        </Card.Body>
        {carhba.isRented ? (
        <button
        // onClick={() =>
        //     //   dispatch(
        //     //     updateCar({
        //     //       id: carhba.id,
        //     //       carhba: { ...carhba, isRented: !carhba.isRented }
        //     //     })
        //     //   )
        //     // }
          >
           located
          </button>
        ) : (
          <button
            className="btnnotdone"
            // onClick={() =>
            //   dispatch(
            //     updateCar({
            //       id: carhba.id,
            //       carhba: { ...carhba, isRented: !carhba.isRented }
            //     })
            //   )
            // }
            >
           free
          </button>
        )}
          <button  className="aa"> <Link  to={`/${carhba.id}`}> view details</Link> </button>
      </Card>
      
    </>
  );
};

export default Car;
