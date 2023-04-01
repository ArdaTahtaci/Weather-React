import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import HourlyCode from './HourlyCode'

export default function Current() {

    const current = useSelector(state => state.selectedCityData.current)
    const param = useParams()
    const cityName = param.city

    return (
        <div className='current pb-0 my-2 mx-auto'>
            <nav className='current-heading d-flex'>
                <h3 className='my-1 mx-2'>{cityName}, </h3>
                <h5 className='my-auto'>{current.time} Time Zone {current.timezone}</h5>
            </nav>
            <Container className='current-body'>

                <h1>{current.temperature}°</h1>
                <h3 className='ms-4 my-auto'><HourlyCode code={current.code} /></h3>
                <h3 className='pb-2 mb-0'>Day {current.todayMaxTemp}° Night {current.todayMinTemp}°</h3>


            </Container>
        </div>
    )
}
