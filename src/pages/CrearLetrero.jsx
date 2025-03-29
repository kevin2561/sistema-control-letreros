import React, { useRef, useState } from 'react'
import './CrearLetrero.css'
import { Letrero } from '../model/letrero'
import { createServiceSing } from '../services/servicios.'
import Respuesta from '../components/Respuesta'
export default function CrearLetrero() {
    const [mensaje, setMensaje] = useState("");
    const [tipoMensaje, setTipoMensaje] = useState(false);

    const today = () => {
        const date = new Date();
        const anio = date.getFullYear();
        const mes = String(date.getMonth() + 1).padStart(2, "0");
        const dia = String(date.getDate()).padStart(2, "0");
        return `${anio}-${mes}-${dia}`;
    }

    const [formData, setFormData] = useState({
        "cliente": "",
        "telefono": "",
        "apellido": "",
        "fechaInicio": today(),
        "fechaCaducada": "",
        "imagen": null,
    })

    const fileInputRef = useRef(null);

    const handlerOnchange = (e) => {
        const { name, value, files } = e.target;
        if (name === "imagen") {
            setFormData({ ...formData, imagen: files[0] });

        } else {
            setFormData({ ...formData, [name]: value });

        }
    }

    const formCreateSing = async (e) => {
        e.preventDefault();
        const nuevoLetrero = new Letrero(formData.cliente, formData.apellido, formData.telefono, formData.fechaInicio, formData.fechaCaducada, formData.imagen)
        try {
            const result = await createServiceSing(nuevoLetrero)
            setMensaje("")
            setTimeout(() => {
                setMensaje(`Letrero N°${result.idLetrero} Creado Exitosamente.`)
                setTipoMensaje(true)
            }, 10);

            // console.log(result.idLetrero)
            setFormData({
                cliente: "",
                apellido: "",
                telefono: "",
                fechaInicio: today(),
                fechaCaducada: "",
                imagen: null
            })
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }

        } catch (error) {
            // console.log("Error Page " + error)
            setMensaje("")
            setTimeout(() => {
                setMensaje("Error, Intentelo de nuevo.")
                setTipoMensaje(false)
            }, 10);

        }
    }
    return (
        <>
            <Respuesta mensaje={mensaje} tipo={tipoMensaje} />
            <section id='form-create-sign'>
                <div className='text-center my-3'>
                    <h2 className='h2'>Crear Nuevo Letrero</h2>
                </div>
                <form onSubmit={(e) => formCreateSing(e)} className="mb-4 p-4 border rounded shadow-lg bg-white mx-auto">


                    {/* Campo Nombre  */}
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Nombre</label>
                            <input type="text" name="cliente" className="form-control"
                                onChange={(e) => handlerOnchange(e)}
                                placeholder="Ej: Dante Alighieri" value={formData.cliente} required />

                        </div>

                        {/* Campo APpellido  */}
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Apellido (Opcional)</label>
                            <input type="text" name="apellido" className="form-control"
                                placeholder="Ej: Lima Rosa" onChange={(e) => handlerOnchange(e)} value={formData.apellido} />
                        </div>
                    </div>

                    {/* CAMPO DE TELEFONO */}
                    <div className="row g-3 mt-3" >
                        <div className="col-md-12">
                            <label className="form-label fw-bold">Teléfono (Opcional)</label>
                            <input type="text" name="telefono" className="form-control"
                                placeholder="Ej: 963852741" maxLength={12} onChange={(e) => handlerOnchange(e)} value={formData.telefono} />
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
                            <label className="form-label fw-bold">Fecha Caducada</label>
                            <input type="date" name="fechaCaducada" onChange={(e) => handlerOnchange(e)} className="form-control" value={formData.fechaCaducada} required />
                        </div>
                    </div >

                    {/* <!-- Campo Imagen*/}
                    <div className="row g-3 mt-3">
                        <div className="col-md-12">
                            <label htmlFor="formFile" className="form-label">Subir Imagen (Opcional)</label>
                            <input name='imagen' ref={fileInputRef} accept=".jpg, .jpeg, .png" onChange={(e) => handlerOnchange(e)} className="form-control" type="file" id="formFile" />
                        </div>
                    </div >

                    {/* Botón Crear */}
                    <div className="text-center mt-4">
                        <button type="submit" className="btn btn-primary ps-4 pe-4" >
                            <i className="bi bi-plus-circle"></i> Crear Letrero
                        </button>
                    </div >

                </form >

            </section >
        </>
    )
}
