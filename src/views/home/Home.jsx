import React from "react";
import '../home/Home';
import Navbar from '../../components/Navbar';
import ilustration1 from '../../assests/images/Ilustration1.svg';

export default function Home() {
    return (
      <>
        <Navbar />
        <div className="title">
          <h1>Soluciones para tus problemas de código</h1>
        </div>
        <div className="ilustration1">
          <img
              src={ilustration1}
              width="350"
              height="350"
              className="d-inline-block align-center"
              alt="ilustration"
            />
        </div>
      </>
    );
  }