import React from 'react'

export const Emprestimos = () => {
  return (
    <div className='Emprestimos Box'>
            <h2>Solicitar emprestimos</h2>
            <hr />
            <p>
                Como em um banco de verdade, você terá direitos de pegar empréstimos de livre quantia a ele e poderá pagar até 15 dias. Caso não consiga pagar esse valor, será cobrado uma taxa de juros.
            </p>


            <div className='EmprestimosTipos'>
                <h3>Tabela de juros</h3>
                <p>Serão aplicados juros relativos a quantidade de coins que o usúario pediu ao banco que devem ser pagos posteriormente.</p>
                <ul>
                    <li><strong> -</strong> 10% de juros: 1.000 a 5.000 coins.</li>
                    <li><strong> -</strong> 30% de juros: 6.000 a 10.000 coins.</li>
                    <li><strong> -</strong> 50% de juros: 11.000 a 20.000 coins.</li>
                    <li><strong> -</strong> 70% de juros: +21.000 coins.</li>
                </ul>
            </div>


            <div className='EmprestimosTipos'>
                <h3>Quebra de contrato</h3>
                <p>
                    Serão aplicadas punições caso não seja efetuado o pagamento do valor pego e dos juros, caso tenha sido cobrado.
                </p>
                <ul>
                    <li><strong> -</strong> Sete dias sem ter direito de ganhar Pc's.</li>
                    <li><strong> -</strong> Valor usurpado da carteira sem aviso prévio.</li>
                    <li><strong> -</strong> Compras removidas da conta.</li>
                    <li><strong> -</strong> Transferências de coins anuladas.</li>
                    <li><strong> -</strong> Multa de 3.000 Pc's.</li>
                    <li><strong> -</strong> Punições de perfil em casos graves.</li>
                </ul>
            </div>
        </div>
  )
}
