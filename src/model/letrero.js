export class Letrero {
    constructor(cliente, apellido, telefono, fechInicio, fechaCaducada, imagen) {
        this.cliente = cliente
        this.apellido = apellido || null
        this.telefono = telefono || null
        this.fechInicio = fechInicio
        this.fechaCaducada = fechaCaducada
        this.imagen = imagen || null

    }

}