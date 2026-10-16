const Course = ({course}) => (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts}/>
  </div>
)

const Header = ({name}) => <h1>{name}</h1>

const Content = ({parts}) => (
  <ul>
    {parts.map(part => (<Part key={part.id} part={part} />))}
  </ul>
)

const Part = ({part}) => (
  <li>
    {part.name} {part.exercises}
  </li>
)

const Total = ({parts}) => {
  const total = parts.reduce((sum, part) => sum + part.exercises, 0)
  return <p>Number of exercises {total}</p>
}

export default Course