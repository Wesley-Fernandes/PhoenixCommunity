import React from 'react'
import logo from '../../Images/logo.png'
import "./Menu.scss"
export const Menu = () => {
  return (
    <div className='MenuPage'>
        <main>
            <img src={logo} alt="imagem de uma phoenix"/>
            <section>
                <h2>Você precisa de ajuda?</h2>
                <hr />
                <ul>
                    <li> <a href="http://aminoapps.com/p/4rovbd">Regras da comunidade</a></li>
                    <li>Dicas para novos usuarios</li>
                    <li><a href="http://aminoapps.com/p/vwfx8h">Falar com a Staff</a></li>
                    <li><a href="http://aminoapps.com/p/4rovbd">Fazer uma denuncia</a></li>
                </ul>
            </section>
            <section>
                <h2>Plataformas</h2>
                <hr />
                <ul>
                    <li> <a href="http://aminoapps.com/p/7qw8in">Plataforma Destaque</a></li>
                    <li> <a href="http://aminoapps.com/p/jh5vh7b">Plataforma de Chats</a></li>
                    <li> <a href="http://aminoapps.com/p/5063w4s">Plataforma Re-destaque</a></li>
                    <li> <a href="http://aminoapps.com/p/k1735n">Plataforma de Tags</a></li>
                    <li> <a href="http://aminoapps.com/p/5fycs9">Plataforma de Aliados</a></li>
                    <li> <a href="http://aminoapps.com/p/vzd37g">Plataforma de Editores</a></li>
                </ul>
            </section>
            <section>
                <h2>Sistemas</h2>
                <hr />
                <ul>
                    <li>Sistema de Banlist</li>
                    <li>Sistema Limitador</li>
                    <li>Sistema de Batalha</li>
                    <li>Sistema de Pet's</li>
                    <li>Sistema de Guildas</li>
                    <li>Sistema Monetario</li>
                    <li>Sistema de Dominação</li>
                </ul>
            </section>
        </main>
    </div>
  )
}
