import React from 'react'

const Container = ({children}) => {
    // const Container = (props)  =>{
        // const {children}=props
        // } 
  return (
    <div className='w-[80%] mx-auto my-5 py-4 bg-zinc-400'>
{children}
    </div>
  )
}

export default Container