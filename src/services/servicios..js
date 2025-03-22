
const url = "";
export const leerServicio = async (funcion) => {

    const response = await fetch(`${this.url}`)
    const data = await response.json()
    // funcion(data)
    console.log(data);

}

export const crearLetrero = async (letrero) => {
    try {
        const response = await fetch(`${url}/post`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(letrero),
        });

        if (!response.ok) throw new Error("Error al crear el letrero");

        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }


}