import React from "react";
import "./Searched.scss"


export interface SearchBanlistInterface{
  title: string;
  image: string;
  about: string;
  status: string;
}
export const Searched = ({title, image, about, status}: SearchBanlistInterface) => {


  return (
    <div className="banlist-searched">
      <h2>{title}</h2>
      <span className="status">{status}</span>
      <div className="banlist-searched-image">
        <img
          src={image}
          alt="imagem sobre o assunto"
        />
      </div>
      <p>
        {about}
      </p>
    </div>
  );
};
