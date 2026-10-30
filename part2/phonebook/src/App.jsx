import { useState, useEffect } from 'react'
import Search from './components/Search'
import Persons from './components/Persons'
import Form from './components/Form'
import Notification from './components/Notification'
import personService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [notification, setNotification] = useState(null)

  useEffect(() => {
    personService.getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addNewPerson = (event) => {
  event.preventDefault()

  const existingPerson = persons.find(person => person.name === newName)

  if (existingPerson) {
    if (window.confirm(`${newName} is already added to phonebook. Replace the old number with a new one?`) === true) {

      const changedPerson = { ...existingPerson, number: newNumber }

      personService.updatePerson(existingPerson.id, changedPerson)
        .then(returnedPerson => {
          setPersons(currentPersons =>
            currentPersons.map(person =>
              person.id === existingPerson.id ? returnedPerson : person
            )
          )
          setNewName('')
          setNewNumber('')
        })
    }
  } else {
    const personObject = { name: newName, number: newNumber }

    personService.addPerson(personObject)
      .then(returnedPerson => {
        setPersons(currentPersons => currentPersons.concat(returnedPerson))

        setNotification(
                  `'${personObject.name}' was successfully added to the phonebook.`
                )
                setTimeout(() => {
                  setNotification(null)
                }, 5000)

        setNewName('')
        setNewNumber('')
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
      <Notification notification={notification}/>
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