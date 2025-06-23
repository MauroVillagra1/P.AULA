import React, { useState } from 'react';
import { Button, Form, FormControl, Container, Row, Col, ButtonGroup, ListGroup } from 'react-bootstrap';
import './Navbar.css';

function Navbar({ aulas, onBusquedaChange, onAulaSelect, setPisoActual, pisoActual, setHighlightedAulaId }) {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);

  const handleChange = (e) => {
    const texto = e.target.value;
    setBusqueda(texto);
    onBusquedaChange(texto);

    if (texto.length === 0) {
      setResultados([]);
      return;
    }

    const filtro = texto.toLowerCase();
   const filtrados = aulas.filter((aula) =>
  aula.name.toLowerCase().includes(filtro) ||
  aula.subject.toLowerCase().includes(filtro) ||
  aula.teacher.toLowerCase().includes(filtro)
).slice(0, 5);

    setResultados(filtrados);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Podés manejar una acción acá si querés usar enter
  };

const handleSelect = (aula) => {
  console.log("Seleccionado:", aula);
  setHighlightedAulaId(aula.name);
  setTimeout(() => setHighlightedAulaId(null), 5000);
  setBusqueda("");      // Limpiar el input
  setResultados([]);    // Ocultar sugerencias
  onAulaSelect(aula);   // Mostrar popup con info del aula
  setPisoActual(aula.floor); // Cambiar al piso del aula seleccionada
};

  const handlePisoClick = (piso) => {
    console.log("Piso seleccionado:", piso);
  };

  return (
    <div className="navbar-content" style={{ position: 'relative' }}>
      <Container fluid>
        <Row className="align-items-center justify-content-between">
          <Col xs={12} md="auto">
            <Form className="d-flex" onSubmit={handleSubmit} autoComplete="off">
              <FormControl
                type="search"
                placeholder="Buscar aula, materia o profesor"
                className="me-2"
                value={busqueda}
                onChange={handleChange}
              />
              <Button type="submit" variant="primary">Buscar</Button>
            </Form>

            {/* Lista desplegable de resultados */}
            {resultados.length > 0 && (
              <ListGroup className="autocomplete-list">
                {resultados.map((aula, index) => (
                  <ListGroup.Item
                    key={index}
                    action
                    onClick={() => handleSelect(aula)}
                  >
                    <strong>{aula.name}</strong> - {aula.subject} - {aula.teacher}
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </Col>

          <Col xs="auto">
         <ButtonGroup>
  {["Subsuelo", "Planta Baja", "Piso 1", "Piso 2"].map((piso, idx) => (
    <Button
      key={idx}
      variant={pisoActual === piso ? "primary" : "light"} // cambia el color según si es el piso actual
      onClick={() => setPisoActual(piso)}
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
