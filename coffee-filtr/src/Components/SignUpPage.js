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
      <div className="bottom-div">
         <form className="signup-form" onSubmit={handleNewUser}>
            <br />
            <label htmlFor="username">Username</label>
            <input
               value={newSignUp.username}
               onChange={handleSignUp}
               name="username"
               type="text"
               placeholder="Enter Username ..."
            />
            <br />
            <label htmlFor="first_name">First Name</label>
            <input
               value={newSignUp.first_name}
               onChange={handleSignUp}
               name="first_name"
               type="text"
               placeholder="Enter First Name ..."
            />
            <br />
            <label htmlFor="last_name">Last Name</label>
            <input
               value={newSignUp.last_name}
               onChange={handleSignUp}
               name="last_name"
               type="text"
               placeholder="Enter Last Name ..."
            />
            <br />
            <label htmlFor="email">Email</label>
            <input
               value={newSignUp.email}
               onChange={handleSignUp}
               name="email"
               type="text"
               placeholder="Enter Email ..."
            />
            <br />
            <label htmlFor="password">Password</label>
            <input
               value={newSignUp.password}
               onChange={handleSignUp}
               name="password"
               type="password"
               placeholder="Enter Password ..."
            />
            <br />
            <Button type="submit" color="primary" variant="contained">
               Sign Up
            </Button>
            <br />
         </form>
      </div>
   )
}

export default SignUpPage
