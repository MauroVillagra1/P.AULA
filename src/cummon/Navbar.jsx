import React, { useState } from 'react';
import { Button, Form, FormControl, Container, Row, Col, ButtonGroup } from 'react-bootstrap';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buscando:", busqueda);
  };

  const handlePisoClick = (piso) => {
    console.log("Seleccionado:", piso);
  };

  return (
    <div className="navbar-content">
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          {/* Columna izquierda: barra de búsqueda */}
          <Col xs={12} md="auto">
            <Form className="d-flex" onSubmit={handleSubmit}>
              <FormControl
                type="search"
                placeholder="Buscar aula, materia u otro"
                className="me-2"
                value={busqueda}
                onChange={handleChange}
              />
              <Button type="submit" variant="primary">Buscar</Button>
            </Form>
          </Col>

          {/* Columna derecha: botones de piso */}
          <Col xs="auto">
            <ButtonGroup>
              <Button variant="light" onClick={() => handlePisoClick("Subsuelo")}>Subsuelo</Button>
              <Button variant="light" onClick={() => handlePisoClick("Planta Baja")}>Planta Baja</Button>
              <Button variant="light" onClick={() => handlePisoClick("Piso 1")}>Piso 1</Button>
              <Button variant="light" onClick={() => handlePisoClick("Piso 2")}>Piso 2</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navbar;
