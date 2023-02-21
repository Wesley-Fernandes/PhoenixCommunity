import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from '../../Components/Header'
import { ListItem } from '../../Components/List'
import "./LayoutStyle.scss"

export const Layout = () => {
  return (
    <div className='Dashboard-Page'>
        <Header/>
        <main>
          <Outlet/>
        </main>
    </div>
  )
}
