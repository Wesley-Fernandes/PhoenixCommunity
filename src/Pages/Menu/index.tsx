import React from 'react'
import logo from '../../Images/logo2.png'
import { Link, useNavigate } from 'react-router-dom'
import "./Menu.scss"
import { ListItem } from '../../Components/List'
import { Button, ContainerBox, MenuPage, Title } from './styles'
export const Menu = () => {
    const Href = useNavigate();

  return (
    <MenuPage>
        <ContainerBox>
            <Title>Atalhos suporte</Title>
                <Button href='http://aminoapps.com/p/vwfx8h'>
                     Diretrizes
                </Button>
                <Button href='http://aminoapps.com/p/4rovbd'>
                     Fazer uma denuncia
                </Button>
                <Button href='http://aminoapps.com/p/eg5lr8'>
                     Modelos de ficha
                </Button>

        </ContainerBox>

        <ContainerBox>
            <Title>Atalhos Plataformas</Title>
            <Button href='http://aminoapps.com/p/7qw8in'>
                 Plataforma de Destaque
            </Button>
            <Button href='http://aminoapps.com/p/1q3y9v'>
                 Plataforma de Sugestões
            </Button>
            <Button href='http://aminoapps.com/p/jh5vh7b'>
                 Plataforma de Chats
            </Button>
            <Button href='http://aminoapps.com/p/5063w4s'>
                 Plataforma de Re-destaque
            </Button>
            <Button href='http://aminoapps.com/p/k1735n'>
                 Plataforma de Tags
            </Button>
            <Button href='http://aminoapps.com/p/5fycs9'>
                Plataforma de Aliados
            </Button>

            <Button href='http://aminoapps.com/p/vzd37g'>
                Plataforma de Editores
            </Button>

            <Button href='http://aminoapps.com/p/528i8q'>
                    Plataforma de aprovação de fichas
                </Button>
        </ContainerBox>


        <ContainerBox>
            <Title>Atalhos Sistemas</Title>
            <Button href='http://aminoapps.com/p/2hgi5e0'>
                Sistema de Banlist
            </Button>
            <Button href='http://aminoapps.com/p/0d7e9f'>
                Sistema de Batalha
            </Button>
            <Button href='http://aminoapps.com/p/ydpkvo'>
                Sistema de Pet's
            </Button>
            <Button href='http://aminoapps.com/p/acc4pp'>
                Sistema de Guildas
            </Button>
            <Button href='https://aminoapps.com/c/rpg/page/item/sistema-monetario/N3aN_xnsWIaMV3dDZ1w1bjbEPYNkpjod1w'>
                Sistema de Monetario
            </Button>
            <Button href='http://aminoapps.com/p/tbem4a'>
                Sistema de Dominação
            </Button>
        </ContainerBox>
    </MenuPage>
  )
}
