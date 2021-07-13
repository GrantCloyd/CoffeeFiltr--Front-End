import React, { useState } from "react"

const SignUpPage = () => {
   const [newSignUp, setNewSignUp] = useState({
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
   })

   const handleSignUp = e => setNewSignUp({ ...newSignUp, [e.target.name]: e.target.value })

   return (
      <div>
         <form
            onSubmit={e => {
               e.preventDefault()
               console.log(newSignUp)
            }}>
            <input
               value={newSignUp.username}
               onChange={handleSignUp}
               name="username"
               type="text"
               placeholder="Username"
            />
            <input
               value={newSignUp.first_name}
               onChange={handleSignUp}
               name="first_name"
               type="text"
               placeholder="First name"
            />
            <input
               value={newSignUp.last_name}
               onChange={handleSignUp}
               name="last_name"
               type="text"
               placeholder="Last name"
            />
            <input
               value={newSignUp.email}
               onChange={handleSignUp}
               name="email"
               type="text"
               placeholder="Email"
            />
            <input
               value={newSignUp.password}
               onChange={handleSignUp}
               name="password"
               type="password"
               placeholder="Password"
            />
            <input type="submit" value="Sign up" />
         </form>
      </div>
   )
}

export default SignUpPage
