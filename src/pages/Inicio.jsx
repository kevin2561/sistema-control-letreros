import React, { useEffect, useState } from 'react'
import './Inicio.css'
// import { Link } from 'react-router-dom'
import Respuesta from '../components/Respuesta'
import { leerServicio } from '../services/servicios.'
import noImagen from '../assets/no-imagen.jpg'

export default function inicio() {
    const [showSing, setShowSing] = useState([])

    const readSign = async () => {
        const data = await leerServicio();
        try {
            console.log(data)
            setShowSing(data);

        } catch (error) {
            console.error(error);

        }
    }


    const formDate = (fecha) => {
        const date = new Date(fecha)
        const year = date.getFullYear()
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${day}/${month}/${year}`

    }
    const getMonthDifference = (fechaInicio, fechaCaducada) => {
        const start = new Date(fechaInicio);
        const end = new Date(fechaCaducada);

        const startYear = start.getFullYear();
        const startMonth = start.getMonth();

        const endYear = end.getFullYear();
        const endMonth = end.getMonth();

        const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth)
        return totalMonths

    }
    const getRowClass = (fechaCducada) => {
        const expiredDate = new Date(fechaCducada);
        const today = new Date();
        expiredDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        return expiredDate < today ? 'table-danger' : ''


    }

    useEffect(() => {
        readSign()
    }, [])

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
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Teléfono</th>
                                    <th scope="col">Fecha Inicio</th>
                                    <th scope="col">Fecha Caducada</th>
                                    <th scope="col">Total de meses</th>
                                    <th scope="col">Imagen</th>
                                    <th scope="col-2" colSpan="2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    showSing.map((item, index) => (
                                        <tr key={item.idLetrero} className={getRowClass(item.fechaCaducada)} >
                                            <td>{index + 1}</td>
                                            <td>{item.cliente}</td>
                                            <td>apellido</td>
                                            <td>{item.telefono}</td>
                                            <td>{formDate(item.fechaInicio)}</td>
                                            <td>{formDate(item.fechaCaducada)}</td>
                                            <td>{getMonthDifference(item.fechaInicio, item.fechaCaducada)}</td>
                                            <td><img className='img-letrero' src={item.imagen != null ? item.imagen : noImagen} alt="" /></td>
                                            <td>Editar</td>
                                            <td>Eliminar</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>

                </section>

            </main>
        </>
    )
}
