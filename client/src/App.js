import React, { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
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
      name, 
      age, 
      username,
    })
    .then((response) => {
      alert("User created!");
      setListOfUsers([...listOfUsers, { name, age, username }]);
    })
    .catch((error) => {
      console.error('Error creating user:', error);
    });
  };

  return (
    <div className="App" style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: '#f8f9fa', padding: '20px' }}>
      <h1 style={{ color: '#007bff', marginBottom: '30px' }}>User Management App</h1>
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Name..." 
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ced4da', fontSize: '16px' }}
          onChange={(event) => setName(event.target.value)}
        />
        <input 
          type="number" 
          placeholder="Age..." 
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ced4da', fontSize: '16px' }}
          onChange={(event) => setAge(event.target.value)}
        />
        <input 
          type="text" 
          placeholder="Username..." 
          style={{ padding: '10px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ced4da', fontSize: '16px' }}
          onChange={(event) => setUsername(event.target.value)}
        />
        <button 
          onClick={createUser} 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer', 
            fontSize: '16px' 
          }}
        >
          Create User
        </button>
      </div>
      <div style={{ backgroundColor: 'white', padding: '20px', borderRadius: '5px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
        {listOfUsers.map((user) => (
          <div key={user.id} style={{ marginBottom: '10px', padding: '10px', borderRadius: '5px', border: '1px solid #ced4da' }}> 
            <h2 style={{ color: '#007bff', margin: '0' }}>Name: {user.name} </h2>
            <p style={{ margin: '0' }}>Age: {user.age} </p>
            <p style={{ margin: '0' }}>Username: {user.username} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
