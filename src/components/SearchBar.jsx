import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectCity } from '../redux/actions'

export default function SearchBar() {

  const [input, setInput] = useState("")
  const [cityData, setCityData] = useState()
  const [shouldSuggest, setSohuldSuggest] = useState(true)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://geocoding-api.open-meteo.com/v1/search?name=" + input + "&count=1")
      .then(res => res.json())
      .then((data) => {
        if (data.results !== undefined) {
          setCityData(data)
          setSohuldSuggest(false)
        }
        else {
          setCityData(undefined)
          setSohuldSuggest(true)
        }
      })
      .catch(err => console.log(err))
  }, [input])


  function handleChange(e) {
    setInput(e.target.value)
  }

  function select() {
    if (cityData !== undefined) {
      dispatch(selectCity({
        lat: cityData.results[0].latitude,
        long: cityData.results[0].longitude
      }))
    }
    setInput(cityData.results[0].name)
    setSohuldSuggest(true)
    navigate("/" + cityData.results[0].name)
  }

  return (
    <div>
      <div className='d-flex'>
        <input className='form-control me-2' value={input} onChange={(e) => handleChange(e)} placeholder='Search city' />
        <button onClick={select} className="btn btn-outline-info" type='button'>Search</button>
      </div>
      {shouldSuggest ? <div></div> :
        <div>
          <ul className='list-group'>
            <li className='list-group-item' onClick={select}>{cityData.results[0].name} / {cityData.results[0].country}</li>
          </ul>
        </div>
      }

    </div>


  )
}
