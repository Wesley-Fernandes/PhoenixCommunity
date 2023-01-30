import React from 'react'
import { Input } from '../../Components/Input'
import { useNavigate } from 'react-router-dom'
import Logo from "../../Images/logo2.png"
import './Home.scss'
export const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='Homepage-background'>
    <div className='HomePage'>
      <img src={Logo} alt="imagem de uma phoenix" className='phoenix-logo'/>
      <h2>PHOENIX</h2>
      <form className='formulary'>
        <input type="text"  placeholder='digite o seu e-mail ou login' required autoSave='false'/>
        <input type="password" placeholder="digite sua senha" required/>
        <span>
          ENTRAR
        </span>
        <small onClick={()=>{navigate("/")}}>Não tem conta? não vai ter!</small>
      </form>
    </div>
    </div>
  )
}
