import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increaseByAmount, increment } from './Redux/Features/counterSlice'

const App = () => {

  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter.value)
  const [num, setNum] = useState('')
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{
        dispatch(increment())
      }}>Increment</button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>Decrement</button>
     
      <input type="number" 
      value={num}
      onChange={(e)=>{
        setNum(e.target.value)
      }}
      
      placeholder='Enter the number you want to increase by' />
      <button onClick={()=>{dispatch(increaseByAmount(Number(num)))}}>Increase By </button>
    </div>
  )
}

export default App

