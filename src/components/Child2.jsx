import React from 'react'

const Child2 = (props) => {
    // const [name,about]=props
    console.log(props)
  return (
    <>
  <h1 className='text-2xl font-medium p-2'>{props.name} {props.about}</h1>
    </>
  )
}

export default Child2