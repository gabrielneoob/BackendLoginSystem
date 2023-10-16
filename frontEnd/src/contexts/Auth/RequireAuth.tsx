import { Login } from "../../pages/Login";
import { AuthCOntext } from "./AuthContext"
import { useContext } from 'react'

export const RequireAuth = ({ children }: { children: React.ReactNode}) => {
  const auth = useContext(AuthCOntext);

  if(!auth.user) {
    return <Login />
  }
  
  return children
}