import React, {useState, useEffect} from 'react'
import axios from 'axios'

// i did up to 2.13 couldnt finish 2.14 because problems with my api key

const App = () => {
  const [country, setCountry] = useState([])
  const [query, setQuery] = useState('')
  const [show, setShow] = useState([])


  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then(response => setCountry(response.data.map(({ name, capital, area, languages, flags }) => ({
      name: name.common,
      capital,
      area,
      languages,
      flags
    }))))
  },[])

  const handleInput = (event) => {
    setQuery(event.target.value)
    setShow({})
  }

  const buttonHandler = (name) => () => setShow(filteredFilter.filter(item => item.name.includes(name))[0])
 
  const filteredFilter = country.filter(item => item.name.toLowerCase().includes(query))

  return (
    <div>
      find countries <input value={query} onChange={handleInput} />
      {filteredFilter.length >= 10 && <div>Too many matches, specify another filter</div>}
      {filteredFilter.length < 10 && filteredFilter.length > 1 && filteredFilter.map(item => <div key={item.name}>{item.name} <button onClick={buttonHandler(item.name)}>show</button></div>)}
      {filteredFilter.length === 1 && filteredFilter.map(country => 
      <div key={filteredFilter.length}>
        <h1>{country.name}</h1>
        <div>capital {country.capital}</div>
        <div>area {country.area}</div>
        <h2>languages:</h2>
        <ul>
          {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
        </ul>
        <img src={country.flags.png} />

      </div>)}
      {show.name && (
        <div>
          <h1>{show.name}</h1>
          <div>capital {show.capital}</div>
          <div>area {show.area}</div>
          <h2>languages:</h2>
          <ul>
            {Object.values(show.languages).map(lang => <li key={lang}>{lang}</li>)}
          </ul>
          <img src={show.flags.png} />
      </div>
      )}
    </div>
  )
}

export default App