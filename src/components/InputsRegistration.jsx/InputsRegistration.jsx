import React from 'react'
import cl from "./InputsRegistration.module.scss"

function InpustRegistration() {
  return (
    <form className={cl.inputs} method='get'>
        <input  type="text" placeholder='Email' />
        <input  type="text" placeholder='Password'/>
    </form>
  )
}

export default InpustRegistration