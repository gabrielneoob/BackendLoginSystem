import { useState, useContext } from "react"
import { useNavigate } from "react-router-dom";
import { AuthCOntext } from "../../contexts/Auth/AuthContext";

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = useContext(AuthCOntext)
  const navigate = useNavigate()


  const handleLogin = async () => {
    if(email && password) {
      const isLogged = await auth.signin(email, password);
      if(isLogged) {
        navigate('/')
      } else {
        alert('Não deu certo.')
      }
    }
  }
  return (
    <div>
      <h2>Página Fechada</h2>

      <input 
      type="text" 
      value={email}
      onChange={(e) => setEmail(e.target.value)} 
      placeholder="email..."
      />

      <input 
      type="text" 
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
      placeholder="password..."
      />

      <button onClick={handleLogin}>Logar</button>
    </div>
  )
}