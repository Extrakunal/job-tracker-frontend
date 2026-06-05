import { useState } from 'react'
import { loginUser } from '../services/api'

function Login(){
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await loginUser({ email, password })
    console.log(response.data)
    localStorage.setItem('token', response.data.token)
    window.location.href = '/dashboard'


  } catch (error) {
    console.log(error.message)
  }
}

return(
    <div>
    <h1>Login Form </h1>
     <form>
        <input type="text" placeholder='enter your mail'  value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password"  placeholder='Enter your password' value={password} onChange={(e)=> setPassword(e.target.value)}/>

        <button onClick={handleSubmit}>login</button>
     </form>
    </div>
)
}
export default Login