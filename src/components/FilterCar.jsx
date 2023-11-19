import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "../css/FilterCar.css";

const FilterCar = ({setsearchTitleCar ,setsearchmodeleCar,setsearchSerieCar }) => {
  return (
    <div className="global">
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          placeholder="search by title"
          aria-describedby="inputGroup-sizing-default"
          onChange={(event) => setsearchTitleCar(event.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          placeholder="search by serie"
          aria-describedby="inputGroup-sizing-default"
          onChange={(event)=>setsearchSerieCar(event.target.value)}
        />
      </InputGroup>
      <InputGroup className="mb-3">
        <Form.Control
          aria-label="Default"
          placeholder="search by modele"
          aria-describedby="inputGroup-sizing-default"
          onChange={(event)=>setsearchmodeleCar(event.target.value)}
        />
      </InputGroup>
    </div>
  );
};

export default FilterCar;
