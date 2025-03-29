import React, { useEffect, useState } from 'react'
import './Inicio.css'
import Respuesta from '../components/Respuesta'
import { readSing } from '../services/servicios.'
import noImagen from '../assets/no-imagen.jpg'
import cargando from '../assets/loading.svg'
import Modal from 'bootstrap/js/dist/modal';
import EliminarLetrero from '../components/EliminarLetrero'
import ActualizarLetrero from '../components/ActualizarLetrero'
import ErrorServer from '../components/ErrorServer'

export default function inicio() {
    const [showSing, setShowSing] = useState([])
    const [imageSelect, setImageSelect] = useState(null)
    const [itemSelect, setItemSelect] = useState({})
    const [loading, setLoading] = useState(false)
    const [seacherText, setSeacherText] = useState("");
    const [e500, setE500] = useState(false);


    const readSignTable = async () => {
        setLoading(true);
        setE500(false);
        try {
            const data = await readSing();
            data.sort((a, b) => a.idLetrero - b.idLetrero);
            // console.log("Lista actualizada:", data);
            setShowSing(data);

        } catch (error) {
            console.error(error);
            setE500(true)

        }
        finally {
            setLoading(false);
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
        return totalMonths > 0 ? totalMonths : 0

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

    const selectSing = (item) => {
        setItemSelect({ ...item })
    }

    const filteredData = showSing.filter(item => {

        const result = item.cliente?.toLowerCase().includes(seacherText.toLowerCase()) || item.apellido?.toLowerCase().includes(seacherText.toLowerCase())
        return result;
    });

    const mainContent = () => {
        return (
            <main id='main-inicio' className='container'>
                <div className='my-5'>
                    <h1 className='text-uppercase'>Letreros</h1>
                </div>
                <aside id="seacher-sign" className='mb-5'>
                    <input type="text" placeholder='Ingrese nombre o apellido para buscar...' onChange={(e) => setSeacherText(e.target.value)}
                        className='form-control border border-primary' value={seacherText} />
                </aside>

                <section id="mian-content" className='container'>
                    <div id='table-main' >
                        <table className="table table-sm text-center align-middle">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Código</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Teléfono</th>
                                    <th scope="col">Fecha de Inicio</th>
                                    <th scope="col">Fecha de caducidad</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Meses</th>
                                    <th scope="col">Imagen</th>
                                    <th scope="col" colSpan="2">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.length > 0
                                    ? filteredData.map((item, index) => (
                                        <tr key={item.idLetrero} className={getRowClass(item.fechaCaducada) ? 'table-danger' : ''} >
                                            <td>{index + 1}</td>
                                            <td>{item.idLetrero}</td>
                                            <td>{item.cliente}</td>
                                            <td>{(item.apellido === null || item.apellido === "") ? "No proporcionado" : item.apellido}</td>
                                            <td>{item.telefono === null ? "No proporcionado" : item.telefono}</td>
                                            <td>{formDate(item.fechaInicio)}</td>
                                            <td>{formDate(item.fechaCaducada)}</td>
                                            <td>{getRowClass(item.fechaCaducada) ? 'Vencido' : 'Activo'}</td>
                                            <td>{getMonthDifference(item.fechaInicio, item.fechaCaducada)}</td>
                                            <td>
                                                <img onClick={(e) => mostrarImagenGrande(item.imagen)} className='img-letrero'
                                                    src={item.imagen != null ? item.imagen : noImagen} alt={item.cliente} title='Ver Imagen' />
                                            </td>
                                            <td>
                                                <i onClick={() => selectSing(item)} className="bi bi-pencil-square icons-styles text-primary"
                                                    data-bs-toggle="modal" data-bs-target="#modalUpdateSing" title="Editar"></i>
                                            </td>
                                            <td>
                                                <i onClick={() => selectSing(item)} className="bi bi-trash3 icons-styles text-danger"
                                                    data-bs-toggle="modal" data-bs-target="#modalDeleteSing" title="Eliminar"></i>
                                            </td>
                                        </tr>
                                    ))
                                    : <tr>
                                        <td colSpan="12" className="text-center"><h2 className='h2 my-5'>No se encontraron datos</h2></td>
                                    </tr>
                                }
                            </tbody>
                        </table>


                    </div>
                </section>
            </main>
        )

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

    useEffect(() => {
        readSignTable()
    }, [])

    return (
        <>
            {loading ? <span id="content-loading"> <img src={cargando} alt='cargando' /></span>
                : e500 ? <ErrorServer />
                    : mainContent()}
            {modalImage()}
            {<EliminarLetrero letrero={itemSelect} onDelete={readSignTable} setLoading={setLoading} />}
            {<ActualizarLetrero letrero={itemSelect} onUpdate={readSignTable} setLoading={setLoading} />}

        </>
    )
}


