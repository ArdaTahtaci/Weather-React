import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { selectCity, setCityData } from '../redux/actions'
import Current from './Current'
import Loader from './Loader'
import Nav from './Nav'
import Hourly from "./Hourly"
import { useParams } from 'react-router-dom'
import Daily from './Daily'

export default function City() {

    const [isLoaded, setIsLoaded] = useState(true)

    const data = useSelector(state => state.selectedCityData)
    const coordinates = useSelector(state => state.selectedCityCoordinates)
    const dispatch = useDispatch()
    const params = useParams()
    const city = params.city

    useEffect(() => {
        fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + city + "&count=1")
            .then(res => res.json())
            .then((data) => {
                if (data.results !== undefined) {
                    dispatch(selectCity({
                        lat: data.results[0].latitude,
                        long: data.results[0].longitude
                    }))

                }
                console.log(data)
            }).catch(err => console.log(err.message))
    }, [])

    useEffect(() => {
        if (coordinates.lat !== undefined) {
            fetch("https://api.open-meteo.com/v1/forecast?latitude=" + coordinates.lat + "&longitude=" + coordinates.long + "&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,rain,weathercode,visibility,windspeed_10m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset,precipitation_probability_max&forecast_days=14&timezone=auto")
                .then(res => res.json())
                .then((data) => {
                    dispatch(setCityData(data))
                })
                .catch(err => console.log(err.message))
        }
    }, [coordinates])

    useEffect(() => {
        setIsLoaded(false)
    }, [data])

    if (isLoaded) return <Loader />
    else return (

        <div>
            <Nav />
            <Row>
                <Current />
            </Row>
            <Row>
                <Hourly />
            </Row>
            <Row>
                <Daily />
            </Row>
        </div>

    )
}
