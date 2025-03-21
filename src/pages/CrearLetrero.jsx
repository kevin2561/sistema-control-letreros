import React from 'react'
import './CrearLetrero.css'
import { crearLetrero } from '../services/servicios.'
export default function CrearLetrero() {

    // crearLetrero()

    const formCreateSing = (e) => {
        e.preventDefault();
        console.log("form")
    }
    return (
        <>
            <section id='form-create-sign'>
                <div className='text-center'>
                    <h2 className='h2'>Crear Núevo Letrero</h2>
                </div>
                <form onSubmit={(e) => formCreateSing(e)} className="mb-4 p-4 border rounded shadow-lg bg-white mx-auto">


                    {/* Campo Nombre  */}
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Nombre</label>
                            <input type="text" name="nombre" className="form-control"
                                placeholder="Ej: Dante Alighieri" required />

                        </div>
                        {/* Campo Número  */}

                        <div className="col-md-6">
                            <label className="form-label fw-bold">Número</label>
                            <input type="text" name="documento" className="form-control"
                                placeholder="963852741" />
                        </div>
                    </div>

                    {/* <!-- Campo Fecha Inicio */}
                    <div className="row g-3 mt-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Fecha Inicio</label>
                            <input type="date" name="fecha" className="form-control" required />

                        </div>
                        {/* <!-- Campo Fecha Caduca */}

                        <div className="col-md-6">
                            <label className="form-label fw-bold">Fecha Caduca</label>
                            <input type="date" name="fecha" className="form-control" required />


                        </div>
                    </div >




                    {/* Botón Crear */}
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary ps-4 pe-4" >
                            <i className="bi bi-plus-circle"></i> Crear
                        </button>
                    </div >

                </form >

            </section >



        </>
    )
}
