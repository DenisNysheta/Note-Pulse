import React, { useState } from 'react'
import cl from "./Settings.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { setRegistration } from '../../assets/scripts/features/registrationSlice'

function Settings() {

  const [isOpen, setOpen] = useState(false)
  const [isChangeTheme, setChangeTheme] = useState(false)

  const stateStore = useSelector(state => state.registration)
  const dispatch = useDispatch()

  return (
    <div style={{top: isOpen ? 0 : "-60px"}} className={cl.settings }>
      <div className={stateStore.registration ? `${cl.settings__type_in} ${cl.active_signIn}` : `${cl.settings__type_in} ${cl.active_logIn}`}>
        <button onClick={() => {dispatch(setRegistration())}} className={cl.settings__type}>Sign In</button>
        <button onClick={() => {dispatch(setRegistration())}} className={cl.settings__type}>Log In</button>
      </div>
      <div style={{backgroundColor: isChangeTheme ? "lightblue" : "darkblue"}} className={cl.settings__btn_theme}>
          <button onClick={() => {
            isChangeTheme ? document.body.setAttribute("data-theme", "dark") : document.body.setAttribute("data-theme", "light") 
            setChangeTheme(!isChangeTheme)
          }} style={{left: isChangeTheme ? 30 : 0}} 
          className={cl.settings__btn_theme__theme}></button>
      </div>
      <button onClick={() => setOpen(!isOpen)} className={ isOpen ? `${cl.settings__btn} ${cl.open_settings}` : `${cl.settings__btn}`}>
      </button>
    </div>
  )
}

export default Settings