import React, { useState, useEffect } from 'react';
import './Inicio.css';
import { Button } from 'react-bootstrap';
import StatusClassroom from '../components/statusclassroom/StatusClassroom'; // Asegúrate de importar StatusClassroom

function Main() {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedClassroom, setSelectedClassroom] = useState(null); // Estado para el aula seleccionada
  const [showPopup, setShowPopup] = useState(false); // Estado para controlar la visibilidad del pop-up

  const classrooms = [
    {
      name: 'Aula 112',
      status: 'Disponible',
      subject: 'Matematica Discreta',
      commission: '1K6',
      teacher: 'Monica de la Orden',
      schedule: '2:30-4:30',
    },
    {
      name: 'Aula 113',
      status: 'Ocupado',
      subject: 'Física I',
      commission: '2A1',
      teacher: 'Juan Pérez',
      schedule: '9:00-11:00',
    }
  ];

  const areas = [
    { id: 'Aula 112', coords: { x1: 3, y1: 5, x2: 12, y2: 15 }, label: 'Aula 112' },
    { id: 'Aula 113', coords: { x1: 3, y1: 23, x2: 12, y2: 33 }, label: 'Aula 113' },
  ];

  const handleImageLoad = (e) => {
    setImageDimensions({
      width: e.target.width,
      height: e.target.height,
    });
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getAbsoluteCoordinates = (coords) => {
    const { width, height } = imageDimensions;
    const { x1, y1, x2, y2 } = coords;
    const aspectRatio = width / height;

    const containerWidth = windowWidth * 0.8;
    const containerHeight = (containerWidth / aspectRatio);

    return {
      x1: (x1 / 100) * containerWidth,
      y1: (y1 / 100) * containerHeight,
      x2: (x2 / 100) * containerWidth,
      y2: (y2 / 100) * containerHeight,
    };
  };

  const getButtonColor = (aulaId) => {
    const classroom = classrooms.find(classroom => classroom.name === aulaId);
    return classroom ? (classroom.status === 'Ocupado' ? 'danger' : 'success') : 'secondary';
  };

  const handleClick = (aulaId) => {
    // Buscar el aula correspondiente en el array classrooms
    const classroom = classrooms.find(classroom => classroom.name === aulaId);
    setSelectedClassroom(classroom); // Establecer el aula seleccionada
    setShowPopup(true); // Mostrar el pop-up
  };

  const closePopup = () => {
    setShowPopup(false); // Cerrar el pop-up
  };

  return (
    <div className="content-main">
      <img
        src="https://res.cloudinary.com/dpoin30pf/image/upload/v1747171654/GESTOR_DE_AULAS_UTN_FRT_jaaffo.png"
        alt="Mapa aulas"
        onLoad={handleImageLoad}
        useMap="#mapaAulas"
      />

      <map name="mapaAulas">
        {areas.map((area, index) => {
          const { x1, y1, x2, y2 } = getAbsoluteCoordinates(area.coords);
          return (
            <area
              key={index}
              shape="rect"
              coords={`${x1},${y1},${x2},${y2}`}
              href="#"
              alt={area.label}
              onClick={() => handleClick(area.id)}
            />
          );
        })}
      </map>

      {/* Renderizamos los botones */}
      {areas.map((area, index) => {
        const { x1, y1, x2, y2 } = getAbsoluteCoordinates(area.coords);
        return (
          <Button
            className="Button-main-map"
            key={index}
            variant={getButtonColor(area.id)}
            style={{
              position: 'absolute',
              left: `${x1}px`,
              top: `${y1}px`,
              width: `${x2 - x1}px`,
              height: `${y2 - y1}px`,
            }}
            onClick={() => handleClick(area.id)}
          >
            {area.label}
          </Button>
        );
      })}
  
      {/* Mostrar el pop-up con la información del aula si showPopup es true */}
      {showPopup && selectedClassroom && (
        <div className="status-classroom-overlay">
        <StatusClassroom classroom={selectedClassroom} closePopup={closePopup} />
            </div>
      )}
    </div>
   
  );
}

export default Main;
