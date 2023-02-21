import React from "react";
import { ListItem } from "../../../Components/List";
import "./Dashboard.scss";

interface dateInterface{
  title: string;
  jumper: string;
}
export const DashboardPage = () => {
  const dates = [
    {title: "Banlist", jumper: "Banlist"},
    {title: "Limites", jumper: "Limites"},
    {title: "Pets", jumper: "Pets"},
    {title: "Guildas", jumper: "Guildas"},
    {title: "Monetario", jumper: "Monetario"},
    {title: "Dominação", jumper: "Dominação"},
    {title: "Batalha", jumper: "Batalha"},
    {title: "Create user", jumper: "Create"},
  ]
  return (
    <>
      <ul>
          {
            dates.map(({title, jumper}: dateInterface)=>{
              return <ListItem key={jumper} title={title} jumper={jumper}/>
            })
          }
      </ul>
    </>

  );
};
