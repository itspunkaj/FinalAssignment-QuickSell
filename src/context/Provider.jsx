import { useState } from "react";
import Context from "./context";

const ContextProvider = ({ children }) => {
  const [tickets, setTickets] = useState(null);
  const [users, setUsers] = useState(null);
  const [statuses, setStatuses] = useState(null);
  const [priorities, setPriorities] = useState(null);
  const [grouping,setGrouping] = useState('status');
  const [ordering, setOrdering] = useState('priority');
  const [loading,setLoading] = useState(false);

  return (
    <Context.Provider value={{ tickets, setTickets, users, setUsers, statuses, setStatuses, priorities, setPriorities, grouping, setGrouping, ordering, setOrdering,loading, setLoading }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider