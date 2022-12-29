import React from "react";
import '../home/Home';
import Navbar from '../../components/navbar/Navbar';
import Button from 'react-bootstrap/Button';
import Form from '../../components/form/Form';
import ilustration1 from '../../assests/images/Ilustration1.svg';

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="home-container mb-5">
        <div className="title ms-5 mt-5">
          <h1 className="title"> Soluciones para tus problemas de código/ </h1>
        </div>
        <div className="ilustration-container">
          <div className="ilustration1 d-flex justify-content-center">
            <img
              src={ilustration1}
              width="350"
              height="350"
              className="d-inline-block align-center"
              alt="ilustration"
            />
          </div>
          <div className="buttons-container gap-5 d-flex justify-content-center align-center">
            <Button className="mt-5 mb-5" variant="light">Información</Button>
            <Button className="mt-5 mb-5" variant="dark">Pedir cita</Button>
          </div>
        </div>
      </div>
      <Form />
    </>
  );
}