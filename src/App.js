import './App.css';
import UserForm from './Components/UserForm';
import { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  function addUser(user) {
    setUsers([...users, user]);
  }

  return(
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <UserForm addUser={addUser} />
        </div>

        <div className="col-md-6"></div>
      </div>
    </div>
  );
}

export default App;