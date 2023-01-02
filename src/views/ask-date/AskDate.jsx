import React from "react";
import '../ask-date/AskDate';
import { useForm } from 'react-hook-form'
import Navbar from '../../components/navbar/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const AskDate = () => {

const { register, handleSubmit } = useForm();

const onSubmit = (data) => {
  
}

  return (
    <div>
      <Navbar />
      <h2 className="date-title mt-5 ms-5">Datos del coder</h2>
      <p className="date-description mb-5 ms-5">Ingresa los datos del coder para reservar una cita</p>
      <div className="date-form m-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="name" placeholder="Escribir nombre" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Organización</Form.Label>
            <Form.Control type="name" placeholder="Escribir Organización" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Especialidad</Form.Label>
            <Form.Select>
              <option>Angular</option>
              <option>CSS</option>
              <option>Java</option>
              <option>JavaScript</option>
              <option>React</option>
              <option>React Native</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Profesional</Form.Label>
            <Form.Select>
              <option>Angular</option>
              <option>CSS</option>
              <option>Java</option>
              <option>JavaScript</option>
              <option>React</option>
              <option>React Native</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Tema de consulta</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Check type="checkbox" label="Presencial" disabled />
            <Form.Check type="checkbox" label="Online" disabled />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Fecha</Form.Label>
            <Form.Select disabled>
              <option>Lunes</option>
              <option>Martes</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Hora</Form.Label>
            <Form.Select disabled>
              <option>11:00</option>
              <option>12:00</option>
            </Form.Select>
          </Form.Group>
          <Button variant="outline gap-5" as="input" type="reset" value="Cancelar" />
          <Button as="input" type="submit" value="Reservar" />{' '}
        </form>
      </div>
    </div>
  )
}

export default AskDate;