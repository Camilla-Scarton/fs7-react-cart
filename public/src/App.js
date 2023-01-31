import { useState } from "react";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
    const [token, setToken] = useState(null);
    const onLogout = () => {
        setToken(null);
    }

    const onLogin = (_token) => {
        setToken(_token)
    }

    if (!token) {
        return (
            <Login onLogin={onLogin} />
        )
    } else {
        return (
            <Profile onLogout={onLogout} token={token}/>
        )
    }
}

export default App