import React, { useState } from 'react';
import { Button, Form, FormControl, Container, Row, Col, ButtonGroup, ListGroup } from 'react-bootstrap';
import './Navbar.css';

function Navbar({ aulas, onBusquedaChange, onAulaSelect, setPisoActual, pisoActual, setHighlightedAulaId }) {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const horaActual = new Date().toTimeString().slice(0, 5); // HH:MM

  const handleChange = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);
    onBusquedaChange(texto);

    if (texto.length === 0) {
      setResultados([]);
      return;
    }

    const filtro = texto.toLowerCase();
    const filtrados = aulas.filter((aula) => {
      const coincideTexto =
        aula.aula.nombre.toLowerCase().includes(filtro) ||
        aula.materia.nombre.toLowerCase().includes(filtro) ||
        aula.profesor.nombre.toLowerCase().includes(filtro);

      const estaEnHorario =
        aula.horario_inicio <= horaActual && horaActual < aula.horario_fin;

      return coincideTexto && estaEnHorario;
    }).slice(0, 5);

    setResultados(filtrados);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleSelect = (aula) => {
    setHighlightedAulaId(aula.aula.nombre);
    setTimeout(() => setHighlightedAulaId(null), 5000);
    setBusqueda("");
    setResultados([]);
    onAulaSelect(aula);
    setPisoActual(aula.aula.planta.nombre);
  };

  return (
    <div className="navbar-content" style={{ position: 'relative' }}>
      <Container fluid>
        <Row className="flex-column flex-md-row align-items-start align-items-md-center justify-content-between">
          
          {/* Formulario de búsqueda */}
          <Col xs={12} md={8} className="mb-2 mb-md-0">
            <Form className="d-flex flex-column flex-sm-row" onSubmit={handleSubmit} autoComplete="off">
              <FormControl
                type="search"
                placeholder="Buscar aula, materia o profesor"
                className="me-sm-2 mb-2 mb-sm-0"
                value={busqueda}
                onChange={handleChange}
              />
              <Button type="submit" variant="primary">Buscar</Button>
            </Form>

            {/* Lista desplegable */}
            {resultados.length > 0 && (
              <ListGroup className="autocomplete-list mt-2">
                {resultados.map((aula, index) => (
                  <ListGroup.Item
                    key={index}
                    action
                    onClick={() => handleSelect(aula)}
                  >
                    <strong>{aula.aula.nombre}</strong> - {aula.materia.nombre} - {aula.profesor.nombre}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>

          {/* Botones de piso */}
          <Col xs={12} md="auto">
            <ButtonGroup className="w-100 flex-wrap">
              {["Subsuelo", "Planta Baja", "Piso 1", "Piso 2"].map((piso, idx) => (
                <Button
                  key={idx}
                  variant={pisoActual === piso ? "primary" : "light"}
                  onClick={() => setPisoActual(piso)}
                  className="mb-1"
                >
                  {piso}
                </Button>
              ))}
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Navbar;
