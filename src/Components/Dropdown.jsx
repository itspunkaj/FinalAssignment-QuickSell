import React, { useContext, useState } from 'react'
import DisplayIcon from '../icons_FEtask/Display.svg'
import DownIcon from '../icons_FEtask/down.svg'
import Context from '../context/context';

function Dropdown() {
  const { grouping, setGrouping, ordering, setOrdering } = useContext(Context);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleToggleDropdown = () => {
    console.log("Dropdown toggled");
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleGroupingChange = (event) => {
    console.log("Grouping Changed to ", event.target.value);
    setGrouping(event.target.value);
    localStorage.setItem('Groupings', event.target.value);
    setIsDropdownOpen(!isDropdownOpen);
  }

  const handleOrderingChange = (event) => {
    console.log("Ordering Changed to ", event.target.value);
    setOrdering(event.target.value);
    localStorage.setItem('Orderings', event.target.value);
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className='displayDropdownParentDiv'>
      <button className='displayDropdownToggle' onClick={handleToggleDropdown}>
        <img src={DisplayIcon} alt="Display" />
        <span className='displayText'>
          Display
        </span>
        <img src={DownIcon} alt='Down' />
      </button>
      <div className={`displayDropdown ${isDropdownOpen ? 'OpenDropdown' : 'CloseDropdown'}`}>
        <div className='displayDropdownGrid'>
          <span>
            Grouping
          </span>
          <select onChange={handleGroupingChange}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
        </div>
        <div className='displayDropdownGrid'>
          <span>
            Ordering
          </span>
          <select onChange={handleOrderingChange}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Dropdown