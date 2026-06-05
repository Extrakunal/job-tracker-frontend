import { useState } from 'react'
import { registerUser } from '../services/api'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const handleSubmit = async (e) => {
  e.preventDefault()
  try {
    const response = await registerUser({ name, email, password })
    console.log(response.data)
    window.location.href = '/'
  } catch (error) {
    console.log(error.message)
  }
}

  return (
    <div>
    <h1>Register Form </h1>
     <form>
      <input type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)}
/>
      <input type="text" placeholder='Enter your Email' value={email} onChange={(e) => setEmail(e.target.value)}/>

     <input type="password" placeholder='Enter your Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
        
      <button onClick={handleSubmit}>login</button>
     </form>
    </div>
  )
}


