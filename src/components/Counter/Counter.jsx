import React, { useState } from 'react'
import './Counter.css'

export const Counter = () => {


        const [counter, setCounter] = useState(0);

    const aumentar = () =>{
        setCounter(counter + 1)
    }

    const disminuir = () =>{
        if(counter > 0){
            setCounter(counter -1)
        }
    }




  return (
    <div>

        <button className='m-2' onClick={disminuir}>➖</button>
        <span>{counter}</span>
        <button className='m-2' onClick={aumentar}>➕</button>

    </div>
  )
}
