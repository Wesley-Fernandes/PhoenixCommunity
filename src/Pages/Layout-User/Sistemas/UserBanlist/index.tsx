import React, { FormEvent, useCallback, useState } from 'react'
import supabase from '../../../../Supabase/supabase'
import { Button } from '../../../../Components/Button'
import "./UserBanlist.scss"
import { SearchBanlistInterface, Searched } from '../../../../Components/Searched'
import { useNavigate } from 'react-router-dom'
export const UserBanlist = () => {``
    const [powers, setPowers] = useState<any>()

    const navigate = useNavigate()
    const FormSubmiter =  async (event:FormEvent) =>{
        event.preventDefault();
        const target = event.target as typeof event.target & {
            title: {value: string}
        };
        const titles = target.title.value;

        const { data:Banlist} = await supabase
        .from('Banlist')
        .select("*")
        .eq('title', titles.toUpperCase());


        if(Banlist && Banlist?.length<=0){
            setPowers([]);
            alert("não encontramos!");
            return;
        }

        setPowers(Banlist);



    }

  return (
    <div className='UserBanlist'>

        <form onSubmit={FormSubmiter}>
            <span className='Button-Back' onClick={()=>{navigate("/")}}>Voltar</span>
            <input type="text" name='title' placeholder='Procurar...'/>
            <button className='Button-Search'>Pesquisar</button>
        </form>
        <main>

            {
                powers?.map(({about, image, title, status}:SearchBanlistInterface)=>{
                    return <Searched status={status}  about={about} image={image} title={title} key={title}/>
                })
            }

        </main>
    </div>
  )
}
