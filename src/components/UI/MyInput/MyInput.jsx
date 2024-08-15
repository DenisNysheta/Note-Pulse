import React from 'react'
import cl from "./MyInput.module.scss"

function MyInput(props) {

    const { placeholder } = props
    const styleClass = placeholder.split(" ").at(-1).toLowerCase()

  return (
    <input className={cl[styleClass]} {...props}/>
  )
}

export default MyInput