import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from '../src/Signup.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../src/Login.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Signup />}></Route>
          <Route path='/login' element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
