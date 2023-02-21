import React from 'react'
import { useNavigate } from 'react-router-dom';
import "./ButtonComponent.scss"

interface ButtonComponentType{
    title: string;
    rote?: string;
    maker?: ()=>any;
}

export const Button = ({title, rote, maker}:ButtonComponentType) => {

  const navigate = useNavigate()
  return (
    <>
      {
        rote && (
          <button className='ButtonComponent' onClick={()=>{navigate(rote)}}>
            {title}
          </button>
        )
      }

      {
        maker && (
          <button className='ButtonComponent' onClick={()=>{maker()}}>
            {title}
          </button>
        )
      }

    </>
  )
}
