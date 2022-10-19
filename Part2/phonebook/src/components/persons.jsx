import React from 'react'

const persons = ({ persons, query, removePersons }) => {


  return (
    <div>{persons.filter(item => item.name.toLowerCase().includes(query)).map(item => <p key={item.id}>{item.name} {item.number} <button onClick={() => removePersons(item.id, item.name)} >Delete</button></p>)}</div>
  )
}

export default persons