import React from 'react';
import { Link } from 'react-router-dom';
import '../all-dates/AllDates.scss';
import Navbar from '../../components/navbar/Navbar';
import Table from 'react-bootstrap/Table';

function AllDates() {
  return (
    <>
      <Navbar />
      <h2 className="all-dates-title mt-5 ms-5">Citas solicitadas</h2>
      <Table striped className="all-dates-table me-5">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Organización</th>
            <th>Especialidad</th>
            <th>Profesional</th>
            <th>Modalidad</th>
            <th>Fecha</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark González</td>
            <td>Factoría Madrid</td>
            <td>JavaScript</td>
            <td>Laura Rodriguez</td>
            <td>Online</td>
            <td>Lunes 24 de enero</td>
            <td>12:15</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Mark González</td>
            <td>Factoría Madrid</td>
            <td>JavaScript</td>
            <td>Laura Rodriguez</td>
            <td>Online</td>
            <td>Lunes 24 de enero</td>
            <td>12:15</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Mark González</td>
            <td>Factoría Madrid</td>
            <td>JavaScript</td>
            <td>Laura Rodriguez</td>
            <td>Online</td>
            <td>Lunes 24 de enero</td>
            <td>12:15</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}
export default AllDates;