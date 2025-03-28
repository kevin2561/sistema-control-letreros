import React, { useEffect, useRef, useState } from 'react'
import { Letrero } from '../model/letrero'
import { updateServiceSing } from '../services/servicios.'
import Respuesta from './Respuesta'

export default function ActualizarLetrero({ letrero, onUpdate, setLoading }) {
    const [formData, setFormData] = useState({
        "cliente": "",
        "telefono": "",
        "apellido": "",
        "fechaInicio": "",
        "fechaCaducada": "",
        "imagen": null,
    })
    const [mensaje, setMensaje] = useState("")
    const [tipoMensaje, setTipoMensaje] = useState(false);
    const fileInputRef = useRef(null);

    const initSing = () => {
        if (letrero) {
            setFormData({
                "cliente": letrero.cliente,
                "apellido": letrero.apellido || "",
                "telefono": letrero.telefono || "",
                "fechaInicio": letrero.fechaInicio,
                "fechaCaducada": letrero.fechaCaducada,
                "imagen": null,
            })
        }
        if (fileInputRef.current) {
            fileInputRef.current.value = "";
        }
    }

    useEffect(() => {
        initSing()
    }, [letrero])

    const handlerOnchange = (e) => {
        const { name, value, files } = e.target;
        if (name === "imagen") {
            setFormData({ ...formData, imagen: files[0] });

        } else {
            setFormData({ ...formData, [name]: value });

        }
    }

    const updateSing = async (e) => {
        e.preventDefault();
        document.activeElement.blur();

        const letreroActualizado = new Letrero(formData.cliente, formData.apellido, formData.telefono, formData.fechaInicio, formData.fechaCaducada, formData.imagen)

        try {
            setLoading(true)
            const result = await updateServiceSing(letrero.idLetrero, letreroActualizado);
            console.log("Result: " + result);
            if (onUpdate) onUpdate();
            setMensaje("")
            setTimeout(() => {
                setMensaje(`Letrero N°${letrero.idLetrero} Actualizado .`)
                setTipoMensaje(true)
            }, 10);

        } catch (error) {
            setMensaje("")
            setTimeout(() => {
                setMensaje(`Error, al actualizar el Letrero N°${letrero.idLetrero}`)
                setTipoMensaje(false)
            }, 10);
        }
        finally {
            setLoading(false)
        }

    }


    return (
        <>
            <Respuesta mensaje={mensaje} tipo={tipoMensaje} />
            <div className="modal fade" id="modalUpdateSing" tabIndex="-1" aria-labelledby="modalUpdateSingLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalUpdateSingLabel">Actualizar Letrero N°{letrero.idLetrero}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={(e) => updateSing(e)}>
                            <div className="modal-body">
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


                                {/* <!-- Campo Imagen*/}
                                <div className="row g-3 mt-3">
                                    <div className="col-md-12">
                                        <label htmlFor="formFile" className="form-label fw-bold">Subir Imagen (Opcional)</label>
                                        <input name='imagen' ref={fileInputRef} accept=".jpg, .jpeg, .png" onChange={(e) => handlerOnchange(e)} className="form-control" type="file" id="formFile" />
                                    </div>
                                </div >

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Actualizar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
