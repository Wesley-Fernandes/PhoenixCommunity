import React from 'react'
import logo from '../../Images/logo2.png'
import { useNavigate } from 'react-router-dom'
import "./Menu.scss"
import { ListItem } from '../../Components/List'
export const Menu = () => {
    const navigate = useNavigate()
  return (
    <div className='MenuPage'>
        <main>
            <img src={logo} alt="imagem de uma phoenix" onClick={()=>{navigate('/profile')}}/>
            <section>
                <h2>GUIA DE AJUDA</h2>
                <ul>
                    <li> <a href="http://aminoapps.com/p/4rovbd">Regras da comunidade</a></li>
                    <li> <a href="">Dicas para novos usuarios</a></li>
                    <li><a href="http://aminoapps.com/p/vwfx8h">Falar com a Staff</a></li>
                    <li><a href="http://aminoapps.com/p/4rovbd">Fazer uma denuncia</a></li>
                    <li><a onClick={()=>{navigate("/login")}}>Sou moderador</a></li>
                </ul>
            </section>
            <section>
                <h2>Plataformas</h2>
                <ul>
                    <li> <a href="http://aminoapps.com/p/7qw8in">Plataforma Destaque</a></li>
                    <li> <a href="http://aminoapps.com/p/1q3y9v">Plataforma de Sugestão</a></li>
                    <li> <a href="http://aminoapps.com/p/jh5vh7b">Plataforma de Chats</a></li>
                    <li> <a href="http://aminoapps.com/p/5063w4s">Plataforma Re-destaque</a></li>
                    <li> <a href="http://aminoapps.com/p/k1735n">Plataforma de Tags</a></li>
                    <li> <a href="http://aminoapps.com/p/5fycs9">Plataforma de Aliados</a></li>
                    <li> <a href="http://aminoapps.com/p/vzd37g">Plataforma de Editores</a></li>
                </ul>
            </section>
            <section>
                <h2>Sistemas</h2>
                <ul>
                    <li><a href="http://aminoapps.com/p/2hgi5e0">Sistema de Banlist</a></li>
                    <li><a href="http://aminoapps.com/p/0d7e9f">Sistema de Batalha</a></li>
                    <li><a href="http://aminoapps.com/p/ydpkvo">Sistema de Pet's</a></li>
                    <li><a href="http://aminoapps.com/p/acc4pp">Sistema de Guildas</a></li>
                    <li><a onClick={()=>{navigate("/sistema/monetario")}}>Sistema Monetario</a></li>
                    <li><a href="http://aminoapps.com/p/tbem4a">Sistema de Dominação</a></li>
                </ul>
            </section>
        </main>
    </div>
  )
}
