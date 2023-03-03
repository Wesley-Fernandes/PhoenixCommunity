import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ArticlePlataform from '../../Components/ArticlePlataform';
import Accordion from '../../Components/ArticlePlataform/Accordions/Accordion';
import supabase from '../../Supabase/supabase';
import { PlataformButton, PlataformNav, PlataformTitle } from '../Plataform/style';
import CreateComponentPlataform from './CreateComponent';
import {ButtonOption, CreatePlataformPage, FormContainer, FormOptionsBar, Input, TextArea, ButtonNew, ButtonsBox, FormFooter} from "./styles"
function CreatePlataform() {
    const [datas, setDatas] = useState<any>([]);
    const [creating, setCreating] = useState<boolean>(false);

    const Href = useNavigate()

    function change(where:string){
        Href(`${where}`);
    }
    async function save(){
        const { data, error } = await supabase
        .from("Plataformas")
        .insert([{datas}]);

      if (error) {
        toast.error(error.message);
      }


      toast.success(`Plataforma foi criada com sucesso!`);
    }

  return (
    <CreatePlataformPage>

        <PlataformNav>
            <PlataformButton>
                <i className="bi bi-arrow-left-square-fill"/>
            </PlataformButton>
            <PlataformTitle>Criando plataforma</PlataformTitle>
        </PlataformNav>


        <FormContainer>
            <ButtonsBox>
                <ButtonNew
                    color={creating?("#4BB4CC"):("#2f7281")}
                    onClick={()=>setCreating(false)}>
                    <i className="bi bi-box"/>
                </ButtonNew>

                <ButtonNew
                    color={creating?("#2f7281"):("#4BB4CC")}
                    onClick={()=>setCreating(true)}>
                    <i className="bi-bounding-box-circles"/>
                </ButtonNew>
            </ButtonsBox>


            {creating?(
                datas.map((datas:any) => {
                    return (
                        <ArticlePlataform
                            key={datas.id}
                            about={datas.about}
                            id={datas.id}
                            image={datas.image}
                            options={datas.options}
                            title={datas.title}/>)
                    })
                 ):(
                    <CreateComponentPlataform
                    setDatas={setDatas}
                    datas={datas}/>
                )}

        <FormFooter>
            <ButtonNew
                color={creating?("#4BB4CC"):("#4BB4CC")}
                onClick={()=>setCreating(true)}>
                    <i className="bi bi-send-fill"/>
            </ButtonNew>
        </FormFooter>



        </FormContainer>
    </CreatePlataformPage>
  )
}

export default CreatePlataform;
