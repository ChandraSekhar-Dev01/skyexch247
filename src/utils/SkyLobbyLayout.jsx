import React from 'react'
import SkyHeader from '../components/SkyLobby/SkyHeader'
import { Outlet } from 'react-router-dom'

function SkyLobbyLayout() {
  return (
    <>
      <div className='scroll-smooth bg-[#efebe6]'>
        <SkyHeader />
        <Outlet />
      </div>
    </>
  )
}

export default SkyLobbyLayout