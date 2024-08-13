import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../assets/scripts/features/counterSlice'

function Home() {

    let count = useSelector(state => state.count.value)
    const dispatch = useDispatch()

  return (
    <>
        <div>{count}</div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  )
}

export default Home