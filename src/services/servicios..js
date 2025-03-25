
const url = "http://localhost:9090/letrero";
export const leerServicio = async () => {
    try {
        const response = await fetch(`${url}/get`)
        if (!response.ok) {
            console.log(`Error R: ${response.status}`)
        }
        const data = await response.json()
        console.log(data)
        return data;

    } catch (error) {
        console.log(`Error Catch: ${error}`)
    }
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