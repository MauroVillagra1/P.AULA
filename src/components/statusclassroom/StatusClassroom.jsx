import React from 'react';
import "./StatusClassroom.css";
import Button from 'react-bootstrap/Button';

function StatusClassroom({ classroom, closePopup }) {
  return (
    <div className='status-classroom-conteiner'>
      <div className='status-clasroom-title'>
        <h3>Detalles: {classroom.name}</h3>
        <button onClick={closePopup}>x</button>
      </div>
      <div className='status-classroom-body'>
        <ul>
          <li>Estado: <span className='status-classroom-tag'>{classroom.status}</span></li>
          <li>Materia: <span>{classroom.subject}</span></li>
          <li>Comisión: <span>{classroom.commission}</span></li>
          <li>Docente: <span>{classroom.teacher}</span></li>
          <li>Horario: <span>{classroom.schedule}</span></li>
          <li>-</li>
        </ul>
        <div className='status-classroom-buttons'>
          <Button variant="danger">Desocupar</Button>
          <Button variant="warning">Modificar</Button>
        </div>
      </div>
    </div>
  );
}

export default StatusClassroom;
