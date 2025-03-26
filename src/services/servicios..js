
const url = "http://localhost:9090/letrero";
export const readSing = async () => {
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


export const createSing = async (letrero) => {
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


export const updateSing = async (id) => {
    const response = await fetch(`${url}/put/${id}`)
    const data = await response.json()
    consolelog(data)

}

export const deleteSing = async (id) => {
    const response = await fetch(`${url}/delete/${id}`)
    const data = await response.json()
    consolelog(data)

}