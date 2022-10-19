import React from 'react'

const persons = ({ persons, query }) => {
  return (
    <div>{persons.filter(item => item.name.toLowerCase().includes(query)).map(item => <p key={item.id}>{item.name} {item.number}</p>)}</div>
  )
}

export default persons