import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import "../assets/styles/components/App.scss"
import Form from '../components/Form'

function Home() {

    let count = useSelector(state => state.count.value)
    const dispatch = useDispatch()

  return (
    <div className='pulse'>
        <Form />
    </div>
  )
}

export default Home