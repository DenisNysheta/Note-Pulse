import React from 'react'
import Form from '../components/Form'
import Settings from '../components/Settings/Settings'

function Welcome() {

  const mapObj = new Map()
  let ivan = {name: "Ivan"}
  mapObj.set(ivan, "dsadsadas")

  console.log(mapObj.get(ivan))

  let listLetters = []
  for(let i = 0; i < 21; i++) {
    let x = <span key={Date.now() + i + 5} className='letter-title'></span>
    listLetters.push(x)
  }

  return (
    <div className='pulse'>
        <div className='pulse__box'>
          <h1 className='form__title'>
            {
              listLetters.map( letter => letter)
            }
          </h1>
          <Form />
        </div>
        <Settings />
    </div>
  )
}

export default Welcome