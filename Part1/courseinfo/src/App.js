

const Header = (props) => {
  return (
    <div className="">
      <h1>{props.name}</h1>
    </div>
  )
}

const Content = (props) => {
  return(
    <>
      <Part parts={props.parts[0]}/>
      <Part parts={props.parts[1]}/>
      <Part parts={props.parts[2]}/>
    </>
  )
}

const Part = (props) => {
  return(
    <>
      <p>{props.parts.name} {props.parts.exercises}</p>
    </>
  )
}


const Total = (props) => {
  return (
    <div className="">
      <p>Number of exercises {''}
        {props.parts.reduce((x, y) => {
          return y.exercises + x
        }, 0)}
      </p>
    </div>
  )
}


function App() {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div className="App">
      <Header name={course}/>
      <Content parts={parts}/>
      <Total parts={parts}/>
    </div>
  );
}

export default App;
