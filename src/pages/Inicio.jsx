import React, { useEffect, useState } from 'react'
import './Inicio.css'
import Respuesta from '../components/Respuesta'
import { readSing } from '../services/servicios.'
import noImagen from '../assets/no-imagen.jpg'
import Modal from 'bootstrap/js/dist/modal';
import EliminarLetrero from '../components/EliminarLetrero'

export default function inicio() {
    const [showSing, setShowSing] = useState([])
    const [imageSelect, setImageSelect] = useState(null)
    const [itemSelect, setItemSelect] = useState({})

    const readSign = async () => {
        const data = await readSing();
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
        return expiredDate < today


    }
    const mostrarImagenGrande = (image) => {
        setImageSelect(image);
        const modalElement = document.getElementById("modalImagen");
        const modalInstance = new Modal(modalElement);
        modalInstance.show();

    }

    const modalImage = () => {
        return (
            <>
                {/* <!-- Modal --> */}
                <div className="modal fade" id="modalImagen" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body img-modal-container">
                                <img className='img-fluid img-modal' src={imageSelect ? imageSelect : noImagen} alt="" />

                            </div>

                        </div>
                    </div>
                </div>
            </>
        )
    }


    const selectSing = (item) => {
        setItemSelect({ ...item })
        // console.log("delete")
    }


    useEffect(() => {
        readSign()
    }, [])

    return (
        <>
            <Respuesta />

            <main id='main-inicio' className='container'>
                <aside id="seacher-sign" className='mb-5'>
                    <input type="text" placeholder='Buscar' className='form-control border border-primary' />
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
                                    <th scope="col">Fecha de Vencimiento</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Meses</th>
                                    <th scope="col">Imagen</th>
                                    <th scope="col-2" colSpan="2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody >
                                {/* {
                                    // ? 'table-danger' : ''
                                    showSing.map((item, index) => (
                                        <tr key={item.idLetrero} className={getRowClass(item.fechaCaducada) ? 'table-danger' : ''} >
                                            <td>{index + 1}</td>
                                            <td>{item.cliente}</td>
                                            <td>apellido</td>
                                            <td>{item.telefono}</td>
                                            <td>{formDate(item.fechaInicio)}</td>
                                            <td>{formDate(item.fechaCaducada)}</td>
                                            <td>{getRowClass(item.fechaCaducada) ? 'Vencido' : 'Activo'}</td>
                                            <td>{getMonthDifference(item.fechaInicio, item.fechaCaducada)}</td>
                                            <td><img onClick={(e) => mostrarImagenGrande(item.imagen)} className='img-letrero' src={item.imagen != null ? item.imagen : noImagen} alt={item.cliente} /></td>
                                            <td><i onClick={() => selectSing(item)} className="bi bi-pencil-square icons-styles text-primary" data-bs-toggle="modal" data-bs-target="#modalUpdateSing"></i></td>
                                            <td><i onClick={() => selectSing(item)} className="bi bi-trash3 icons-styles text-danger" data-bs-toggle="modal" data-bs-target="#modalDeleteSing" ></i></td>
                                        </tr>
                                    ))
                                } */}
                            </tbody>
                        </table>
                        {modalImage()}
                        {<EliminarLetrero letrero={itemSelect} />}

                    </div>

                </section>

            </main>
        </>
    )
}


