import React from "react";
import Accordions from "./Accordions";
import {
  Banner,
  BannerBox,
  ContainerBox,
  ContainerTitle,
  Paragrafy
} from "./style";

export interface IOptions{
    id: number;
    title: string;
    text: string;
}
export interface IArticlePlataform{
    id: number;
    title: string;
    about: string;
    image: string;
    options: IOptions[]
}
function ArticlePlataform(props:IArticlePlataform) {

  return (
    <>
      <ContainerBox>
        <ContainerTitle>{props.title}</ContainerTitle>
        <BannerBox>
          <Banner src={props.image} />
        </BannerBox>
        <Paragrafy>
          {props.about}
        </Paragrafy>
        {
            props.options.length > 0 &&(
                <Accordions datas={props.options} attId={props.id}/>
            )
        }
      </ContainerBox>
    </>
  );
}

export default ArticlePlataform;
