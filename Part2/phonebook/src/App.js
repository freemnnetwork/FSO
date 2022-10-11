import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')


  const handleFun = (e) => {
    setNewName(e.target.value)

  }

  const Sub = () => {
    setNewName('')
  }
 
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          name: <input value={newName}  onchange={(e) => } onSubmit={handleFun}/>
        </div>
        <div>
          <button type="submit" onClick={Sub}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
    </div>
  )
}

export default App