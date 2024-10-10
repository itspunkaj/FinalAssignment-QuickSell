import { useContext, useEffect } from 'react';
import './App.css';
import TaskBoard from './Components/TaskBoard';
import TopBar from './Components/Topbar';
import Context from './context/context';


function App() {
  const { setTickets, setUsers, loading, setLoading, setStatuses, setPriorities } = useContext(Context);
  useEffect(() => {
    const apiCall = async () => {
      setLoading(true);
      try {
        const apiUrl = 'https://api.quicksell.co/v1/internal/frontend-assignment'
        fetch(apiUrl)
          .then((res) => {
            if(!res.ok) {
              throw new Error("Something Went Wrong from the server.")
            }
            return res.json();
          }).then((data) => {
            setTickets(data.tickets);
            setUsers(data.users);
            const priorities = new Set();
            const statuses = new Set();
            data.tickets.forEach(element => {
              priorities.add(element.priority);
            });
            statuses.add('Backlog')
            statuses.add('Todo')
            statuses.add('In progress')
            statuses.add('Done');
            statuses.add('Cancelled');
            const statusArray = [...statuses];
            const priorityArray = [...priorities];
            priorityArray.sort();
            priorityArray.reverse();
            setStatuses(statusArray);
            setPriorities(priorityArray);
          })
          .catch((error) => {
            throw new Error(error);
          });

      }
      catch (error) {
        console.error(error);
      }
      finally {
        setLoading(false);
      }
    }

    apiCall();
  }, [])
  return (
    <div className="App">
      <TopBar />
      {loading ? <div>
        Loading
      </div>
        :
        <TaskBoard />
      }
    </div>
  );
}

export default App;
