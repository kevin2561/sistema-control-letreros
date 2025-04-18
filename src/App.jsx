import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter,BrowserRouter, Route, Routes } from 'react-router-dom' // HashRouter para electron js 
import CrearLetrero from './pages/CrearLetrero'
import Inicio from './pages/Inicio'
import Footer from './common/Footer'
import Header from './common/Header'
import Pagina404 from './pages/Pagina404'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <main id='main-content'>

          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/crear-letrero" element={<CrearLetrero />} />
            <Route path="*" element={<Pagina404 />} /> 
            {/* { path: "**", component: PaginaNoEncontradaComponent } // angular */}


          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
