import './App.css';
import UserForm from './Components/UserForm';
import {useState} from 'react';
import UserList from "./Components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user){
    setUsers([...users, user]);
  }

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <UserForm addUser={addUser} />
        </div>

        <div className="col-md-6"><br/><br/>
          <UserList allUsers = {users} />
        </div>
      </div>
    </div>
  );
}

export default App;