import Form from '../components/Form';
import axios from "axios"

function Login({onLogin}) {

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
        onLogin(token);

      } catch(err) {
        console.error(err);
      }
}
  return (
    <div className="App">
      <h1>LOGIN</h1>
      <Form handleSubmit={handleSubmit}/>
    </div>
  );
}

export default Login;
