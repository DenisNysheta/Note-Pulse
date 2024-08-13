import React, { useRef } from 'react'
import "../assets/styles/components/Form.scss"

function Form() {

  return (
    <div className='form'>
        <h1 className='form__title'>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'> </span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
          <span className='letter-title'></span>
        </h1>
        <div className='form__info'>
            <hgroup className='form__info__text'>
              <h2 className='form__info__title'>
                Lorem ipsum dolor sit amet.
              </h2>
              <p className='form__info__describe'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, facere, eveniet inventore quis aspernatur aliquam porro nostrum cum totam fugiat autem sed corrupti iste debitis!
              </p>
            </hgroup>
            <div className='form__info__fields'>
                <form className='form__info__form' method='get'>
                  <input  type="text" placeholder='Email' />
                  <input  type="text" placeholder='Password'/>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Form