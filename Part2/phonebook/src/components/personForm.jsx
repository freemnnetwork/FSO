import React from 'react'

const personForm = ({ addPersons, newName, nameHandler, newNumber, numberHandler }) => {
  return (
    <div>
      <form onSubmit={addPersons} >
        <div>name:<input value={newName} onChange={nameHandler}/></div>
        <div>number:<input type="tel" value={newNumber} onChange={numberHandler} /></div>
        <div className=""><button>add</button></div>
      </form>
    </div>
  )
}

export default personForm