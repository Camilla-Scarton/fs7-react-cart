import { useState } from 'react';
import Form from './Form';
import axios from "axios"

function App() {
  const [token, setToken] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
        const results = await axios({
          url: "http://localhost:3030/users/login",
          method: "POST",
          data: {
            email: "mario.bianchi@example.com",
            password: "1234"
          }
        });
      
        const {token} = results.data; // -> { user: { ... }, token: ... }
        setToken(token);

      } catch(err) {
        console.error(err);
      }
}
  return (
    <div className="App">

      {token ? 
      <div>
        <button onClick={() => setToken(null)}>Logout</button>
        <h1>{token}</h1> 
      </div>
      :  <Form handleSubmit={handleSubmit}/>}
    </div>
  );
}

export default App;
