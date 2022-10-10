import Note from "./components/Note"
import { useState } from "react"

const App = (props) => {
  const [notes, setNote] = useState(props.notes)
  const [newNote, addNewNotes] = useState('a new note...')


  const noteChange = (event) => {
    console.log(event.target.value)
    addNewNotes(event.target.value)
  }

  const addNote = (event) => {
    event.preventDefault()
    const noteObject = {
      id: props.notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }

    setNote(notes.concat(noteObject))
    addNewNotes('')
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {props.notes.map(note => 
          <Note key={note.id} note={note} />
        )}
      </ul>
      <form onSubmit={addNote}>
        <input type="text" value={newNote} onChange={noteChange}/>
        <button>Save</button>
      </form>
    </div>
  )
}

export default App