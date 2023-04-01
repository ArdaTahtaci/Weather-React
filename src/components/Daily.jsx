import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Loader from './Loader'
import HourlyCode from './HourlyCode'

export default function Daily() {

    const data = useSelector(state => state.selectedCityData.daily)
    const [isLoaded, setIsLoaded] = useState(true)

    useEffect(() => {
        if (data !== undefined) setIsLoaded(false)
    }, [data])

    return (
        <div>
            {isLoaded ? <Loader /> : (
                <div className='daily'>
                    <Table className='daily-table' responsive hover>
                        <thead>
                            <tr>
                                <th className='my-auto'><h4 >Days</h4></th>
                                <th className='my-auto'><h4>Temperature Max</h4></th>
                                <th className='my-auto'><h4>Temperature Min</h4></th>
                                <th className='my-auto'><h4>Weather</h4></th>
                                <th className='my-auto'><h4>Precipitation Probability</h4></th>
                                <th className='my-auto'><h4>Sunrise</h4></th>
                                <th className='my-auto'><h4>Sunset</h4></th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((day, index) => {
                                return (
                                    <tr key={index}>
                                        <td> <h5>{day.day}</h5></td>
                                        <td> <h6>{day.maxTemp}°</h6></td>
                                        <td> <h6>{day.minTemp}°</h6></td>
                                        <td> <h6><HourlyCode code={day.code} /></h6></td>
                                        <td> {day.maxPrecipitationProbability === null ? <h6>-</h6> : <h6>% {day.maxPrecipitationProbability}</h6>}</td>
                                        <td> <h6>{day.sunrise.substring(day.sunrise.length - 5, day.sunrise.length)}</h6></td>
                                        <td> <h6>{day.sunset.substring(day.sunset.length - 5, day.sunset.length)} </h6></td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </Table>
                </div>
            )}

        </div>
    )
}
