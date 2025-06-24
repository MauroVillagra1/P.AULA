import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import LoginAdmin from "./components/login-admin/LoginAdmin";
import "./App.css";
import StatusClassroom from "./components/statusclassroom/StatusClassroom";
import Main from "./main/Inicio.jsx";
import Navbar from "./cummon/Navbar.jsx";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [selectedClassroom, setSelectedClassroom] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
const [pisoActual, setPisoActual] = useState("Planta Baja");
const [highlightedAulaId, setHighlightedAulaId] = useState(null);

 const classrooms = [
  {
    name: 'Aula 112',
    status: 'Ocupado',
    subject: 'Matemática Discreta',
    commission: '1K6',
    teacher: 'Monica de la Orden',
    schedule: '19:30 - 22:30',
    floor: 'Planta Baja',
  },
  {
    name: 'Aula 113',
    status: 'Ocupado',
    subject: 'Física I',
    commission: '2A1',
    teacher: 'Juan Pérez',
    schedule: '19:00 - 22:00',
    floor: 'Piso 1',
  },
  {
    name: 'Aula 108',
    status: 'Ocupado',
    subject: 'Algoritmos y Estructuras de Datos',
    commission: '1K3',
    teacher: 'Laura Gómez',
    schedule: '19:00 - 22:00',
    floor: 'Piso 1',
  },
  {
    name: 'Aula 104',
    status: 'Ocupado',
    subject: 'Análisis Matemático',
    commission: '1K2',
    teacher: 'Carlos Martínez',
    schedule: '19:00 - 22:00',
    floor: 'Piso 1',
  },
  {
    name: 'Aula 102',
    status: 'Ocupado',
    subject: 'Sistemas Operativos',
    commission: '2B4',
    teacher: 'Ana Lucía Fernández',
    schedule: '19:00 - 21:00',
    floor: 'Piso 1',
  },
  {
    name: 'Aula 105',
    status: 'Ocupado',
    subject: 'Ingeniería de Software',
    commission: '3K1',
    teacher: 'Pedro López',
    schedule: '19:00 - 21:00',
    floor: 'Piso 1',
  },
  {
    name: 'Aula 114',
    status: 'Ocupado',
    subject: 'Inteligencia Artificial',
    commission: '4K2',
    teacher: 'Valeria Benítez',
    schedule: '19:00 - 22:00',
    floor: 'Planta Baja',
  },
  {
    name: 'Aula 118',
    status: 'Ocupado',
    subject: 'Base de Datos',
    commission: '3K2',
    teacher: 'Daniel Ríos',
    schedule: '19:00 - 22:00',
    floor: 'Planta Baja',
  },
];


  const handleBusquedaChange = (texto) => {
    setBusqueda(texto);
  };

  const handleAulaSelect = (aula) => {
    setSelectedClassroom(aula);
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <>
     <Navbar
  aulas={classrooms}
  onBusquedaChange={handleBusquedaChange}
  onAulaSelect={handleAulaSelect}
  setPisoActual={setPisoActual}
  pisoActual={pisoActual}
  setHighlightedAulaId={setHighlightedAulaId}
/>
<Main
  classrooms={classrooms}
  busqueda={busqueda}
  selectedClassroom={selectedClassroom}
  setSelectedClassroom={setSelectedClassroom}
  setShowPopup={setShowPopup}
  showPopup={showPopup}
  closePopup={closePopup}
  pisoActual={pisoActual}
  setPisoActual={setPisoActual}
  highlightedAulaId={highlightedAulaId}
/>
    </>
  );
}

export default App;
