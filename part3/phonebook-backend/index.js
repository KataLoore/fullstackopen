const express = require('express') // import express
const morgan = require('morgan') // import morgan
// const cors = require('cors') // CORS for when frontend is *not* on a relative URL address

const app = express() // init backend express app
app.use(express.json()) // enable JSON readaility in routes
app.use(morgan('tiny')) // logs "POST /api/persons 200 54 - 3.370 ms"
// app.use(cors())
app.use(express.static('dist'))

// Mock data
let persons = [
    { 
      "id": "1",
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": "2",
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": "3",
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": "4",
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

// Routes
app.get('/api/persons', (request, response) => { response.json(persons)})

app.get('/info', (request, response) => { // Get information
    const date = new Date()

    response.send(`
        <div>
            <p>The phonebook contains ${persons.length} persons</p>
            <p>Request receieved at ${date}</p>
        </div>
    `)
})

app.get('/api/persons/:id', (request, response) => { // GET person
    const id = request.params.id
    const person = persons.find(person => person.id === id)
    console.log(id, person)

    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => { // DELETE person
    const id = request.params.id
    persons = persons.filter(person => person.id !== id)
    console.log(persons)
    response.status(204).end()
})

app.post('/api/persons', (request, response) => { // POST new person
    const body = request.body
    
    if(!body.name || !body.number) {
        console.log("error: missing body content")
        return response.status(400).json({error: 'missing body content'})

    } else if (persons.find(person => person.name === body.name)) {
        console.log("error: name must be unique")
        return response.status(400).json({error: 'name must be unique'})

    } else { console.log("success: added new person ", body) }

    const person = {
        name: body.name,
        number: body.number,
        id: String(Math.floor(Math.random() * 10000))
    }

    persons = persons.concat(person)
    console.log(persons)
    response.json(person)
})

// Run server 'npm run dev'
const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))