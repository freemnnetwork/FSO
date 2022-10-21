const express = require('express')
const app = express()

app.use(express.json)


const numbers = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

// GET

app.get('/api/persons', (request, response) => {
    response.json(numbers)
})

app.get('/info', (request, response) => {

    const info = {
        content:`Phonebook has info for ${numbers.length} people`,
        date: new Date()
    }
    response.json(info)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const item = numbers.find(thing => thing.id === id)
    
    if (numbers.length === id){
        response.json(item)
    }

    response.status(204).json({
        error: `page ${id} is not found`
    })
})

// GET end

// DELETE

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const item = numbers.filter(thing => thing.id !== id)

    response.json.status(204).json(item)
})

// DELETE end

// POST 

app.post('api/persons', (request, response) => {
    body = request.body

    if(body.content === numbers.map(item => item.content)){
        response.status(204).json({
            error:"name must be unique"
        })
    } else if (body.content === null){
        response.status(204).json({
            error:"content is empty"
        })
    } else if (body.number === null){
        response.status(204).json({
            error:"number is empty"
        })
    }

    const newPost = {
        id: Math.random() * 1000000000,
        name: body.name,
        number: body.number
    }

    numbers = numbers.concat(newPost)
    response.json(numbers)
})

// POST end

const PORT = 3001

app.listen(PORT, () => {
    console.log(`the server is running on ${PORT}`)
})