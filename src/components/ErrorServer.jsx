import React, { useState } from 'react'
import imgE500 from '../assets/error500.png'
import './ErrorServer.css'

export default function ErrorServer() {


    return (
        <>
            <div className="error-container">
                <span className="error-code">500</span>
                <p className="error-message">Hubo un error, inténtelo más tarde.</p>
                <img src={imgE500} alt="error" className="error-image" />

                <ul className="error-suggestions">
                    <li>🔍 Asegúrese de tener conexión a Internet.</li>
                    <li>🔄 Intente refrescar la página.</li>
                    <li>⏳ Espere unos minutos y vuelva a intentarlo.</li>
                </ul>
            </div>

        </>
    )
}
