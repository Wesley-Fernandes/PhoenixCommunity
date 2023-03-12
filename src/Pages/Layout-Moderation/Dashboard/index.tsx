import React from "react";
import { ListItem } from "../../../Components/List";
import "./Dashboard.scss";
import RenderDashboardItens from "./VerificationPermissionDashboard";

export interface IDatesDashboard{
  title: string;
  jumper: string;
}

export interface IPermission{
  permission: string;
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

  const permission: string = "agent"
  return (
    <>
      <RenderDashboardItens
        permission={permission}
        dates={dates}/>
    </>

  );
};
