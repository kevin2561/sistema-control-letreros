import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CrearLetrero from './pages/CrearLetrero'
import Inicio from './pages/inicio'
import Footer from './common/Footer'
import Header from './common/Header'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <main id='main-content'>

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/crear-letrero" element={<CrearLetrero />} />

          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
