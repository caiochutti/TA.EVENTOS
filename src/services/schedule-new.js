import { apiConfig } from "./api-config";

export async function scheduleNew({ nome, email, whatsapp, servico, mensagem, data, when, id }) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, email, whatsapp, servico, mensagem, data, when, id })
        })
        alert("agendamento realizado com sucesso!")
    } catch (error) {
        console.log(error)
        alert("ocorreu um erro ao agendar o serviço.")
    }
}