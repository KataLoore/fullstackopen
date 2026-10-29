import Person from './Person'

const Persons = ({ personsToShow, handleDelete }) => (
  <ul>
    {personsToShow.map(person => (
      <Person key={person.name} person={person} handleDelete={handleDelete} />
    ))}
  </ul>
)

export default Persons