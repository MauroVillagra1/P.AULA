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
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="content">
        <Navbar></Navbar>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
