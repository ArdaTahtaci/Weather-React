import { FETCH_CITY_DATA, SELECT_CITY } from "./types.js";

export function selectCity(cityCoordinates) {
    return {
        type: SELECT_CITY,
        payload: cityCoordinates
    }
}

export function setCityData(data) {
    return {
        type: FETCH_CITY_DATA,
        payload: data
    }
}