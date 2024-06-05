import React from 'react'

function Input({type,changeHandler}) {
  return (
    <>
  <div className='flex flex-col items-center'>
  <header className='text-xl py-4 px-2 text-center mb-4 '>Search book by name:</header>
   <input  className="p-2 border-2 rounded-md border-black w-96 "  type={type} onChange={changeHandler}/>
  </div>
    
   
   </>

  )
}

export default Input
