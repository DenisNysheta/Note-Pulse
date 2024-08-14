import React, { useEffect, useRef, useState } from 'react'
import "../assets/styles/components/Form/Form.scss"
import InfoForm from './InfoForm.jsx/InfoForm'
import animateLetters from '../assets/scripts/animateLetters'

function Form() {

  const [isAppearance, setAppearance] = useState(0)

  let listLetters = []
  for(let i = 0; i < 21; i++) {
    let x = <span className='letter-title'></span>
    listLetters.push(x)
  }

  useEffect(() => {
    setTimeout(() => setAppearance(1),2800)
  },[])

  return (
    <>
      <h1 className='form__title'>
        {
          listLetters.map( letter => letter)
        }
      </h1>
      <div style={{opacity: isAppearance}}  className='form'>
          <div className='form__info'>
              <InfoForm />
              <div className='form__info__fields'>
                  <form className='form__info__form' method='get'>
                    <input  type="text" placeholder='Email' />
                    <input  type="text" placeholder='Password'/>
                  </form>
              </div>
          </div>
      </div>
    </>
  )
}

export default Form