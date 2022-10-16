import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
    const [countries, setCountries] = useState([])
    const [query, setQuery] = useState('')


    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
        .then(res => setCountries(res.data))
    },[])

    const inputHanlder = (event) => {
        setQuery(event.target.value)
    }

    const buttonHanlder = () => {
       setShow(!show)

    }

    const filtered = countries.filter(item => item.name.common.toLowerCase().includes(query)).map(item => <p key={item.name.common} >{item.name.common}</p>)
    

  return (
    <div>
        <input value={query} onChange={inputHanlder} />
        {filtered.length > 10 && <p>Too many matches, specify another filter</p>}
        {filtered.length < 10 && filtered.length > 1 && filtered}
        {filtered.length === 1 && countries.filter(item => item.name.common.toLowerCase().includes(query)).map(item => 
        <div key={item.name.common}>
            <h1>{item.name.common}</h1>
            <p>capital {item.capital}</p>
            <p>area {item.area}</p>
            <h2>languages:</h2>
            {Object.values(item.languages).map(item => <li key={item}>{item}</li>)}
            <img src={item.flags.png} />
        </div>)}
    </div>
  )
}

export default App