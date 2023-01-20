import React from 'react'
import { Input } from '../../Components/Input'
import { useNavigate } from 'react-router-dom'
import Logo from "../../Images/logo.png"
import './Home.scss'
export const Home = () => {
  const navigate = useNavigate()

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
        <small onClick={()=>{navigate('/menu')}}>Versão 0.0.1</small>
      </form>
    </div>
  )
}
