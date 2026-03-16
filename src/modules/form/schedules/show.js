import dayjs from "dayjs"

export function schedulesShow({dailySchedules}){
    try {

        dailySchedules.forEach((schedule) => {
            const scheduleElement = document.createElement("div")
            scheduleElement.classList.add("schedule-item")
            const time = dayjs(schedule.when).format("HH:mm")
            scheduleElement.innerHTML = `
                <p><strong>Cliente:</strong> ${schedule.nome}</p>
                <p><strong>Serviço:</strong> ${schedule.servico}</p>
                <p><strong>Data e Hora:</strong> ${time}</p>
            `
            document.getElementById("schedulesContainer").appendChild(scheduleElement)

            
        })

    }catch (error){
        alert("nao foi pssivel carregar os agendamentos")
        console.log(error)
    }
}