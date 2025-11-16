import {useAuth} from './context/TokenContext.jsx'
import { Navigate } from "react-router-dom";

export default function ProtectedRouteHome({children}){
  const { token, setToken } = useAuth();
  console.log(token);

  if (!token){
    <Navigate to='/login' replace />  
  }
  return children
}