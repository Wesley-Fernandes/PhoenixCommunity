import React from 'react'
import { Input } from '../../Components/Input'
import Logo from "../../Images/logo.png"
import './Home.scss'
export const Home = () => {
  return (
    <div className='HomePage'>
      <img src={Logo} alt="imagem de uma phoenix" className='phoenix-logo'/>
      <form className='formulary'>
      <p>
        Um site para usuarios da comunidade
      </p>
        <input type="text"  placeholder='E-mail.'/>
        <input type="password" placeholder="Senha."/>
        <span>
          Fazer login
        </span>
        <hr />
        <span>
          Crie uma conta
        </span>
        <small>Versão 0.0.1</small>
      </form>
    </div>
  )
}
