const url = "http://localhost:9090/letrero";

export const readSing = async () => {
    try {
        const response = await fetch(`${url}/get`)
        if (!response.ok) {
            console.log(`Error R: ${response.status}`)
        }
        const data = await response.json()
        // console.log(data)
        return data;

    } catch (error) {
        console.log(`Error Catch: ${error}`)
    }
}


export const createServiceSing = async (letrero) => {
    try {
        const formData = new FormData();
        formData.append("cliente", letrero.cliente ?? "");
        formData.append("apellido", letrero.apellido ?? "");
        formData.append("fechaInicio", letrero.fechInicio ?? "");
        formData.append("fechaCaducada", letrero.fechaCaducada ?? "");

        if (letrero.telefono && letrero.telefono.trim() !== "") {
            formData.append("telefono", letrero.telefono);
        }
        if (letrero.imagen) {
            formData.append("imagen", letrero.imagen);
        }


        const response = await fetch(`${url}/post`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) throw new Error("Error al crear el letrero");
        const data = await response.json();
        console.log(`Exito: ${data}`)
        return data;
    }
    catch (error) {
        console.error(error);
    }


}


export const updateServiceSing = async (id) => {
    const response = await fetch(`${url}/put/${id}`)
    const data = await response.json()
    consolelog(data)

}

export const deleteSing = async (id) => {
    try {
        const response = await fetch(`${url}/delete/${id}`, {
            method: "DELETE",
        })
        const data = await response.json();
        return data;
        consolelog(data)

    } catch (error) {
        consolelog(error)

    }


}