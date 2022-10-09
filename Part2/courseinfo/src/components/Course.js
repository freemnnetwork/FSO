

const Header = ({course}) => {
    return(
      <>
        <h1>{course.course[0].name}</h1>
      </>
    )
  }
  const Parts = ({parts}) => {
    return(
      <>
        <p> {parts.name} {parts.exercises} </p>
      </>
    )
  }
  const Content = ({course}) => {
    const parts = course.course[0].parts
    return(
      <>
        {parts.map((item) => <Parts key={item.id} parts={item}></Parts>)}
      </>
    )
  }
  const Total1 = ({course}) => {
    const parts = course.course[0].parts
    return(
      <b>
        total of {parts.reduce((acum, curr) => acum + curr.exercises,0)} exercises
      </b>
    )
  }
  
  const Parts2 = ({part}) => {
    return(
      <p> {part.name} {part.exercises} </p>
    )
  }
  
  
  const Content2 = ({course}) => {
    const content = course.course[1].parts
    return(
      <>
        {content.map((item) => <Parts2 key={item.id} part={item}/>)}
      </>
    )
  }
  
  
  const Header2 = ({course}) => {
    const name = course.course[1].name
    return(
      <>
        <h2>{name}</h2>
      </>
    )
  }
  
  const Total2 = ({course}) => {
    const content = course.course[1].parts
    return(
      <b>
        total of {content.reduce((accum, part) => accum + part.exercises,0)} exercises
      </b>
    )
  }



const Course = (course) => {
    return(
      <>
        <Header course={course}/>
        <Content course={course}/>
        <Total1 course={course}/>
        <Header2 course={course}/>
        <Content2 course={course}/>
        <Total2 course={course}/>
      </>
    )
  }

  export default Course