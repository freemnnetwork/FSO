import React from 'react'

const Persons = ({ persons, search }) => {
  return (
    <div>
        {persons.filter(item => item.name.toLowerCase().includes(search)).map(item => <p key={item.id}>{item.name} {item.number}</p>)}
    </div>
  )
}

export default Persons