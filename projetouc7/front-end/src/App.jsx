import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GerenciarAlunos from './pages/GerenciarAlunos/GerenciarAlunos'

function App() {

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<GerenciarAlunos />} />
        </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
