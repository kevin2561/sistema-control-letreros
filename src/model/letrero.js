export class letrero {
    constructor(nombre, telefono, fechInicio, fechaCaducada) {
        this._nombre = nombre
        this._telefono = telefono
        this._fechInicio = fechInicio
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
        return this._fechInicio;
    }
    setFechaInicio(_fechInicio) {
        return this._fechInicio = _fechInicio
    }
    getFechaCaducada() {
        return this._fechaCaducada;
    }
    setFechaCaducada(_fechaCaducada) {
        return this._fechaCaducada = _fechaCaducada
    }
}