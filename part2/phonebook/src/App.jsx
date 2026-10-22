import { useState, useEffect } from 'react'
import axios from 'axios'
import Search from './components/Search'
import Persons from './components/Persons'
import Form from './components/Form'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  const addNewPerson = (event) => {
    event.preventDefault()
    const personObject = {name: newName, number: newNumber}

    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)

    } else if (persons.some(person => person.number === newNumber)) {
      alert(`${newNumber} is already added to phonebook`)

    } else {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
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
        <Persons personsToShow={personsToShow}/>  
    </div>
  )
}

export default App