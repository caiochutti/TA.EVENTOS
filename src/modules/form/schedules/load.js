import { scheduleFetchByDay } from "../../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../hours-load.js"
import {schedulesShow} from "../schedules/show.js"

export function schedulesDay(){
    // Renderiza as horas disponiveis.

    const selectedDate = document.getElementById("data")
}

const dailySchedules = await scheduleFetchByDay({data})

schedulesShow({dailySchedules})