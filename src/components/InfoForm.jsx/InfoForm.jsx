import React, { useEffect, useRef, useState } from 'react'
import cl from "./InfoForm.module.scss"
import { useSelector } from 'react-redux'
import SocialLinks from '../SocialLinks/SocialLinks'
import animateLetters from '../../assets/scripts/animateLetters'

function InfoForm() {

    const stateStore = useSelector(state => state.registration)
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

      if(stateStore.registration) {
        setChange(0)
        setTimeout(() => {
          titleElement.textContent = infoSingIn.title
          describeElement.textContent = infoSingIn.describe
          setChange(1)
        },600)
      } else if(!stateStore.registration) {
        setChange(0)
        setTimeout(() => {
          titleElement.textContent = infoLogIn.title
          describeElement.textContent = infoLogIn.describe
          setChange(1)
        },600)
      }

    },[stateStore.registration])

    let phrase = `I will be glad to receive both your wishes and criticism on networks.`
    let listLetters =  animateLetters(phrase, cl.letter_grettings)

    useEffect(() => {
      setTimeout(() => {
        setAppearance(true)
      },4000)
    },[])

  return (
    <>
      <hgroup data-registration={stateStore.registration ? "SignIn" : "LogIn"} className={cl.infoForm__text}>
        <h2 style={{opacity: isChange}} ref={titleRef} className={cl.infoForm__title}>{infoSingIn.title}</h2>
        <p style={{opacity: isChange}} ref={describeRef} className={cl.infoForm__describe}>
        </p>
        <p className={cl.infoForm__describe}>
          {isAppearance ? listLetters.map((letter) => letter) : null}
        </p>
        <SocialLinks />  
      </hgroup>
    </>
  )
}

export default InfoForm