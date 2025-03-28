import React from 'react'
import './Footer.css';
import logo from '../assets/logov2.png'


export default function Footer() {
    return (
        <footer className=''>
            <div>
                <span>© Todos los Derechos Reservados</span>
            </div>
            <div className='content-logo'>
                <img src={logo} alt='logo' />
            </div>
        </footer>
    )
}
