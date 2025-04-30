import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginAdmin from './components/login-admin/LoginAdmin';
import './App.css'
import StatusClassroom from './components/statusclassroom/StatusClassroom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
    {/* <StatusClassroom></StatusClassroom> */}
    <LoginAdmin></LoginAdmin>
      </div>
    </>
  )
}

export default App
