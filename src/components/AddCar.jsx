import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { addCar } from '../redux/slice/CarSlice';
import { useDispatch } from 'react-redux';

const AddCar = () => {
   
        const [show, setShow] = useState(false);
        const dispatch =useDispatch()
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
      
        const [newCar, setNewCar] = useState({
          id: Math.random(),
          title:"",
          modele:"",
          serie:"",
          isRented:true,
          image1:"",
          image2:"",
          image3:"",
          teaser:""
      
      
        })
  return (
    <>
         <Button className='AddCar' variant="primary" onClick={handleShow}>
       ADD Car +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Car Adding</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>marque title</Form.Label>
              <Form.Control
                type="Name"
                placeholder="marque title"
                autoFocus onChange={(event)=>setNewCar({...newCar,title:event.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>modele</Form.Label>
              <Form.Control
                type="Name"
                placeholder="modele car"
                autoFocus onChange={(event)=>setNewCar({...newCar,modele:event.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>serie</Form.Label>
              <Form.Control
                type="Name"
                placeholder="serie car"
                autoFocus  onChange={(event)=>setNewCar({...newCar, serie:event.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image1</Form.Label>
              <Form.Control
                type="Name"
                placeholder="image1"
                autoFocus  onChange={(event)=>setNewCar({...newCar,image1:event.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image2</Form.Label>
              <Form.Control
                type="Name"
                placeholder="image2"
                autoFocus  onChange={(event)=>setNewCar({...newCar,image2:event.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>image3</Form.Label>
              <Form.Control
                type="Name"
                placeholder="image3"
                autoFocus  onChange={(event)=>setNewCar({...newCar,image3:event.target.value})}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>teaser</Form.Label>
              <Form.Control
                type="Name"
                placeholder="teaser"
                autoFocus  onChange={(event)=>setNewCar({...newCar,teaser:event.target.value})}
              />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
         <Button variant="success" onClick={()=>((dispatch(addCar(newCar) ), handleClose() , setNewCar({
          id: Math.random(),
          title:"",
          modele:"",
          serie:"",
          isRented:true,
          image1:"",
          image2:"",
          image3:"",
          teaser:""
      
      
        })))}> 
            ADD 
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddCar