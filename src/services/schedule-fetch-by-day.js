import dayjs from "dayjs"
import { apiConfig }  from "./api-config"


export async function scheduleFetchByDay({ date }) {
    try {
    const response = await fetch(`${apiConfig.baseURL}/schedules`)

    const data = await response.json()

    const dailySchedules = data.filter((schedules) => dayjs(data).isSame(schedule. when, "day"))

    return dailySchedules
    }catch (error) {
       console.log(error)
       alert("Ocorreu um erro ao buscar os agendamentos para o dia selecionado.") 
    }
}