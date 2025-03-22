import React, { useState } from 'react'
import './CrearLetrero.css'
import { crearLetrero } from '../services/servicios.'
import { Letrero } from '../model/letrero'
export default function CrearLetrero() {
    const today = () => {
        const date = new Date()
        const anio = date.getFullYear()
        const mes = String(date.getMonth() + 1).padStart(2, "0")
        const dia = String(date.getDay()).padStart(2, "0")
        return `${anio}-${mes}-${dia}`
        console.log(dateToday)
    }


    const [formData, setFormData] = useState({
        "nombre": "",
        "telefono": "",
        "fechaInicio": today(),
        "fechaCaducada": "",

    })


    const handlerOnchange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })

    }

    const formCreateSing = async (e) => {
        e.preventDefault();
        console.log("form")
        const nuevoLetrero = new Letrero(formData.nombre, formData.telefono, formData.fechaInicio, formData.fechaCaducada)
        try {
            crearLetrero(nuevoLetrero)
            // console.log('Letrero creado:', respuesta);
            setFormData({
                nombre: "",
                telefono: "",
                fechaInicio: today(),
                fechaCaducada: ""
            })


        } catch (error) {
            console.log(error)

        }
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
                                onChange={(e) => handlerOnchange(e)}
                                placeholder="Ej: Dante Alighieri" value={formData.nombre} required />

                        </div>
                        {/* Campo Número  */}

                        <div className="col-md-6">
                            <label className="form-label fw-bold">Teléfono (Opcional)</label>
                            <input type="text" name="telefono" className="form-control"
                                placeholder="Ej: 963852741" maxLength={9} onChange={(e) => handlerOnchange(e)} value={formData.telefono} />
                        </div>
                    </div>

                    {/* <!-- Campo Fecha Inicio */}
                    <div className="row g-3 mt-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Fecha Inicio</label>
                            <input type="date" name="fechaInicio" onChange={(e) => handlerOnchange(e)} className="form-control" value={formData.fechaInicio} required />

                        </div>
                        {/* <!-- Campo Fecha Caduca */}

                        <div className="col-md-6">
                            <label className="form-label fw-bold">Fecha Caduca</label>
                            <input type="date" name="fechaCaducada" onChange={(e) => handlerOnchange(e)} className="form-control" value={formData.fechaCaducada} required />


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
