import React from 'react'
import logo from '../Images/nav-logo.png'

function Header() {
  return (
    <>
      <div className='nav-bg'>
        <div className='logo'>
          <img src={logo} alt="logo" width={200} />
        </div>
      </div>
    </>
  )
}

export default Header