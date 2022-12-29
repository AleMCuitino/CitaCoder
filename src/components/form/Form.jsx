import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function BasicExample() {
    return (
        <div className="form-container ms-5 me-5">
        <Form className="form-submit ms-5 me-5 mb-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="Escribir correo electrónico" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control type="password" placeholder="Escribir contraseña" />
                <Form.Text className="text-muted">
                    Nunca compartas tu contraseña con otros.
                </Form.Text>
            </Form.Group>
            <Button variant="primary" type="submit">
                Ingresar
            </Button>
        </Form>
        </div>
    );
}

export default BasicExample;