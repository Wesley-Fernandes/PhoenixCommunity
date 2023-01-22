import React from 'react'

type TipoType ={
    title: string;
    description: string;
}
export const Tipo = ({title, description}:TipoType) => {
  return (
    <div>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}
