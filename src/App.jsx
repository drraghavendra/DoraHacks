import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Advertiser from './pages/Dashboard/Advertiser'
import Publisher from './pages/Dashboard/Publisher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard/advertiser" element={<Advertiser />} />
          <Route path="/dashboard/publisher" element={<Publisher />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
