export class Letrero {
    constructor(nombre, telefono, fechInicio, fechaCaducada) {
        this.nombre = nombre
        this.telefono = telefono
        this.fechInicio = fechInicio
        this._fechaCaducada = fechaCaducada

    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        return this.nombre = nombre
    }

    getTelefono() {
        return this.telefono;
    }
    setTelefono(telefono) {
        return this.telefono = telefono
    }
    getFechaInicio() {
        return this.fechInicio;
    }
    setFechaInicio(fechInicio) {
        return this.fechInicio = fechInicio
    }
    getFechaCaducada() {
        return this._fechaCaducada;
    }
    setFechaCaducada(_fechaCaducada) {
        return this._fechaCaducada = _fechaCaducada
    }
}