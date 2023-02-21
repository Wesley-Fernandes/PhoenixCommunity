import React from "react";
import { useNavigate } from "react-router-dom";
import {toast} from "react-toastify"
import supabase from "../../Supabase/supabase";
import { Button } from "../Button";
import "./Header.scss";
export const Header = () => {
  const dates = [
    { title: "Banlist", jumper: "Banlist" },
    { title: "Limites", jumper: "Limites" },
    { title: "Pets", jumper: "Pets" },
    { title: "Guildas", jumper: "Guildas" },
    { title: "Monetario", jumper: "Monetario" },
    { title: "Dominação", jumper: "Dominação" },
    { title: "Batalha", jumper: "Batalha" },
    { title: "Create user", jumper: "Create" },
  ];

  const navigate = useNavigate()
  //rote="/Dashboard"
  //rote="Deslogar"

  const singOut =  async() =>{
    let { error } = await supabase.auth.signOut();
    if(error){
      toast.error(`Erro ${error.status}: ${error.message}`);
      return
    }

    toast.success("Deslogado com exito!")

  }

  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container-fluid">
        <a className="navbar-brand text-light font-weighter ps-2">Phoenix</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon text-light"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active pointer-cursor text-light" aria-current="page" onClick={()=>{navigate("/dashboard")}}>
                Home
              </a>
            </li>

            {dates.map((date) => {
              return (
                <li className="nav-item" key={date.jumper}>
                  <a className="nav-link pointer-cursor text-light" onClick={()=>{navigate(date.jumper)}}>
                    {date.title}
                  </a>
                </li>
              );
            })}
            <li className="nav-item">
                <a className="nav-link pointer-cursor text-light" onClick={()=>{singOut()}}>
                    Deslogar
                </a>
              </li>
         </ul>
        </div>
      </div>
    </nav>
  );
};
