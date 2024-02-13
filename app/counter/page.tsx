"use client";
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
export default function Counter() {
    const [count,setCount] = useState<number>(0)
    const increment=()=>{
        setCount(prev => prev + 1)
    }
  return (
    <div>Counter page
        <h1>Counter: {count}</h1>
        <button className="btn btn-success" onClick={increment}>increment</button>
    </div>
  )
}
