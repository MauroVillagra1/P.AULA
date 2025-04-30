import React from 'react'
import "./StatusClassroom.css"
import Button from 'react-bootstrap/Button';

function StatusClassroom() {
  return (
    <div className='status-classroom-conteiner'>
        <div className='status-clasroom-title'>
            <h3>Detalles: Aula 3</h3>
            <button>x</button>
        </div>
        <div className='status-classroom-body'>
            <ul>
                <li>Estado: <span className='status-classroom-tag'>Disponible</span></li>
                <li>Materia: <span>Matematica Discreta</span></li>
                <li>Comision: <span>1K6</span></li>
                <li>Docente: <span>Monica de la Orden</span></li>
                <li>Horario: <span>2:30-4:30</span></li>
                <li>-</li>
            </ul>
            <div className='status-classroom-buttons'>
            <Button variant="danger">Desocupar</Button>
            <Button variant="warning">Modificar</Button>
        </div>
        </div>
      
    </div>
  )
}

export default StatusClassroom