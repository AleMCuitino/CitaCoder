import React from "react";
import '../ask-date/AskDate';
import Navbar from '../../components/navbar/Navbar';
import Form from 'react-bootstrap/Form';

function AskDate() {
  return (
    <div>
      <Navbar />
      <h2 className="date-title">Datos del coder</h2>
      <p className="date-description">Ingresa los datos del coder para reservar una cita</p>
      <div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Disabled input</Form.Label>
          <Form.Control placeholder="Disabled input" disabled />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Disabled select menu</Form.Label>
          <Form.Select disabled>
            <option>Disabled select</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Can't check this" disabled />
        </Form.Group>
      </div>
    </div>
  )
}

export default AskDate;