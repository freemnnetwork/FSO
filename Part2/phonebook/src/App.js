import { useState, useEffect } from "react";
import Filter from "./components/filter";
import PersonForm from './components/personForm'
import Persons from './components/persons'
import serv from "./services/Serv";

function App() {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [query, setQuery] = useState('')
  const [added, setAdded] = useState(null)
  const [err, setErr] = useState(null)



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

  const Added = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='added'>
        {message}
      </div>
    )
  }
  
  const Removed = ({ message }) => {
    if (message === null) {
      return null
    }
  
    return (
      <div className='error'>
        {message}
      </div>
    )
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
        setAdded(`Changed the number of ${value.name}`)
        setNewName('')
        setNewNumber('')
        setTimeout(() => {
          setAdded(null)
        },5000)
      }).catch(() => {
        setErr(`Information of ${value.name} has already been removed from server`)
        setTimeout(() => {
          setErr(null)
        },5000)
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
        setAdded(`Added ${createdNote.name}`)
        setTimeout(() => {
          setAdded(null)
        },5000)
      })
    }  
  }

  return (
    <div className="App">
      <h2>Phonebook</h2>
      <Removed message={err}/>
      <Added message={added}/>
      <Filter query={query} queryHanlder={queryHanlder} />
      <h2>add a new</h2>
      <PersonForm addPersons={addPersons} newName={newName} nameHandler={nameHandler} newNumber={newNumber} numberHandler={numberHandler}/>
      <h2>Numbers</h2>
      <Persons persons={persons} query={query} removePersons={removePersons}/>
    </div>
  );
}

export default App;
