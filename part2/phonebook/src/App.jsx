import { useState, useEffect } from 'react'
import Search from './components/Search'
import Persons from './components/Persons'
import Form from './components/Form'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {name: newName, number: newNumber}

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)

    } else if (persons.some(person => person.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`)

    } else { personService.addPerson(personObject)
        .then(returnedPerson => {
          setPersons(currentPersons => currentPersons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
        .catch(error => {
          console.error('Failed addNewPerson:', error)
          alert('Could not save the person to the server')
        })
    }
  }

  const handleDelete = (id, name) => {
  if (window.confirm(`Delete ${name}?`)) {
    personService.deletePerson(id)
      .then(() => {
        setPersons(currentPersons =>
          currentPersons.filter(person => person.id !== id)
        )
      })
      .catch(error => {
        console.error('Failed to delete person:', error)
        alert(`Could not delete ${name}`)
      })
  }
}

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleSearch = (event) => {
    setSearch(event.target.value)
  }

  const personsToShow = persons.filter(person => person.name.includes(search))

  return (
    <div>
      <h2>Phonebook</h2>
      <Form 
        addNewPerson={addNewPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
        <Search search={search} handleSearch={handleSearch} />
        <Persons personsToShow={personsToShow} handleDelete={handleDelete}/>  
    </div>
  )
}

export default App