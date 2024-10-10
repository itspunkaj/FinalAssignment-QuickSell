import React, { useContext } from 'react'
import Context from '../context/context'
import DoneIcon from '../icons_FEtask/Done.svg'
import BacklogIcon from '../icons_FEtask/Backlog.svg'
import InProgressIcon from '../icons_FEtask/in-progress.svg'
import CancelledIcon from '../icons_FEtask/Cancelled.svg'
import TodoIcon from '../icons_FEtask/To-do.svg'
import PlusIcon from '../icons_FEtask/add.svg'
import NoPriorityIcon from '../icons_FEtask/No-priority.svg'
import LowPriorityIcon from '../icons_FEtask/Img - Low Priority.svg'
import MediumPriorityIcon from '../icons_FEtask/Img - Medium Priority.svg'
import HighPriorityIcon from '../icons_FEtask/Img - High Priority.svg'
import UrgentPriorityIcon from '../icons_FEtask/SVG - Urgent Priority colour.svg'
import ThreeDot from '../icons_FEtask/3 dot menu.svg'
import ProfileIcon from '../icons_FEtask/profile.svg'

import Card from './Card'


const priorityIcons = [NoPriorityIcon, LowPriorityIcon, MediumPriorityIcon, HighPriorityIcon, UrgentPriorityIcon];

export const statusIcons = {
  Backlog: BacklogIcon,
  Todo: TodoIcon,
  'In progress': InProgressIcon,
  Done: DoneIcon,
  Cancelled: CancelledIcon,
};
const priorityArray = ['No Priority','Low Priority','Medium Priority','High Priority','Urgent']

function TaskBoard() {
  const { tickets, users, grouping, ordering, statuses, priorities } = useContext(Context);

  return (
    <div className='taskboardContainer container'>
      {grouping === 'status' &&
        statuses?.map((status, index) => {
          const icon = statusIcons[status];
          return (
            <div key={index}>
              <div className='columnHeader'>
                <img src={icon} alt={status} />
                <h4 style={{ marginLeft: 10 }}>{status}</h4>
                <div className='actionBar'>

                  <div className='actionButton'>
                    <img src={PlusIcon} alt='add task' />
                  </div>
                  <div className='actionButton'>
                    <img src={ThreeDot} alt='ThreeDot' />
                  </div>
                </div>
              </div>
              <div className='columnContent'>
                {                
                tickets?.map((ticket, index) => {
                  return (
                    ticket.status === status && <Card key={index} ticket={ticket} />
                  )
                })}
              </div>
            </div>
          );
        })
      }

      {grouping === 'priority' &&
        priorities?.map((priority, index) => {
          const icon = priorityIcons[priority];
          const priorityName = priorityArray[priority]

          return (
            <div key={index}>
              <div className='columnHeader'>
                <img src={icon} alt={priority} />
                <h4 style={{ marginLeft: 10 }}>{priorityName}</h4>
                <div className='actionBar'>

                  <div className='actionButton'>
                    <img src={PlusIcon} alt='add task' />
                  </div>
                  <div className='actionButton'>
                    <img src={ThreeDot} alt='ThreeDot' />
                  </div>
                </div>
              </div>
              <div className='columnContent'>
                {tickets?.map((ticket, index) => {
                  return (
                    ticket.priority === priority && <Card key={index} ticket={ticket} />
                  )
                })}
              </div>
            </div>
          )
        })
      }

      {grouping === 'user' &&
        users?.map((user, index) => {
          // const icon = priorityIcons[priority];

          return (
            <div key={index}>
              <div className='columnHeader'>
                <img src={ProfileIcon} alt={user.name} />
                <h4 style={{ marginLeft: 10 }}>{user.name}</h4>
                <div className='actionBar'>
                  <div className='actionButton'>
                    <img src={PlusIcon} alt='add task' />
                  </div>
                  <div className='actionButton'>
                    <img src={ThreeDot} alt='ThreeDot' />
                  </div>
                </div>
              </div>
              <div className='columnContent'>
                {tickets?.map((ticket, index) => {
                  return (
                    ticket.userId === user.id && <Card key={index} ticket={ticket} />
                  )
                })}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default TaskBoard