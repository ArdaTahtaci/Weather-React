import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'


export default function Nav() {

    const [inputCity, setInputCity] = useState()

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary my-3">
                <div className="container-fluid mt-2">
                    <Link className='navbar-brand my-1' to="/"><h2>React Weather</h2></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className='d-flex ms-auto'>
                            <div className='my-2'>
                                <SearchBar />
                            </div>


                        </form>

                    </div>
                </div>
            </nav>
        </div>
    )
}
