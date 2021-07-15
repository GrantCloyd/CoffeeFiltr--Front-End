import React, { useState, useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import { GlobalContext } from "../Context/GlobalState"
import { Button } from "@material-ui/core"

const LoginPage = () => {
   const [signIn, setSignIn] = useState({
      username: "",
      password: "",
   })

   const history = useHistory()

   const { changeUser } = useContext(GlobalContext)

   const handleSignIn = e => setSignIn({ ...signIn, [e.target.name]: e.target.value })

   const handleSubmitLogin = e => {
      e.preventDefault()
      fetch(`http://localhost:9393/signin/${signIn.username}/${signIn.password}`)
         .then(res => res.json())
         .then(output => {
            if (output !== "Invalid credentials") {
               changeUser(output)
               history.push("/")
            } else {
               alert("Invalid credentials")
            }
         })
   }

   return (
      <div>
         <form
            onSubmit={e => {
               handleSubmitLogin(e)
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
            <Button type="submit" color="primary" variant="contained">
               Login
            </Button>
            <h4>Don't have an account?</h4>
            <Link to="/signup">Sign Up</Link>
         </form>
      </div>
   )
}

export default LoginPage
