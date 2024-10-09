import React from 'react'

function Dropdown() {
  return (
    <div className='displayDropdownParentDiv'>
      <div className='displayDropdownToggle'>
        Display
      </div>
      <div className='displayDropdown'>
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
            Grouping
          </span>
          <select>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Dropdown