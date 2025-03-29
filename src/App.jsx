import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter,BrowserRouter, Route, Routes } from 'react-router-dom'
import CrearLetrero from './pages/CrearLetrero'
import Inicio from './pages/Inicio'
import Footer from './common/Footer'
import Header from './common/Header'


function App() {

  return (
    <>
      <HashRouter>
        <Header />
        <main id='main-content'>

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/crear-letrero" element={<CrearLetrero />} />

          </Routes>
        </main>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
