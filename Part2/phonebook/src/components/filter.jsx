import React from 'react'

const filter = ({ query, queryHanlder }) => {
  return (
    <div>
      filter shown with<input type="text" value={query} onChange={queryHanlder}/>
    </div>
  )
}

export default filter