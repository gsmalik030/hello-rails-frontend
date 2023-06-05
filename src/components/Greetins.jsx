import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGreetings } from '../redux/greetings/greetingsSlice'

const Greetins = () => {
    const dispatch = useDispatch()
    const {greetings} = useSelector((store) => store.greeting)
    console.log(greetings)
    useEffect(()=>{
        dispatch(getGreetings());
    },[]);

  return (
    <div>
      <h1>Hello world</h1>
        {greetings.map((msg)=> <h2>{msg.greeting}</h2>)}
    </div>
  )
}

export default Greetins
