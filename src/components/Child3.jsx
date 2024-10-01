import React from 'react'
const Child3 = (props) => {
    console.log(props);
  return (
    <>
 <h1 className='text-2xl font-medium mt-4'>{props.title} </h1>
 <br />
 {props.children}
    </>
  )
}

export default Child3