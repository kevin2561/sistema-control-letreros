import React from 'react'

export default function ActualizarLetrero() {
    return (
        <>
            <div className="modal fade" id="modalUpdateSing" tabIndex="-1" aria-labelledby="modalUpdateSingLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="modalUpdateSingLabel">Actualizar Letrero</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form onSubmit={(e) => updateSing(e)}>
                            <div className="modal-body">
                                Esta seguro de eliminar el
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-primary">Eliminar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
