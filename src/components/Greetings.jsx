import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getGreetings } from '../redux/greetings/greetingsSlice'

const Greetings = () => {
    const dispatch = useDispatch()
    const {greetings} = useSelector((store) => store.greeting)
    useEffect(()=>{
        dispatch(getGreetings());
    },[]);

  return (
    <div>
        {greetings.map((msg)=> <h2>{msg.greeting}</h2>)}
    </div>
  )
}

export default Greetings
