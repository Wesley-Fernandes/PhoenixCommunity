import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./Profile.scss"
import logo from "../../Images/logo.png"
export const Profile = () => {
    const navigate = useNavigate()
    const img_guts = "https://lh5.googleusercontent.com/-dzYenkdOqoI/AAAAAAAAAAI/AAAAAAAAFM8/xEF70U3IZP0/photo.jpg"
  return (
    <div className='ProfilePage'>
        <main>
            <div className='InfoHud'>
                <img src={logo} alt="imagem da phoenix" onClick={()=>{navigate("/")}}/>
                <div className='BasicInfo'>
                    <img src={img_guts} alt="Imagem do usuario" />
                    <div className='Informations'>
                        <h3 className='MyName'>Guts</h3>
                        <div className='Evolution'>
                            <span>level 1 </span>
                            <progress value={60} max={100}/>
                            <span>level 2</span>
                        </div>
                        <div className='PersonalInfo'>
                            <span><strong>Sexo:</strong> Masculino</span>
                            <span><strong>Idade:</strong> 22 anos</span>
                            <span><strong>Apelido:</strong> Cavaleiro negro</span>
                            <span><strong>Clãn:</strong> Falcões brancos</span>
                            <span><strong>Pericia:</strong> Guerreiro</span>
                        </div>
                    </div>
                </div>
                <p>
                Guts é descoberto pelo bando de mercenários liderado por Gambino em uma poça de lama e sangue de sua própria mãe, que havia sido enforcada em uma árvore junto de diversas outras pessoas. Ao notar a criança, Siss, amada de Gambino, que havia enlouquecido com a perda de sua própria prole (por meio de um aborto espontâneo), pega o pequeno Guts para si. Depois de um tempo, Gambino intervém, puxando Siss e dizendo que aquilo era um bebê morto. Quando o corpo de Guts acerta o chão, ele começa a chorar, surpreendendo aos mercenários. Siss toma Guts em seus braços novamente, e Gambino permite a ela leva-lo consigo apesar dos outros comentarem como era má sorte pegar uma criança em um lugar como aquele, já que a fazia feliz. Três anos depois de ser encontrado, Guts assiste enquanto mulheres do bando de Gambino tentam manter viva Siss, que sofria de uma terrível doença "peste". Guts é ordenado a esperar fora da tenda, pois poderia morrer também se infectado pela doença, mas caminha até Siss quando chamado, segurando sua mão enquanto ela morre.
                </p>

            </div>
        </main>
    </div>
  )
}
