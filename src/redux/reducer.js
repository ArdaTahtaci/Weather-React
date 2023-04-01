import { FETCH_CITY_DATA, SELECT_CITY } from "./types.js";

const initialState = {
    selectedCityCoordinates: {
        lat: undefined,
        long: undefined
    },
    selectedCityData: {
        isDefined: false,
        current: {
            temperature: undefined,
            wind: undefined,
            time: undefined,
            code: undefined,
            visibilty: undefined,
            humidty: undefined,
            todayMaxTemp: undefined,
            todayMinTemp: undefined,
            timezone: undefined
        },
        hourly: {
            next24Hour: undefined,
            temperature: undefined,
            precipitationProbability: undefined,
            feelsLike: undefined,
            code: undefined
        },
        daily: undefined
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SELECT_CITY: return {
            ...state,
            selectedCityCoordinates: {
                lat: action.payload.lat,
                long: action.payload.long
            }
        }

        case FETCH_CITY_DATA: return {
            ...state,
            selectedCityData: {
                isDefined: true,
                current: setCurrent(action.payload.hourly, action.payload.daily, action.payload.timezone),
                hourly: setHourly(action.payload.hourly),
                daily: setDaily(action.payload.daily)
            }
        }

        default: return state
    }
}
function getDay(day) {
    const dayNames = ["Monday", "Tuesday", "Wednesday", "Thirsday", "Friday", "Saturday", "Sunday"]
    return dayNames[day - 1]
}

function setDaily(daily) {

    let index = new Date().getDay()
    let day = []
    let allDays = []
    for (var i = 0; i < 16; i++) {
        if (index > 7) {
            index = 1
            continue
        }
        else {
            day.push(getDay(index))
            index++
        }
    }

    for (var i = 0; i < 14; i++) {
        const element = {
            day: day[i],
            code: daily.weathercode[i],
            maxTemp: daily.temperature_2m_max[i],
            minTemp: daily.temperature_2m_min[i],
            sunrise: daily.sunrise[i],
            sunset: daily.sunset[i],
            maxPrecipitationProbability: daily.precipitation_probability_max[i]
        }
        allDays.push(element)
    }

    return allDays
}

function setHourly(hourly) {

    let hour = new Date().getHours()

    let next24Hour = []
    let temperature = []
    let precipitationProbability = []
    let feelsLike = []
    let code = []

    for (var i = 0; i < 48; i++) {
        if (i + 1 > hour && i + 1 < hour + 26) {
            temperature.push(hourly.temperature_2m[i])
            precipitationProbability.push(hourly.precipitation_probability[i])
            feelsLike.push(hourly.apparent_temperature[i])
            code.push(hourly.weathercode[i])
        }
    }
    for (var i = 0; i < 25; i++) {
        if (hour < 10) next24Hour.push("0" + hour++ + ":00")
        else next24Hour.push(hour++ + ":00")
        if (hour === 24) {
            hour = 0
        }
    }

    return {
        code: code,
        next24Hour: next24Hour,
        temperature: temperature,
        precipitationProbability: precipitationProbability,
        feelsLike: feelsLike
    }
}

function setCurrent(hourly, daily, timezone) {

    const hour = new Date().getHours()
    let minute = new Date().getMinutes()
    if (minute < 10) {
        minute = "0" + minute
    }
    const time = hour + ":" + minute

    return {
        temperature: hourly.temperature_2m[hour],
        wind: hourly.windspeed_10m[hour],
        time: time,
        code: hourly.weathercode[hour],
        visibilty: hourly.visibility[hour],
        humidty: hourly.relativehumidity_2m[hour],
        todayMaxTemp: daily.temperature_2m_max[0],
        todayMinTemp: daily.temperature_2m_min[0],
        timezone: timezone

    }
}


export default reducer