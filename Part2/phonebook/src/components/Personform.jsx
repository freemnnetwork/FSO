import React from 'react'

const Personform = ({ addNumber, newName, newNumber, nameInputHandler, numberInputHandler }) => {
  return (
    <div>
        <form onSubmit={addNumber}>
        <div>
          name: <input name='people' placeholder='add a name ...' value={newName} onChange={nameInputHandler}/>
        </div>
        <div>
          number: <input name='num' placeholder='add number ...' value={newNumber} onChange={numberInputHandler}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default Personform