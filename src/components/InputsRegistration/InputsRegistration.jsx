import React, { useEffect, useRef, useState } from 'react'
import cl from "./InputsRegistration.module.scss"
import MyInput from '../UI/MyInput/MyInput'
import MyButton from '../UI/MyButton/MyButton'
import animateLetters from '../../assets/scripts/animateLetters'
import "../../assets/styles/Letters.scss"

function InputsRegistration({registration}) {

  function changeBlur(e, isBlur) {
    let parentElementBlur = e.currentTarget.parentElement
    parentElementBlur.setAttribute("data-blur", isBlur)
  }

  const [appearance, setAppearance] = useState(0)

  const [singInInfo, setSingInInfo] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: ""
  })

  const [logInInfo, setLogInInfo] = useState({
    email: "",
    password: ""
  })

  let infoSingInInputs = [
    {
      type: "text",
      value: singInInfo.name,
      placeHolder: "Your Name",
      stateValue: "name"
    },
    {
      type: "email",
      value: singInInfo.email,
      placeHolder: "Your Email",
      stateValue: "email"
    },
    {
      type: "password",
      value: singInInfo.password,
      placeHolder: "Create Password",
      stateValue: "password"
    },
    {
      type: "passwordRepeat",
      value: singInInfo.repeatPassword,
      placeHolder: "Repeat your Password",
      stateValue: "repeatPassword"
    }
  ]

  let infoLogInInputs = [
    {
      type: "email",
      value: logInInfo.email,
      placeHolder: "Your Email",
      stateValue: "email"
    },
    {
      type: "password",
      value: logInInfo.password,
      placeHolder: "Type Password",
      stateValue: "password"
    },
  ]

  useEffect(() => {
    setAppearance(0)
    setTimeout(() => {
      setAppearance(1)
    },1000)
  },[registration])

  let phrase = `Be sure that your data indicated 
  above will not be used for personal gain, 
  since the project was created for
  the purpose of practice.`

  let listLetters = animateLetters(phrase,"letter-warning", "warning", "infinite","3s")

  return (
    <form autoComplete="on" onSubmit={(e) => e.preventDefault()} className={cl.inputs} method='get'>
          { 
            registration ? infoSingInInputs.map((singIn, index) => {
                let x = <div key={index} data-blur="true" className={cl.inputs__item}>
                  <MyInput
                    value={singIn.value}
                    onChange={(e) => setSingInInfo({...singInInfo, [singIn.stateValue]: e.target.value})}
                    onFocus={(e) => changeBlur(e, "false")}
                    onBlur={(e) => singInInfo[singIn.stateValue] ? changeBlur(e, "false") : changeBlur(e,"true")} 
                    type={singIn.type.includes("Repeat") ? "password" : singIn.type}
                    placeholder={singIn.placeHolder}
                  />
                  <p className={cl.inputs__name}>{singIn.value ? null : singIn.placeHolder}</p>
                  <div className={cl.blur_background}></div>
                </div>
                return x
            }) : infoLogInInputs.map((logIn, index) => {
              return (
                <div key={index} data-blur="true" className={cl.inputs__item}>
                  <MyInput
                    value={logIn.value}
                    onChange={(e) => setLogInInfo({...logInInfo, [logIn.stateValue]: e.target.value})}
                    onFocus={(e) => changeBlur(e, "false")}
                    onBlur={(e) => logInInfo[logIn.stateValue] ? changeBlur(e, "false") : changeBlur(e,"true")} 
                    type={logIn.type.includes("Repeat") ? "password" : logIn.type}
                    placeholder={logIn.placeHolder}
                  />
                  <p className={cl.inputs__name}>{logIn.value ? null : logIn.placeHolder}</p>
                  <div className={cl.blur_background}></div>
                </div>
              )
            })
          }
        <MyButton typeBtn={registration ? "singIn" : "logIn"} type="submit" />
    </form>
  )
}

export default InputsRegistration