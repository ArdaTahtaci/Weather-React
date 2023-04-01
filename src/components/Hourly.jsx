import React, { useEffect, useState } from 'react'
import { Carousel } from 'react-bootstrap'
import CardHourly from './CardHourly'

export default function Hourly() {

    return (

        <div className='my-4'>
            <div>
                <Carousel className='carousel-fade' indicators={false}>
                    <Carousel.Item className='d-flex carousel-item'>
                        <CardHourly index={0} />
                        <CardHourly index={1} />
                    </Carousel.Item>
                    <Carousel.Item className='d-flex carousel-item'>
                        <CardHourly index={2} />
                        <CardHourly index={3} />
                    </Carousel.Item>
                    <Carousel.Item className='d-flex carousel-item'>
                        <CardHourly index={4} />
                        <CardHourly index={5} />
                    </Carousel.Item>
                    <Carousel.Item className='d-flex carousel-item'>
                        <CardHourly index={6} />
                        <CardHourly index={7} />
                    </Carousel.Item>
                    <Carousel.Item className='d-flex carousel-item'>
                        <CardHourly index={8} />
                        <CardHourly index={9} />
                    </Carousel.Item>
                    <Carousel.Item className='d-flex carousel-item'>
                        <CardHourly index={10} />
                        <CardHourly index={11} />
                    </Carousel.Item>
                    <Carousel.Item className='d-flex carousel-item'>
                        <CardHourly index={12} />
                        <CardHourly index={13} />
                    </Carousel.Item>
                    <Carousel.Item className='d-flex carousel-item'>
                        <CardHourly index={14} />
                        <CardHourly index={15} />
                    </Carousel.Item>
                    <Carousel.Item className='d-flex carousel-item'>
                        <CardHourly index={16} />
                        <CardHourly index={17} />
                    </Carousel.Item>
                    <Carousel.Item className='d-flex carousel-item'>
                        <CardHourly index={18} />
                        <CardHourly index={19} />
                    </Carousel.Item>
                    <Carousel.Item className='d-flex carousel-item'>
                        <CardHourly index={20} />
                        <CardHourly index={21} />
                    </Carousel.Item>
                    <Carousel.Item className='d-flex carousel-item'>
                        <CardHourly index={22} />
                        <CardHourly index={23} />
                    </Carousel.Item>


                </Carousel>
            </div>


        </div>
    )
}
