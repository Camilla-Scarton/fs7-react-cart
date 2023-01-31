import { useEffect, useState } from "react";
import { internalMemory } from "./utilities";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);

    const onLogout = () => {
        setToken(null);
        internalMemory.remove("token");
    }

    const onLogin = (_token) => {
        setToken(_token);
        internalMemory.save("token", _token);
    }

    useEffect(() => {
        const token = internalMemory.find("token");
        if(token){
            setToken(token)
        }
        setLoading(false);
    }, [])

    if(loading){
        return <h1>Loading...</h1>
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