import React, { useEffect, useRef, useState } from 'react'
import "../assets/styles/components/Form/Form.scss"
import InfoForm from './InfoForm.jsx/InfoForm'
import InputsRegistration from './InputsRegistration/InputsRegistration'
import { useSelector } from 'react-redux'
import animateLetters from '../assets/scripts/animateLetters'

function Form() {
  let warning;
  const [isAppearance, setAppearance] = useState(0)
  const stateStore = useSelector(state => state.registration)
  const [phrase, setPhrase] = useState("")
  
  useEffect(() => {
    setTimeout(() => setAppearance(1),2800)
  },[])
  
  useEffect(() => {
    setTimeout(() => {
      setPhrase(`Be sure that your data indicated 
      above will not be used for personal gain, 
      since the project was created for
      the purpose of practice.`)
    },0)
  })

  let listLetters = animateLetters(phrase,"letter-warning", "warning", "infinite","3s","0")
  return (
    <>
      <div style={{opacity: isAppearance}}  className='form'>
          <div className='form__info'>
              <InfoForm registration={stateStore.registration}/>
              <div className='form__info__fields'>
                <InputsRegistration registration={stateStore.registration}/>
                {
                  <p style={{opacity: isAppearance}} className="form__warning">
                    {listLetters.map(letter => letter)}
                  </p>
                }
              </div>
          </div>
      </div>
    </>
  )
}

export default Form