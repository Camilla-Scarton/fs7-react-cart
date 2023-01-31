import { useEffect, useState } from "react";
import { internalMemory } from "./utilities";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import { Route, Routes, useNavigate} from "react-router-dom"
import { Navbar } from "./components/Shared/Navbar";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {

    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()

    const onLogout = () => {
        setToken(null);
        internalMemory.remove("token");
    }

    const onLogin = (_token) => {
        setToken(_token);
        internalMemory.save("token", _token);
        navigate("/profile")
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

    return (
        <>
        <Navbar/> 
        <Routes>
            <Route path="/login" element={<Login onLogin={onLogin}/>}/>
            <Route path="/profile" element={
                <ProtectedRoute token={token}>
                    <Profile onLogout={onLogout} token={token} />
                </ProtectedRoute>
            }/>
        </Routes>
        </>
    )
    
}



export default App