const Person = ({ person, handleDelete }) => (
  <li>
    {person.name} {person.number} <br/>
    <button onClick={() => handleDelete(person.id, person.name)}>
      delete
    </button>
  </li>
)

export default Person