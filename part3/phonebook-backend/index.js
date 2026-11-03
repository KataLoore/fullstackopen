const express = require('express') // import express
const app = express() // init backend express app

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
app.get('/api/persons', (request, response) => { // GET persons array
    console.log(persons)
    response.json(persons)
})

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

// Run server 'npm run dev'
const PORT = 3001
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))