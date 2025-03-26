import React, { useEffect, useState } from 'react'
import './Inicio.css'
import Respuesta from '../components/Respuesta'
import { readSing } from '../services/servicios.'
import noImagen from '../assets/no-imagen.jpg'
import Modal from 'bootstrap/js/dist/modal';
import EliminarLetrero from '../components/EliminarLetrero'
import ActualizarLetrero from '../components/ActualizarLetrero'

export default function inicio() {
    const [showSing, setShowSing] = useState([])
    const [imageSelect, setImageSelect] = useState(null)
    const [itemSelect, setItemSelect] = useState({})

    const readSignTable = async () => {

        try {
            const data = await readSing();
            // console.log("Lista actualizada:", data);
            setShowSing(data);

        } catch (error) {
            console.error(error);

        }
    }

    const formDate = (fecha) => {
        const [year, month, day] = fecha.split("-");
        return `${day}/${month}/${year}`
    }

    const getMonthDifference = (fechaInicio, fechaCaducada) => {
        const start = new Date(`${fechaInicio}T12:00:00`);
        const end = new Date(`${fechaCaducada}T12:00:00`);

        const startYear = start.getFullYear();
        const startMonth = start.getMonth();

        const endYear = end.getFullYear();
        const endMonth = end.getMonth();

        const totalMonths = (endYear - startYear) * 12 + (endMonth - startMonth)
        return totalMonths

    }
    const getRowClass = (fechaCducada) => {
        const expiredDate = new Date(`${fechaCducada}T12:00:00`);
        const today = new Date();
        expiredDate.setHours(0, 0, 0, 0);
        today.setHours(0, 0, 0, 0);
        return expiredDate < today


    }
    const mostrarImagenGrande = (image) => {
        setImageSelect(image);
        if (document.activeElement) {
            document.activeElement.blur();
        }
        const modalElement = document.getElementById("modalImagen");
        const modalInstance = new Modal(modalElement);
        modalInstance.show();
        // modalInstance.hide();


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
    }


    useEffect(() => {
        readSignTable()
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
                        <table className="table text-center align-middle">
                            <thead className='table-dark'>
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
                                    <th scope="col" colSpan="2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    // ? 'table-danger' : ''
                                    showSing.map((item, index) => (
                                        <tr key={item.idLetrero} className={getRowClass(item.fechaCaducada) ? 'table-danger' : ''} >
                                            <td>{index + 1}</td>
                                            <td>{item.cliente}</td>
                                            <td>{(item.apellido === null || item.apellido === "") ? "No proporcionado" : item.apellido}</td>
                                            <td>{item.telefono === null ? "No proporcionado" : item.telefono}</td>
                                            <td>{formDate(item.fechaInicio)}</td>
                                            <td>{formDate(item.fechaCaducada)}</td>
                                            <td>{getRowClass(item.fechaCaducada) ? 'Vencido' : 'Activo'}</td>
                                            <td>{getMonthDifference(item.fechaInicio, item.fechaCaducada)}</td>
                                            <td><img onClick={(e) => mostrarImagenGrande(item.imagen)} className='img-letrero' src={item.imagen != null ? item.imagen : noImagen} alt={item.cliente} title='Ver Imagen' /></td>
                                            <td><i onClick={() => selectSing(item)} className="bi bi-pencil-square icons-styles text-primary" data-bs-toggle="modal" data-bs-target="#modalUpdateSing" title="Editar"></i></td>
                                            <td><i onClick={() => selectSing(item)} className="bi bi-trash3 icons-styles text-danger" data-bs-toggle="modal" data-bs-target="#modalDeleteSing" title="Eliminar" ></i></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        {modalImage()}
                        {<EliminarLetrero letrero={itemSelect} onDelete={readSignTable} />}
                        {<ActualizarLetrero letrero={itemSelect} onUpdate={readSignTable} />}

                    </div>

                </section>

            </main>
        </>
    )
}


