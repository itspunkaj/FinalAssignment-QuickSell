import React from 'react'
import ProfileIcon from '../icons_FEtask/profile.svg'
import { statusIcons } from './TaskBoard'
function Card({ticket}) {
  return (
    <div className='Card'>
      <div className='cardHeader'>
        <h5 className='ticket-id'>
          {ticket.id}
        </h5>
        <img className='profileImage' src={ProfileIcon} alt='user'/>
      </div>
      <div className='cardTitle'>
        <span style={{paddingTop : 3}}>
          <img src={statusIcons[ticket.status]} alt={ticket.status}/>
        </span>
        <div style={{marginLeft: 5, fontSize:12, fontWeight: 500}}>
          {ticket.title}
        </div>
      </div>
    </div>
  )
}

export default Card