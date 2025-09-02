import React from 'react'
import SkyHeader from '../components/SkyLobby/SkyHeader'
import { Outlet } from 'react-router-dom'
import SkyFooter from '../components/SkyLobby/SkyFooter'

function SkyLobbyLayout() {
  return (
    <>
      <div
        className='scroll-smooth bg-[#efebe6]'
        style={{
          fontFamily:
            'ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        }}
      >
        <SkyHeader />
        <Outlet />
        <SkyFooter />
      </div>
    </>
  )
}

export default SkyLobbyLayout