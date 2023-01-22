import React from 'react'
import { Tipo } from './Tipos'

export const Obter = () => {
  return (
    <div className='Box'>
        <h2>Modo de obter</h2>
        <hr />
            <p>
                Há vários modos de obter nosso tipo de moeda; dentre eles, listei alguns disponíveis com base em atividade na PHOENIX. Lembrando que alguns desses métodos podem sumir ou mudar conforme o sistema for atualizando.
            </p>

            <Tipo title='Time mode' description="Uma vez por dia, você pode pedir no chat de banco ou a um banqueiro que te dêem 100 Pc's a cada 50 minutos diários. Para receber, basta enviar um print do seu tempo diário e o link de sua carteira, assim contabilizando diretamente a sua conta." key="TimeMode"/>
    </div>
    

  )
}
