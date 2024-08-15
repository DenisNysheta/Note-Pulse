import React, { useEffect, useRef, useState } from 'react'
import cl from "./InfoForm.module.scss"
import { useSelector } from 'react-redux'
import SocialLinks from '../Contact/Contact'
import animateLetters from '../../assets/scripts/animateLetters'
import Contact from '../Contact/Contact'

function InfoForm({registration}) {

    const [isChange, setChange] = useState(0)
    const [isAppearance, setAppearance] = useState(false)

    const infoSingIn = {
      title: "Create your own comfort",
      describe: `Note Pulse - application that focuses on the 
      content of your notes and mentioning them at
      a time convenient for you and your comfort.`
    }

    const infoLogIn = {
      title: "You're back !",
      describe: `An excellent opportunity
      to review your notes and reminders 
      for your own comfort.`
    }

    const titleRef = useRef()
    const describeRef = useRef()
    
    
    useEffect(() => {
      
      let titleElement = titleRef.current
      let describeElement = describeRef.current
      
      if(registration) {
        setChange(0)
        setTimeout(() => {
          titleElement.textContent = infoSingIn.title
          describeElement.textContent = infoSingIn.describe
          setChange(1)
        },600)
      } else if(!registration) {
        setChange(0)
        setTimeout(() => {
          titleElement.textContent = infoLogIn.title
          describeElement.textContent = infoLogIn.describe
          setChange(1)
        },600)
      }

    },[registration])
    
    useEffect(() => {
      setTimeout(() => {
        setAppearance(true)
      },4000)
    },[])
    
  return (
    <>
      <hgroup data-registration={registration ? "SignIn" : "LogIn"} className={cl.infoForm__text}>
        <h2 style={{opacity: isChange}} ref={titleRef} className={cl.infoForm__title}>{infoSingIn.title}</h2>
        <p style={{opacity: isChange}} ref={describeRef} className={cl.infoForm__describe}>
        </p>
        <Contact />  
      </hgroup>
    </>
  )
}

export default InfoForm