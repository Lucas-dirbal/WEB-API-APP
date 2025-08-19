import api from "../api";

export async function buscaUSuario(nome) {
    try { const resultado = await api.get(`/users?login=${nome}`);
        return resultado.data[0];
    } catch (error) { console.log(error);
    }
}








