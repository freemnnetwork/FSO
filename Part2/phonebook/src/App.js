import { useState, useEffect } from "react";
import Filter from "./components/filter";
import PersonForm from './components/personForm'
import Persons from './components/persons'
import axios from 'axios'

function App() {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [query, setQuery] = useState('')


  useEffect(() => {
    axios.get("http://localhost:3001/persons")
    .then(res => {
      setPersons(res.data)
    })
  },[])


  const nameHandler = (event) => {
    setNewName(event.target.value)
  }

  const numberHandler = (event) => {
    setNewNumber(event.target.value)
  }

  const queryHanlder = (event) => {
    setQuery(event.target.value)
  }

  

  const addPersons = (event) => {

    if (persons.find(item => item.name === newName)){
      alert(`${newName} is already added to phonebook`)
      event.preventDefault()
    } else {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
  
      setPersons(persons.concat(personObject))
      setNewName('')
    }  
  }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Filter query={query} queryHanlder={queryHanlder} />
      <h2>add a new</h2>
      <PersonForm addPersons={addPersons} newName={newName} nameHandler={nameHandler} newNumber={newNumber} numberHandler={numberHandler}/>
      <h2>Numbers</h2>
      <Persons persons={persons} query={query}/>
    </div>
  );
}

export default App;


