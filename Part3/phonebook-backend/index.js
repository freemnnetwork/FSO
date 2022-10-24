const express = require('express')
const morgan = require('morgan')
const app = express()



app.use(express.json())

morgan.token('body', (request, response) => request.method === 'POST' ? JSON.stringify(request.body) : '')

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

const persons = [
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
    response.json(persons)
})


app.get('/info', (request, response) => {
    let phoneNum = `Phonebook has info for ${persons.length} people`
    let dates = new Date()
    response.send(`<div><p>${phoneNum}</p><p>${dates}</p></div>`)

})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const items = persons.find(item => item.id === id)

    response.json(items)
})

// GET end

// DELETE

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const items = persons.filter(item => item.id !== id)

    response.status(404).end()
})

// DELETE end

// POST



const generateId = () => {
    const num = Math.random() * 1000000
    return num
}



app.post('/api/persons', (request, response) => {

   const body = request.body

    if (!body.name) {
         return response.status(202).json({
            error: 'your missing a name'
        })
    } else if (!body.number) {
         return response.status(400).json({
            error: 'your missing a number'
        })
    } else if (persons.find(item => item.name === body.name)) {
         return response.status(404).json({
            error: 'name must be unique'
        })
    }


   const note = {
    id: generateId(),
    name: body.name,
    number: body.number
   }


   item = persons.concat(note)

   response.json(item)

})

// POST end


const PORT = 3001
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})