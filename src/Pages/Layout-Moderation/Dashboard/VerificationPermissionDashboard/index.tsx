import React from 'react'
import { IDatesDashboard, IPermission } from '..';
import { ListItem } from '../../../../Components/List';



export default function RenderDashboardItens({permission, dates}:any) {
  return (
    <>
    {
      permission === "agent" &&(
        <ul>
          {
            dates.map(({title, jumper}: IDatesDashboard)=>{
              return <ListItem key={jumper} title={title} jumper={jumper}/>
            })
          }
      </ul>
      )
    }


    {
      permission === "zeta" &&(
        <ul>
          {
            dates.map(({title, jumper}: IDatesDashboard)=>{
              return <ListItem key={jumper} title={title} jumper={jumper}/>
            })
          }
      </ul>
      )
    }



    {
      permission === "omega" &&(
        <ul>
          {
            dates.map(({title, jumper}: IDatesDashboard)=>{
              return <ListItem key={jumper} title={title} jumper={jumper}/>
            })
          }
      </ul>
      )
    }
    </>
  )
}
