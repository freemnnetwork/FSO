const Course = ({ course }) => {
    return(
      <>
        <Header1 heading={course}/>
        <Content1 course={course}/>
        <Header2 heading={course}/>
        <Content2 course={course}/>
      </>
    )
  }
  
  const Header1 = ({ heading }) => {
    return(
      <>
        <h2>{heading[0].name}</h2>
      </>
    )
  }
  
  const Content1 = ({ course }) => {
  
    return(
      <>
        {course[0].parts.map(item => <p key={item.id} >{item.name} {item.exercises}</p>)}
        <b>total of {course[0].parts.reduce((prev, curr) => prev = prev + curr.exercises,0)} exercises</b>
      </>
    )
  }
  
  const Header2 = ({ heading }) => {
    return(
      <>
        <h2>{heading[1].name}</h2>
      </>
    )
  }
  
  const Content2 = ({ course }) => {
  
    return(
      <>
        {course[1].parts.map(item => <p key={item.id} >{item.name} {item.exercises}</p>)}
        <b>total of {course[1].parts.reduce((prev, curr) => prev = prev + curr.exercises,0)} exercises</b>
      </>
    )
  }

  export default Course