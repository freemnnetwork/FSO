import React from 'react'

const Filter = ({ searchInput }) => {
  return (
    <div>
        <input type="text" placeholder='search name...' onChange={searchInput} />
    </div>
  )
}

export default Filter