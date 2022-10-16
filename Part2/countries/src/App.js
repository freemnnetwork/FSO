import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
    const [countries, setCountries] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all').then(res => setCountries(res.data))
        // api paths to things we need to use = item.name.common, item.capital, item.rea, item.languages, and item.flags
    },[])


   

    const inputChange = (event) => {
        setQuery(event.target.value)
    }

    
    const filtered = countries.filter(item => item.name.common.toLowerCase().includes(query)).map(item => <p key={item.name.common} > {item.name.common} </p>)

    return(
        <>
        <div className="">
            find countries <input value={query} onChange={inputChange}/>
        </div>
        {filtered.length > 10 && 'Too many matches, specify another filter'}
        {filtered.length <= 10 && filtered.length > 1 && filtered}
        {filtered.length === 1 && countries.filter(item => item.name.common.toLowerCase().includes(query)).map(item => <div key={item.name.common}>
        <h1>{item.name.common}</h1>

        <p>capital {item.capital}</p>
        <p>area {item.area}</p>

        <h3>languages:</h3>
        {Object.values(item.languages).map(item => <li key={item}>{item}</li>)}
        <img  src={item.flags.png} alt="" />
        </div>)}
            
        </>
    )
}

export default App
