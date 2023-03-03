import React from "react";
import Accordions from "../../Components/ArticlePlataform/Accordions";
import ArticlePlataform from "../../Components/ArticlePlataform";
import {PlataformButton, PlataformEnding, PlataformFooter, PlataformNav, PlataformPage, PlataformTitle,} from "./style";
import datas from "./data.json";
import { useNavigate } from "react-router-dom";

function Plataform() {
  const Href = useNavigate()

  return (
    <PlataformPage>
      <PlataformNav>
        <PlataformButton onClick={()=>{Href("/")}}>
          <i className="bi bi-arrow-left-square-fill"/>
        </PlataformButton>
        <PlataformTitle>
           Eventos
        </PlataformTitle>
      </PlataformNav>
        {
            datas.map((datas) => {
                return (<ArticlePlataform key={datas.id} about={datas.about} id={datas.id} image={datas.image} options={datas.options} title={datas.title}/>)
            })
        }
        <PlataformFooter>
          <PlataformEnding>Ultima vez atualizado: hoje</PlataformEnding>
        </PlataformFooter>
    </PlataformPage>
  );
}

export default Plataform;
