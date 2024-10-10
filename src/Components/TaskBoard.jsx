import React, { useContext } from 'react'
import Context from '../context/context'
import DoneIcon from '../icons_FEtask/Done.svg'
import BacklogIcon from '../icons_FEtask/Backlog.svg'
import InProgressIcon from '../icons_FEtask/in-progress.svg'
import CancelledIcon from '../icons_FEtask/Cancelled.svg'
import TodoIcon from '../icons_FEtask/To-do.svg'
import PlusIcon from '../icons_FEtask/add.svg'
import ThreeDot from '../icons_FEtask/3 dot menu.svg'
import Card from './Card'

export const statusIcons = {
  Backlog: BacklogIcon,
  Todo: TodoIcon,
  'In progress': InProgressIcon,
  Done: DoneIcon,
  Cancelled: CancelledIcon,
};

function TaskBoard() {
  const { tickets, users, grouping, ordering, statuses, priorities } = useContext(Context);
  
  return (
    <div className='taskboardContainer'>
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
                {tickets?.map((ticket, index)=>{
                  return (
                    ticket.status === status && <Card key={index} ticket={ticket}/>
                  )
                })}
              </div>
            </div>
          );
        })
      }
    </div>
  )
}

export default TaskBoard