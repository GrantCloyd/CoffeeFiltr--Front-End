import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { Button } from "@material-ui/core"

const SignUpPage = () => {
   const [newSignUp, setNewSignUp] = useState({
      username: "",
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      avatar: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
      bio: "Hi!",
   })

   const history = useHistory()

   const handleSignUp = e => setNewSignUp({ ...newSignUp, [e.target.name]: e.target.value })

   const handleNewUser = e => {
      e.preventDefault()

      fetch("http://localhost:9393/users", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
         },
         body: JSON.stringify(newSignUp),
      })
         .then(response => response.json())
         .then(output => {
            history.push("/login")
         })
   }

   return (
      <div>
         <form onSubmit={handleNewUser}>
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
            <Button type="submit" color="primary" variant="contained">
               Sign Up
            </Button>
         </form>
      </div>
   )
}

export default SignUpPage
