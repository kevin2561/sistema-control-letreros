import React from 'react'
import './Inicio.css'
import { Link } from 'react-router-dom'
import Respuesta from '../components/Respuesta'

export default function inicio() {
    return (
        <>
            <Respuesta />

            <main id='main-inicio' className='container'>



                <aside id="seacher-sign">
                    <input type="text" placeholder='Buscar' className='form-control' />
                    <div>
                        <button className='btn btn-primary'>Buscar</button>
                    </div>
                </aside>

                <section id="mian-content" className='container'>
                    <div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Fecha Inicio</th>
                                    <th scope="col">Fecha Caducada</th>
                                    <th scope="col">Teléfono</th>
                                    <th scope="col-2" colSpan="2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>1</th>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>@mdo</td>
                                    <td>Actualizar</td>
                                    <td>Eliminar</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </section>

            </main>
        </>
    )
}
