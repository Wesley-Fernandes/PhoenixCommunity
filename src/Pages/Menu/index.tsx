import React from 'react'
import logo from '../../Images/logo2.png'
import { Link, useNavigate } from 'react-router-dom'
import "./Menu.scss"
import { ListItem } from '../../Components/List'
import { Button, ContainerBox, MenuPage, Title } from './styles'
export const Menu = () => {
    const Href = useNavigate();
    const isMobileOne = () => {
        return /Android|iPhone/i.test(navigator.userAgent);
    }

    const isMobileTwo = () => {
        return navigator.maxTouchPoints > 0;
    }

    const verificationOne = isMobileOne();
    const verificationTwo = isMobileTwo();
  return (
    <>
    {verificationOne===true && verificationTwo===false ?(
        <MenuPage>
        <ContainerBox>
            <Title>Atalhos suporte</Title>
                <Button href='ndc://guidelines'>
                     Diretrizes da comunidade
                </Button>
                <Button href='http://aminoapps.com/p/4rovbd'>
                     Fazer uma denuncia
                </Button>
                <Button href='http://aminoapps.com/p/eg5lr8'>
                     Modelos de ficha
                </Button>
                <Button onClick={()=>Href('./recrutamento')}>
                    <i className="bi bi-award icon-menu"/>
                    Fazer recrutamento
                </Button>

        </ContainerBox>

        <ContainerBox>
            <Title>Atalhos Plataformas</Title>
            <Button href='https://aminoapps.com/c/rpg/page/item/plataforma-de-destaques/ne1L_V6iKI5WlJYQ3bpVddkxRMeG7BZdx'>
                 Plataforma de Destaque
            </Button>
            <Button href='http://aminoapps.com/p/1q3y9v'>
                 Plataforma de Sugestões
            </Button>
            <Button href='https://aminoapps.com/c/rpg/page/item/plataforma-de-chats/pe60_gJipInxY5LGzYv2RNkbvPMkZ0aXxk'>
                 Plataforma de Chats
            </Button>
            <Button href='https://aminoapps.com/c/rpg/page/blog/gateway-de-re-destaque/ge8Z_m4i6uqK1zQ1vXM8kJg6aX1vPvk4zR'>
                 Plataforma de Re-destaque
            </Button>
            <Button href='https://aminoapps.com/c/rpg/page/item/plataforma-de-tags/ee5g_qDi6Izdd36qlqbE7VDx467xMD7Rg'>
                 Plataforma de Tags
            </Button>
            <Button href='https://aminoapps.com/c/rpg/page/item/sistema-de-aliados/N3aN_xnsWIwXmqWaDB8dbWl5bL0GxZmpD'>
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
            <Button href='https://aminoapps.com/c/rpg/page/blog/sistema-de-banlist/6pjl_QGfzuGJ4JZDqxaeWRQv7BqeEZ4VRX0'>
                Sistema de Banlist
            </Button>
            <Button href='https://aminoapps.com/c/rpg/page/blog/sistema-limitador/re3B_ZMieu0M0xPJmMxrMX0Jb8vVqJgnZK'>
                Sistema de limites
            </Button>
            <Button href='https://aminoapps.com/c/rpg/page/blog/sistema-de-equipamentos/LJ0o_ErH8ulKQqDMwQl0KMWG7KK4M2RJp'>
                Sistema de equipamentos
            </Button>
            <Button href='http://aminoapps.com/p/0d7e9f'>
                Sistema de Batalha
            </Button>
            <Button href='https://aminoapps.com/c/rpg/page/item/sistema-familiar/QvGY_8xfYIpp12NG3Gka605d3VrBqVovl'>
                Sistema de Pet's
            </Button>
            <Button href='https://aminoapps.com/c/rpg/page/item/sistema-de-guildas/Xxlw_daCXIkLdRoL12o6E60nQK51DeJdn'>
                Sistema de Guildas
            </Button>
            <Button href='https://aminoapps.com/c/rpg/page/item/sistema-monetario/N3aN_xnsWIaMV3dDZ1w1bjbEPYNkpjod1w'>
                Sistema de Monetario
            </Button>
            <Button href='https://aminoapps.com/c/rpg/page/item/sistema-de-dominacao/Gb3L_MVfVIdb4gxRbYwRkzvDG3mEG2Zpw'>
                Sistema de Dominação
            </Button>
        </ContainerBox>
    </MenuPage>
    ):(
        <MenuPage>
            <ContainerBox>
                <h2 className='text-center text-light'>Sem permissão</h2>
                <p className='text-light'>
                    Esse site só é acessivel para disposivos moveis por segurança.</p>
            </ContainerBox>
        </MenuPage>
    )}
    </>
  )
}
