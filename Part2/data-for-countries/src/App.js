import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {
  const [query, setQuery] = useState([])
  const [countries, setCountries]= useState('')

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then(res => {
      
      setCountries(res.data)
    })
  },[])

  const inputHanlder = (event) => {
    setQuery(event.target.value)
  }

  console.log(countries.filter(item => item.toLowerCase().includes(query)))
  return(
    <div className="App">
      <input type="text" onChange={inputHanlder} />
    </div>
  );
}

export default App;
