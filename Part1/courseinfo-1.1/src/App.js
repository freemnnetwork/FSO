

const Header = (props) => {
  return (
    <div className="">
      <h1>{props.name}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div className="">
      <p>
        {props.part1} {props.exer1}
      </p>
      <p>
        {props.part2} {props.exer2}
      </p>
      <p>
        {props.part3} {props.exer3}
      </p>
    </div>
  )
}
const Total = (props) => {
  return (
    <div className="">
      <p>Number of exercises {props.tots}</p>
    </div>
  )
}


function App() {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div className="App">
      <Header name={course}/>
      <Content part1={part1} part2={part2} part3={part3} exer1={exercises1} exer2={exercises2} exer3={exercises3}/>
      <Total tots={exercises1 + exercises2 +exercises3}/>
    </div>
  );
}

export default App;
