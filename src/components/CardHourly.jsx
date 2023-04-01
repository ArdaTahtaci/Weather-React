import React, { useEffect, useState } from 'react'
import { Card, CardGroup, Container, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Loader from './Loader'
import HourlyCode from './HourlyCode'

export default function CardHourly(props) {

    const data = useSelector(state => state.selectedCityData.hourly)
    const [isLoaded, setIsLoaded] = useState(true)

    useEffect(() => {
        if (data.next24Hour !== undefined) setIsLoaded(false)
    }, [data])

    return (

        <div className='mx-auto'>
            {isLoaded ? <Loader /> :
                <div>
                    <CardGroup className='card-group'>

                        <Card className='hourly-card mx-2'>
                            <Container>
                                <Row>
                                    <h5>{data.next24Hour[props.index]}</h5>
                                    <h3 className='mt-2'><HourlyCode code={data.code[props.index]} /></h3>
                                    <h2>{data.temperature[props.index]}°</h2>
                                    <p>Feels like {data.feelsLike[props.index]}°</p>
                                    <p>Precipitation probability <h5>%{data.precipitationProbability[props.index]}</h5></p>
                                </Row>
                            </Container>
                        </Card>


                    </CardGroup>
                </div>
            }


        </div>


    )
}
