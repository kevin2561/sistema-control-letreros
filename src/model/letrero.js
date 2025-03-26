export class Letrero {
    constructor(cliente, apellido, telefono, fechInicio, fechaCaducada, imagen) {
        this.cliente = cliente
        this.apellido = apellido || ""
        this.telefono = telefono || ""
        this.fechInicio = fechInicio
        this.fechaCaducada = fechaCaducada
        this.imagen = imagen || null

    }
    // getNombre() {
    //     return this.nombre;
    // }
    // setNombre(nombre) {
    //     return this.nombre = nombre
    // }

    // getTelefono() {
    //     return this.telefono;
    // }
    // setTelefono(telefono) {
    //     return this.telefono = telefono
    // }
    // getFechaInicio() {
    //     return this.fechInicio;
    // }
    // setFechaInicio(fechInicio) {
    //     return this.fechInicio = fechInicio
    // }
    // getFechaCaducada() {
    //     return this._fechaCaducada;
    // }
    // setFechaCaducada(_fechaCaducada) {
    //     return this._fechaCaducada = _fechaCaducada
    // }
}