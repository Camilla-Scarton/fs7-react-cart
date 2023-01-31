import { Navigate } from "react-router-dom";


export function ProtectedRoute({token,children}){
    if(!token){
        return <Navigate to="/login" replace />
    }
   return children  
}