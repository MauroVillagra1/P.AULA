import React, { useState, useEffect } from 'react';
import './Inicio.css';
import { Button } from 'react-bootstrap';
import StatusClassroom from '../components/statusclassroom/StatusClassroom'; // Asegúrate de importar StatusClassroom
import Navbar from '../cummon/Navbar';
function Main({ classrooms, busqueda, selectedClassroom, setSelectedClassroom, setShowPopup, showPopup, closePopup, pisoActual, highlightedAulaId }) {

  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

 const imagenesPorPiso = {
  "Subsuelo": "https://res.cloudinary.com/dnibad7yk/image/upload/v1750794347/GESTOR_DE_AULAS_UTN_FRT_m4fvu2.png",
  "Planta Baja": "https://res.cloudinary.com/dnibad7yk/image/upload/v1750791969/PLANTA_BAJA_mlns0q.png",
  "Piso 1": "https://res.cloudinary.com/dnibad7yk/image/upload/v1750792496/PRIMER_PISO_hjd1vl.png",
  "Piso 2": "https://res.cloudinary.com/dnibad7yk/image/upload/v1750795260/GESTOR_DE_AULAS_UTN_FRT_1_e1eo1v.png"
};
const areasPorPiso = {
  "Planta Baja": [
    { id: 'Aula 158', coords: { x1: 3, y1: 17, x2: 12, y2: 27 }, label: 'Aula 158' },
    { id: 'Aula 156', coords: { x1: 3, y1: 32, x2: 12, y2: 47 }, label: 'Aula 156' },
    { id: 'Aula 154', coords: { x1: 3, y1: 51, x2: 12, y2: 65 }, label: 'Aula 154' },
    { id: 'Laboratorio1', coords: { x1: 2, y1: 69, x2: 13, y2: 79 }, label: 'Laboratorio' },
    { id: 'Aula 159', coords: { x1: 24, y1: 2, x2: 32, y2: 12 }, label: 'Aula 159' },
    { id: 'Aula 157', coords: { x1: 24, y1: 15, x2: 32, y2: 27 }, label: 'Aula 157' },
    { id: 'Aula 155', coords: { x1: 24, y1: 32, x2: 32, y2: 44 }, label: 'Aula 155' },
    { id: 'Aula 153', coords: { x1: 24, y1: 50, x2: 32, y2: 64 }, label: 'Aula 153' },
    { id: 'Laboratorio2', coords: { x1: 23.4, y1: 70, x2: 32.7, y2: 86 }, label: 'Laboratorio' },
    { id: 'Aula 118', coords: { x1: 68, y1: 38, x2: 79, y2: 47 }, label: 'Aula 118' },
    { id: 'Aula 116', coords: { x1: 68, y1: 50, x2: 79, y2: 58 }, label: 'Aula 116' },
    { id: 'Aula 114', coords: { x1: 68, y1: 62, x2: 79, y2: 70 }, label: 'Aula 114' },
    { id: 'Aula 112', coords: { x1: 68, y1: 73, x2: 79, y2: 81 }, label: 'Aula 112' },
    { id: 'Aula 115', coords: { x1: 96, y1: 64, x2: 114, y2: 72 }, label: 'Aula 115' },
    { id: 'Aula 117', coords: { x1: 96, y1: 53, x2: 114, y2: 62 }, label: 'Aula 117' },
    { id: 'Aula 119', coords: { x1: 96, y1: 40, x2: 114, y2: 50 }, label: 'Aula 119' },
    { id: 'Aula 121', coords: { x1: 96, y1: 26, x2: 114, y2: 37 }, label: 'Aula 121' },





  ],
  "Piso 1": [
    { id: 'Aula 108', coords: { x1: 2, y1: 3, x2: 13, y2: 19 }, label: 'Aula 108' },
    { id: 'Aula 113', coords: { x1: 2, y1: 24, x2: 13, y2: 37 }, label: 'Aula 113' },
    { id: 'Aula 104', coords: { x1: 2, y1: 41, x2: 13, y2: 56 }, label: 'Aula 104' },
    { id: 'Aula 102', coords: { x1: 2, y1: 61, x2: 13, y2: 74 }, label: 'Aula 102' },
    { id: 'Aula 107', coords: { x1: 24, y1: 2, x2: 32, y2: 19 }, label: 'Aula 107' },
    { id: 'Aula 105', coords: { x1: 24, y1: 24, x2: 32, y2: 45 }, label: 'Aula 105' },
    { id: 'Aula 103', coords: { x1: 24, y1: 49, x2: 32, y2: 66 }, label: 'Aula 103' },
    { id: 'Aula 101', coords: { x1: 24, y1: 69, x2: 32, y2: 84 }, label: 'Aula 101' },
    { id: 'Aula 218', coords: { x1: 68, y1: 42, x2: 79, y2: 50 }, label: 'Aula 218' },
    { id: 'Aula 216', coords: { x1: 68, y1: 53, x2: 79, y2: 61 }, label: 'Aula 216' },
    { id: 'Aula 214', coords: { x1: 68, y1: 64, x2: 79, y2: 73 }, label: 'Aula 214' },
    { id: 'Aula 212', coords: { x1: 68, y1: 75, x2: 79, y2: 84 }, label: 'Aula 212' },
    { id: 'Aula 221', coords: { x1: 96, y1: 26, x2: 115, y2: 37 }, label: 'Aula 221' },
    { id: 'Aula 219', coords: { x1: 96, y1: 41, x2: 115, y2: 50 }, label: 'Aula 219' },
    { id: 'Aula 217', coords: { x1: 96, y1: 53, x2: 115, y2: 62 }, label: 'Aula 217' },
    { id: 'Aula 215', coords: { x1: 96, y1: 65, x2: 115, y2: 72 }, label: 'Aula 215' }
  ],
  "Subsuelo": [
  ],
  // etc.
};

 const areas = areasPorPiso[pisoActual] || [];
 const imagenActual = imagenesPorPiso[pisoActual];



  const handleImageLoad = (e) => {
    setImageDimensions({
      width: e.target.width,
      height: e.target.height,
    });
  };
<Navbar aulas={classrooms} />

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
  const classroom = classrooms.find(classroom => classroom.name === aulaId);
  setSelectedClassroom(classroom);
  setShowPopup(true);

  // Efecto de resaltar temporalmente
   // Quitar resaltado tras 1.5 segundos
};
  

  return (
    
    <div className="content-main">
     <img
  src={imagenActual}
  alt={`Mapa ${pisoActual}`}
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

      
    {areas.map((area, index) => {
  const { x1, y1, x2, y2 } = getAbsoluteCoordinates(area.coords);
  return (
<Button
  className={`Button-main-map ${highlightedAulaId === area.id ? "button-highlight" : ""}`}
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
  
      
      {showPopup && selectedClassroom && (
        <div className="status-classroom-overlay">
        <StatusClassroom classroom={selectedClassroom} closePopup={closePopup} />
            </div>
      )}
    </div>
   
  );
  
}

export default Main;
