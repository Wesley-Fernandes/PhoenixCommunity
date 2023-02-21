import React from 'react'
import "./Montario.scss"
import { Tipo } from './Obter/Tipos'
import { Funcionamento } from './Funcionamento'
import { Prologo } from './Prologo'
import { Emprestimos } from './Emprestimos'
import { Dicas } from './Dicas'
import { Fim } from './Fim'
import { Obter } from './Obter'
import { Voltar } from './Voltar'
export const Monetario = () => {
  return (
    <div className='MonetarioPage'>
        <div className='Content'>
            <Voltar/>
            <Prologo/>
            <Funcionamento/>
            <Obter/>
            <Emprestimos/>
            <Dicas/>
            <Fim/>
        </div>
    </div>
  )
}
