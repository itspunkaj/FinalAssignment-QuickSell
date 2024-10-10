import React from 'react'
import Dropdown from './Dropdown'

function TopBar() {
  return (
    <nav >
      <div className='topBar container'>
        <Dropdown/>
      </div>
    </nav>
  )
}

export default TopBar