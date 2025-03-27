import React from 'react'
import { deleteSing } from '../services/servicios.';

export default function EliminarLetrero({ letrero, onDelete, setLoading }) {


    const formDeleteSing = async (e) => {
        e.preventDefault();
        document.activeElement.blur();

        try {
            setLoading(true)
            const result = await deleteSing(Number(letrero.idLetrero))
            if (result === 1) {
                // console.log(`Exito`)

                if (onDelete) onDelete(); // Aquí se vuelve a obtener la lista actualizada

            } else {
                console.log(`Error al elminar`)

            }

        } catch (error) {
            console.log("Error ElmininarLetrero: " + error)

        } finally {
            setLoading(false)
        }

    }
    return (
        <>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="modalDeleteSing" tabIndex="-1" aria-labelledby="modalDeleteSingLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalDeleteSingLabel">Eliminar Letrero</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={(e) => formDeleteSing(e)}>
                            <div className="modal-body">
                                ¿Está seguro de eliminar al Sr(a). {letrero.cliente}?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Eliminar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
