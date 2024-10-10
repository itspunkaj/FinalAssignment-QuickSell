import React, { useContext } from 'react'
import ProfileIcon from '../icons_FEtask/profile.svg'
import { statusIcons } from './TaskBoard'
import Context from '../context/context'
import NoPriorityIcon from '../icons_FEtask/No-priority.svg'
import LowPriorityIcon from '../icons_FEtask/Img - Low Priority.svg'
import MediumPriorityIcon from '../icons_FEtask/Img - Medium Priority.svg'
import HighPriorityIcon from '../icons_FEtask/Img - High Priority.svg'
import UrgentGreyPriorityIcon from '../icons_FEtask/SVG - Urgent Priority grey.svg'


export const priorityIcons = [NoPriorityIcon,LowPriorityIcon,MediumPriorityIcon,HighPriorityIcon,UrgentGreyPriorityIcon];
function Card({ ticket }) {
  const { grouping } = useContext(Context)
  return (
    <div className='Card'>
      <div className='cardHeader'>
        <h5 className='ticket-id'>
          {ticket.id}
        </h5>
        <img className='profileImage' src={ProfileIcon} alt='user' />
      </div>
      <div className='cardTitle'>
        {grouping !== 'status' &&
          <span style={{ paddingTop: 2, marginRight: 5 }}>
            <img src={statusIcons[ticket.status]} alt={ticket.status} />
          </span>
        }
        <div style={{  fontSize: 12, fontWeight: 500 }}>
          {ticket.title}
        </div>
      </div>
      <div style={{ display: 'flex', gap : 4, marginTop: 10 }}>
        <div className='cardTags'><img src={priorityIcons[ticket.priority]} alt={ticket.priority}/></div>
        <div className='cardTags'>{ticket.tag}</div>
      </div>
    </div>
  )
}

export default Card