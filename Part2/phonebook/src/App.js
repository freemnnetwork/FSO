import { useState, useEffect } from 'react'
import Personform from './components/Personform'
import Filter from './components/Filter'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState("")


  useEffect(() => {
    axios.get('http://localhost:3001/persons').then(res => {
      setPersons(res.data)
    })
  },[])


  const addNumber = (event) => {

    if (persons.find(item => item.name === newName)){
      alert(`${newName} is already added to the phonebook`)
      event.preventDefault()
    } else {
      event.preventDefault()
      const newPersons = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(newPersons))
    }
  }


  const nameInputHandler = (event) => {
    setNewName(event.target.value)

  }

  const numberInputHandler = (event) => {
    setNewNumber(event.target.value)
  }

  const searchInput = (event) => {
    
    setSearch(event.target.value)
  }


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter searchInput={searchInput}/>
      <h2>add new</h2>
      <Personform addNumber={addNumber} newName={newName} newNumber={newNumber} nameInputHandler={nameInputHandler} numberInputHandler={numberInputHandler}/>
      <h2>Numbers</h2>
      <Persons persons={persons} search={search}/>
    </div>
  )
}

export default App