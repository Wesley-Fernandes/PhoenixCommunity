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

            <Tipo title='Battle mode' description="Postando um print de um juiz/membro da staff insinuando sua vitória no chat do banco, serão contabilizados 200 Pc's em sua carteira. Vale lembrar que só consta com vitórias feitas no dia, proibindo qualquer outra que não seja no dia em que requisitou a recompensa." key="BattleMode"/>

            <Tipo title='Job mode' description="Estando em um cargo da staff/emprego em determinado chat público, você ganha automaticamente 200 Pc's diários, podendo reclamar essa quantia uma vez por dia.
            Observação: Não se esqueça; para poder receber a quantia, tem de haver a tag de funcionário do chat." key="JobMode"/>
    </div>
    

  )
}
