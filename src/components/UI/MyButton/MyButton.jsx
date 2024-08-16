import React from 'react'

import cl from "./MyButton.module.scss"

function MyButton(props) {

  let text, btnClass;
  const { typeBtn } = props
  
  switch(typeBtn) {
    case "singIn":
      text = "Create account"  
      btnClass = text.split(" ").join("_").toLowerCase()
      return (
        <button className={cl[btnClass]} {...props}>{text}</button>
      )
    ;
    case "logIn":
      text = "Log In"  
      btnClass = text.split(" ").join("_").toLowerCase()
      return (
        <button className={cl[btnClass]} {...props}>{text}</button>
      )
    ;
    case "generate Key":
      text = "Generate Key"  
      btnClass = text.split(" ").join("_").toLowerCase()
      return (
        <button className={cl[btnClass]} {...props}>{text}</button>
      )
    ;
  }
}

export default MyButton