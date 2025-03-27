import React, { useEffect, useState } from 'react'
import './Respuesta.css'

export default function Respuesta({ mensaje, tipo }) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        if (mensaje) {
            setVisible(true);
            const timer = setTimeout(() => setVisible(false), 6000); // Desaparece en 6 segundos
            return () => clearTimeout(timer); // Limpia el temporizador
        }
    }, [mensaje]);

    if (!mensaje || !visible) return null;

    return (
        <section id="resultados" className={`alerta ${tipo ? "exito" : "error"}`}>
            <i className={`bi ${tipo ? "bi-check-circle-fill" : "bi-x-circle-fill"}`}></i>
            <span>{mensaje}</span>
        </section>
    );
}
