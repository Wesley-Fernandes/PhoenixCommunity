import React from 'react'
import {useNavigate } from 'react-router-dom';
import "./ListItem.scss"
interface ListItemInterface {
    title: string;
    jumper?: string;
}

export const ListItem = ({jumper, title}:ListItemInterface) => {
  const navigate = useNavigate()
  return (
    <>
        {
            jumper ?(
            <li className='ListItemComponent'>
                <a onClick={()=>{navigate(jumper)}}>
                    {title}
                </a>
            </li>
            ):(
            <li className='ListItemComponent'>
                <a>
                    {title}
                </a>
            </li>
            )
        }
    </>
  )
}
