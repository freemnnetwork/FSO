import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

const [countries, setCountries] = useState([])


useEffect(() => {
  axios.get("https://restcountries.com/v3.1/all").then(response => 
    setCountries(
      response.data.map(({ name, capital, area, languages, flags }) => ({
        name: name.common,
        capital,
        area,
        languages,
        flags
      }))
    )
  )
}, [])

console.log(countries)

const App = () => {
  return (
    <div>App</div>
  )
}

export default App