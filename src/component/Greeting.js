import React, { useEffect } from "react";
import { getGreeting } from '../redux/greetSlice';
import { useDispatch, useSelector } from 'react-redux';

const Greeting = () => {
    const dispatch =  useDispatch();
    const state = useSelector(state => state.greeting.payload);
    useEffect(() => {
        dispatch(getGreeting());
      }, [dispatch]);
    const handleMsg = () => {
        dispatch(getGreeting());
    }
    return (
        <>
            <h1>Hello guys </h1>
            <p>This is the generated message </p>
            <p>{state.id}</p>
            <p>{state.content}</p>
            <button onClick={handleMsg}>Click to get a random message</button>
        </>
    )
}

export default Greeting;