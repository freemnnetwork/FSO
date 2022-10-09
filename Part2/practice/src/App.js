import Note from "./components/Note"


const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      
        {notes.map(note => <Note key={note.id} content={note.content}></Note>)}
      
    </div>
  )
}

export default App