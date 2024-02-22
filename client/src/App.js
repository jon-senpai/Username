import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setage] = useState(0)
  const [username, setUsername] = useState("");


  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers")
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const createUser = () => {
    Axios.post("http://localhost:3001/createUser", {
      name: "", 
    age: 0, 
    username: "",
  })
      .then((response) => {
        alert("User created!");
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  return (
    <div className="App">
      <div className="usersDisplay">
        {listOfUsers.map((user) => {
          return <div key={user.id}> 
            <h1>Name: {user.name} </h1>
            <h1>Age: {user.age} </h1>
            <h1>Username: {user.username} </h1>
          </div>;
        })}
      </div>
      <div>
        <input type="text" 
        placeholder="Name..." 
        onChange= {(event) => {
          setName(event.target.value);
        }}
          />
        <input type="number" placeholder="Age..." />
        <input type="text" placeholder="Username..." />
        <button onClick={createUser}> Create User</button>
      </div>
    </div>
  );
}

export default App;
