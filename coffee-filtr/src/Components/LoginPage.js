import React, { useState } from "react"
import { Link } from "react-router-dom"

const LoginPage = () => {
   const [signIn, setSignIn] = useState({
      username: "",
      password: "",
   })

   const handleSignIn = e => setSignIn({ ...signIn, [e.target.name]: e.target.value })

   return (
      <div>
         <form
            onSubmit={e => {
               e.preventDefault()
               console.log(signIn)
            }}>
            <input
               onChange={handleSignIn}
               value={signIn.username}
               name="username"
               type="text"
               placeholder="Username"
            />
            <input
               onChange={handleSignIn}
               value={signIn.password}
               name="password"
               type="password"
               placeholder="Password"
            />
            <button type="submit">Login</button>
            <h4>Don't have an account?</h4>
            <Link to="/signup">Sign Up</Link>
         </form>
      </div>
   )
}

export default LoginPage
