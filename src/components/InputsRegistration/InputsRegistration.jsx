import React, { useEffect, useRef, useState } from 'react'
import cl from "./InputsRegistration.module.scss"
import MyInput from '../UI/MyInput/MyInput'
import MyButton from '../UI/MyButton/MyButton'
import animateLetters from '../../assets/scripts/animateLetters'
import "../../assets/styles/Letters.scss"
import "https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"

function InputsRegistration({registration}) {

  function changeBlur(e, isBlur) {
    let parentElementBlur = e.currentTarget.parentElement
    parentElementBlur.setAttribute("data-blur", isBlur)
  }

  
  const [privateKey, setPrivateKey] = useState("")
  
  const [singInInfo, setSingInInfo] = useState({
    name: "",
    email: "",
    password: "",
    repeatPassword: ""
  })
  
  let { name, email, password, repeatPassword } = singInInfo
  
  const [logInInfo, setLogInInfo] = useState({
    email: "",
    password: ""
  })

  let infoSingInInputs = [
    { 
      elementNotValidate: <p className={cl.inputs__invalidate}>Your name should contain 5-10 symbols</p>,
      regExp: /^[a-zA-Z ]{5,10}$/,
      name: "user_name", 
      type: "text",
      value: singInInfo.name,
      placeHolder: "Your Name",
      stateValue: "name"
    },
    { 
      elementNotValidate: <p className={cl.inputs__invalidate}>Your email inccorect, please check</p>,
      regExp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      name: "user_email",
      type: "email",
      value: singInInfo.email,
      placeHolder: "Your Email",
      stateValue: "email"
    },
    { 
      elementNotValidate: <p className={cl.inputs__invalidate}>Your password must contain 5-10 symbols</p>,
      regExp: /^[a-zA-Z0-9!@#$%^&*]{5,15}$/,
      name: "user_password",
      type: "password",
      value: singInInfo.password,
      placeHolder: "Create Password",
      stateValue: "password"
    },
    { 
      elementNotValidate: <p className={cl.inputs__invalidate}>The password does not match the previously entered one</p>,
      regExp: /^[a-zA-Z0-9!@#$%^&*]{5,15}$/,
      type: "passwordRepeat",
      value: singInInfo.repeatPassword,
      placeHolder: "Repeat your Password",
      stateValue: "repeatPassword"
    }
  ]
  
  let infoLogInInputs = [
    { elementNotValidate: <p className={cl.inputs__invalidate}>The email is not correct, please check</p>,
      regExp: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      type: "email",
      value: logInInfo.email,
      placeHolder: "Your Email",
      stateValue: "email"
    },
    { elementNotValidate: <p className={cl.inputs__invalidate}>{`The password not correct(5-15 symbols)`}</p>,
      regExp: /^[a-zA-Z0-9!@#$%^&*]{5,15}$/,
      type: "password",
      value: logInInfo.password,
      placeHolder: "Type Password",
      stateValue: "password"
    },
  ]
  
  function createPrivateKey() {
    let key = ""
    let phrase = "1234567890-=!@#$%^&*()_+qwertyuiop[]asdfghjklxcvbnm/><|}[[}~QWERTYUIOPLKJHGFDSAXCVBNM"
    for(let i = 0; i <= 20; i++) {
      let randomNum = +(Math.random() * 100).toFixed(0)
      if(randomNum <= 70) {
        key += phrase[randomNum]
      }
    }
    return key
  }
  
  function validate(regExp, value, elementWarning) {
    if(typeof regExp === "object") {
      if(regExp.test(value)) {
        setTimeout(() => {
          elementWarning.style.opacity = 0
        },500)
      } else {
        elementWarning.style.opacity = 1
      }
    }
  }

  let conditionForSendSingIn = infoSingInInputs[0].regExp.test(singInInfo.name) && infoSingInInputs[1].regExp.test(singInInfo.email) && infoSingInInputs[2].regExp.test(singInInfo.password) && infoSingInInputs[2].value === singInInfo.repeatPassword

  useEffect(() => {
    setPrivateKey(createPrivateKey())
  },[registration])

  return (
    <form id="formEmailJs" autoComplete="on" onSubmit={(e) => {
      e.preventDefault()
      setSingInInfo({
        name: "",
        email: "",
        password: "",
        repeatPassword: ""
      })
    }} className={cl.inputs} method='get'>
          { 
            registration ? infoSingInInputs.map((singIn, index) => {
                let x = <div key={index} data-blur="true" className={cl.inputs__item}>
                  {singIn.elementNotValidate}
                  <MyInput
                    name={singIn.name}
                    value={singIn.value}
                    onChange={(e) => {
                      if(singIn.type !== "passwordRepeat") {
                        validate(singIn.regExp, e.target.value, e.currentTarget.parentElement.firstElementChild)
                        setSingInInfo({...singInInfo, [singIn.stateValue]: e.target.value})
                      } else if(singIn.type === "passwordRepeat") {
                        setSingInInfo({...singInInfo, [singIn.stateValue]: e.target.value})
                        if(singInInfo.password === e.target.value) {
                          setTimeout(() => {
                            e.target.parentNode.firstElementChild.style.opacity = 0
                          },500)
                        } else {
                          e.target.parentNode.firstElementChild.style.opacity = 1
                        }
                      }
                    }}
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
                  {logIn.elementNotValidate}
                  <MyInput
                    value={logIn.value}
                    onChange={(e) => {
                      setLogInInfo({...logInInfo, [logIn.stateValue]: e.target.value})
                      validate(logIn.regExp,logIn.value,e.currentTarget.parentElement.firstElementChild)
                    }}
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
          <textarea value={privateKey} style={{display: "none"}} name="private_key" id=""></textarea>
        <div className={cl.inputs__listBtns}>
          <MyButton style={{zIndex: conditionForSendSingIn ? "1" : "-1",opacity: conditionForSendSingIn ? 1 : 0}} typeBtn={registration ? "singIn" : "logIn"} type="submit" />
          <MyButton type="button" onClick={() => {
            setPrivateKey(createPrivateKey())
            alert("Your private key was generated, and will be send when you will create account ^_^")
          }} typeBtn={registration ? "generate Key" : "hidden"}/>
        </div>
    </form>
  )
}

export default InputsRegistration