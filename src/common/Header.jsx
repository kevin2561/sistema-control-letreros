import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/pinguino_logo.png'
import './Header.css'

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div className='content-logo'>
            <img src={logo} />

          </div>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link to={"/"} className="nav-link active" aria-current="page" >Inicio</Link>
              <Link to={"/crear-letrero"} className="nav-link" >Crear Letrero</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
