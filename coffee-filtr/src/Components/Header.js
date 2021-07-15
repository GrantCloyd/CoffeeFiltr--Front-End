import React, { useState, useContext } from "react"
import { NavLink, useHistory } from "react-router-dom"
import { GlobalContext } from "../Context/GlobalState"
import { Button } from "@material-ui/core"

const Header = () => {
   const history = useHistory()
   const [query, setQuery] = useState("")
   const [type, setType] = useState("All")

   const { user, changeUser } = useContext(GlobalContext)

   const handleQuery = e => {
      setQuery(e.target.value)
   }

   return (
      <header className="header">
         <h1>CoffeeFiltr</h1>
         <ul className="header-ul">
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/suggestion">Make Your Own</NavLink>
            </li>
            <li>
               <NavLink to="/feed">Feed</NavLink>
            </li>
            {user.id !== "guest" ? (
               <li>
                  <NavLink to="/profile">Profile</NavLink>
               </li>
            ) : null}
            <br />
            <li>
               {user.id !== "guest" ? (
                  <Button
                     type="submit"
                     color="primary"
                     variant="contained"
                     onClick={() => {
                        changeUser({ id: "guest" })
                        history.push("/")
                     }}>
                     Sign Out
                  </Button>
               ) : (
                  <NavLink to="/login">Sign In</NavLink>
               )}
            </li>
         </ul>
         <form
            onSubmit={e => {
               e.preventDefault()
               if (!query) {
                  history.push(`/search/${type}/All`)
               } else {
                  history.push(`/search/${type}/${query}`)
               }
            }}>
            <select
               onChange={e => {
                  setType(e.target.value)
                  console.log(type)
               }}>
               <option>All</option>
               <option>Hot</option>
               <option>Cold</option>
               <option>Espresso</option>
               <option>Non-espresso</option>
            </select>
            <input
               value={query}
               onChange={handleQuery}
               type="text"
               placeholder="Search coffee..."
            />

            <Button type="submit" variant="contained" color="primary">
               Search
            </Button>
         </form>
      </header>
   )
}

export default Header
