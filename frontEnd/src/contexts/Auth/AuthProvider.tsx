import { useApi } from "../../hooks/useApi";
import { User } from "../../types/User"
import { AuthCOntext } from "./AuthContext"
import { useState } from 'react'

export const AuthProvider = ({ children }: {children: React.ReactNode}) => {
  const [user, setUser] = useState<User | null>(null);
  const api = useApi();

  const signin = async (email: string, password: string) => {
    const data = await api.signin(email, password);
    if(data.user && data.token) {
      setUser(data.user)
      return true;
    }
    return false;
  }

  const signout = async () => {
    await api.logout();
    setUser(null);
  }

  return (
    <AuthCOntext.Provider value={{
      user,
      signin,
      signout
    }}>
      {children}
    </AuthCOntext.Provider>
  )
}