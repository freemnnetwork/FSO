const express = require('express')
const app = express()

app.use(express.json())


let notes = [
    {
      id: 1,
      content: "HTML is easy",
      date: "2022-05-30T17:30:31.098Z",
      important: true
    },
    {
      id: 2,
      content: "Browser can execute only Javascript",
      date: "2022-05-30T18:39:34.091Z",
      important: false
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      date: "2022-05-30T19:20:14.298Z",
      important: true
    }
]

// GET

app.get('/notes', (request, response) => {
    response.json(notes)
})

app.get('/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    item = notes.find(item => item.id === id)
    response.json(item)
})

// GET ends

// POST

const generateId = () => {
    const maxId = notes.length > 0 ? Math.max(...notes.map(item => item.id)) : 0
    return maxId + 1
}

app.post('/notes', (request, response) => {
    body = request.body
    
    if (!body.content){
        response.status(404).json({
            error:"missing content"
        })
    }

    const note = {
        content: body.content,
        important: body.important || false,
        date: new Date(),
        id: generateId()
    }

    notes = notes.concat(note)
    response.json(note)


})

// POST ends

// DELETE

app.delete('/notes/:id', (request, response) => {
    const id = Number(request.params.id)
    item = notes.filter(item => item.id !== id)

    response.status(200).json(item)
})

// DELETE ends


const PORT = 3001
app.listen(PORT)