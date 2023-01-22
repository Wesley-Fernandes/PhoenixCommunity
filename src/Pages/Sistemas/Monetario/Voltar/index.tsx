import React from 'react'
import { useNavigate } from 'react-router-dom'
export const Voltar = () => {
    const Navigate = useNavigate()
  return (
    <div className='NavigationBar'>
        <button onClick={()=>{Navigate("/")}}>Voltar</button>
    </div>
  )
}
