import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import { hoursLoad } from "./hours-load.js"

function initForm() {
    const form = document.querySelector("form")
    const clientName = document.getElementById("contato")
    const selectedDate = document.getElementById("selectedDate")
    const emailInput = document.querySelector('input[name="email"]')
    const whatsappInput = document.querySelector('input[name="whatsapp"]')
    const servicoSelect = document.querySelector('select[name="servico"]')
    const mensagemTextarea = document.querySelector('textarea[name="mensagem"]')

    if (!form || !clientName || !selectedDate) {
        console.warn("O formulário ou alguns campos não foram encontrados no DOM.")
        return
    }

    const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

    // Carrega a data atual
    selectedDate.value = inputToday
    selectedDate.min = inputToday

    form.onsubmit = async (event) => {
        event.preventDefault()

        try {
            const name = (clientName.value || "").trim()
            if (!name) {
                return alert("Informe o nome do cliente!")
            }

            const email = (emailInput?.value || "").trim()
            const whatsapp = (whatsappInput?.value || "").trim()
            const servico = servicoSelect?.value || ""
            const mensagem = (mensagemTextarea?.value || "").trim()

            const hours = 0 // TODO: implement hoursLoad properly
            const when = dayjs(selectedDate.value).add(hours, "hour")
            const id = new Date().getTime()

            await scheduleNew({
                nome: name,
                email,
                whatsapp,
                servico,
                mensagem,
                when: when.toISOString(),
                id,
            })
        } catch (error) {
            alert("Ocorreu um erro ao enviar o orçamento.")
            console.error(error)
        }
    }
}

document.addEventListener("DOMContentLoaded", initForm)

