
import React from 'react'
import { useState,useEffect } from 'react'
import axios from'axios'

function Signin() {
    const [login,setLogin]=useState(false)
    const [value,setValue]=useState("input")
    const [count,setCount]=useState(0)
    function counter(){setCount(count+1)}
    useEffect(() => {
      // console.log("first");
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then((result)=>{
      console.log(result.data)
    })
    .catch((error)=>{
      console.log(error)
    })
    }, [])
    
    console.log(login)
  return (
    <>
    <div>Signin</div>
    <button className='button1' onClick={counter}>counter</button>
    <div>{count}</div>
    <button onClick={()=>{
        setLogin(true)
        console.log("changed by setState")
        console.log(value)
    }}>Signin</button>
    <input onChange={(e)=>{
        setValue(e.target.value)
        console.log(value)
    }} type="text" value={value}></input>
    </>
  )
}

export default Signin
