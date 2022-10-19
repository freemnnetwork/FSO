import { useState, useEffect } from "react";
import Filter from "./components/filter";
import PersonForm from './components/personForm'
import Persons from './components/persons'
import axios from 'axios'
import serv from "./services/Serv";

function App() {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [query, setQuery] = useState('')


  useEffect(() => {
    serv 
    .getAll()
    .then(res => {
      setPersons(res)
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

  const removePersons = (id, name) => {
    console.log(`i am the ${id} person`)
    serv
    .remove(id)
    .then(() => window.confirm(`Delete ${name}`))
    .then( () => setPersons(persons.filter(item => item.id !== id)))
  }

  


  const addPersons = (event) => {

    if (persons.find(item => item.name === newName)){
      event.preventDefault()
      window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
      const value = persons.find(item => item.name === newName)
      const updatedNumber = {
        name: newName,
        number: newNumber
      }
      serv
      .update(value.id, updatedNumber)
      .then(response => {
        setPersons(persons.map(item => item.name !== value.name ? item : response ))
      })
      
    } else {
      event.preventDefault()
      const personObject = {
        name: newName,
        number: newNumber
      }
      serv
      .create(personObject)
      .then(createdNote => {
        setPersons(persons.concat(createdNote))
        setNewName('')
        setNewNumber('')
      })
    }  
  }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Filter query={query} queryHanlder={queryHanlder} />
      <h2>add a new</h2>
      <PersonForm addPersons={addPersons} newName={newName} nameHandler={nameHandler} newNumber={newNumber} numberHandler={numberHandler}/>
      <h2>Numbers</h2>
      <Persons persons={persons} query={query} removePersons={removePersons}/>
    </div>
  );
}

export default App;


