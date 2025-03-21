const url = "";
export const leerServicio = async () => {

    const response = await fetch(`${this.url}`)
    const data = await response.json()
    console.log(data);

}

export const crearLetrero = async (letrero) => {
    const response = await fetch(`${this.url}`)
    const data = await response.json({
        method: body,
        body: "",
    })

}