import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'

export default function Home() {

    const navigate = useNavigate()

    useEffect(() => {
        navigate("/Ankara")
    }, [])
    return (
        <div>
            <Nav />

        </div>
    )
}
