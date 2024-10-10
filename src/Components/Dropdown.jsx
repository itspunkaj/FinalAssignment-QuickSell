import React, { useState } from 'react'
import DisplayIcon from '../icons_FEtask/Display.svg'
import DownIcon from '../icons_FEtask/down.svg'

function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleToggleDropdown = () => {
    console.log("Dropdown toggled");
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className='displayDropdownParentDiv'>
      <button className='displayDropdownToggle' onClick={handleToggleDropdown}>
        <img src={DisplayIcon} alt="Display" />
        <spanc className='displayText'>
          Display
        </spanc>
        <img src={DownIcon} alt='Down' />
      </button>
      <div className={`displayDropdown ${isDropdownOpen ? 'OpenDropdown' : 'CloseDropdown'}`}>
        <div className='displayDropdownGrid'>
          <span>
            Grouping
          </span>
          <select>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className='displayDropdownGrid'>
          <span>
            Ordering
          </span>
          <select>
            <option value="status">Priority</option>
            <option value="user">Title</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Dropdown