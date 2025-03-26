import React from 'react'

export default function EliminarLetrero({ letrero }) {

    const deleteSing = (e) => {
        e.preventDefault();
        console.log(letrero)

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
                        <form onSubmit={(e) => deleteSing(e)}>
                            <div className="modal-body">
                                ¿Está seguro de eliminar al Sr(a). {letrero.cliente}?
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Eliminar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
