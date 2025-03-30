// const url = "http://localhost:9090/letrero";
const url= "https://sistema-letreros-railway-production-56b7.up.railway.app/letrero"

export const readSing = async () => {
    try {
        const response = await fetch(`${url}/get`)
        if (!response.ok) throw new Error("Error al cargar los datos");
        const data = await response.json()
        // console.log(data)
        return data;

    } catch (error) {
        throw error;
    }
}

export const createServiceSing = async (letrero) => {
    try {
        const formData = formDataScheme(letrero)
        const response = await fetch(`${url}/post`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) throw new Error("Error al crear el letrero");
        const data = await response.json();
        // console.log(data)
        return data;
    }
    catch (error) {
        throw error;
    }
}

export const updateServiceSing = async (id, letrero) => {
    try {
        const formData = formDataScheme(letrero)
        const response = await fetch(`${url}/put/${id}`, {
            method: "PUT",
            body: formData
        })
        if (!response.ok) throw new Error("Error al crear el letrero");
        const data = await response.json()
        // console.log("PUT: " + data)
        return data

    } catch (error) {
        // console.log("Error Servicio: " + error)
        throw error;


    }


}

export const deleteSing = async (id) => {
    try {
        const response = await fetch(`${url}/delete/${id}`, {
            method: "DELETE",
        })
        const data = await response.json();
        // console.log(data)
        return data;

    } catch (error) {
        console.log(error)
        throw error;

    }


}


const formDataScheme = (letrero) => {
    const formData = new FormData();
    formData.append("cliente", letrero.cliente ?? "");
    formData.append("apellido", letrero.apellido ?? "");
    formData.append("fechaInicio", letrero.fechInicio ?? "");
    formData.append("fechaCaducada", letrero.fechaCaducada ?? "");

    if (letrero.telefono != null && String(letrero.telefono).trim() !== "") {
        formData.append("telefono", letrero.telefono);
    }
    if (letrero.imagen) {
        formData.append("imagen", letrero.imagen);
    }
    return formData;


}