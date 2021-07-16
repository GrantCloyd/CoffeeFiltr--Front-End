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
         <div className="header-content">
          <img id="cfLogo" alt="cfLogo" src="https://i.imgur.com/d2hK8tg.png" />
         </div>
         <div className="menu">
            <h1>CoffeeFiltr</h1>
            <br />
            <ul className="header-ul">
               <li>
                  <NavLink to="/">
                     <Button type="submit" color="primary" variant="contained">
                        Home{" "}
                     </Button>
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/suggestion">
                     {" "}
                     <Button type="submit" color="primary" variant="contained">
                        Make Your Own{" "}
                     </Button>
                  </NavLink>
               </li>
               <li>
                  <NavLink to="/feed">
                     {" "}
                     <Button type="submit" color="primary" variant="contained">
                        Feed{" "}
                     </Button>
                  </NavLink>
               </li>
               {user.id !== "guest" ? (
                  <li>
                     <NavLink to="/profile">
                        {" "}
                        <Button type="submit" color="primary" variant="contained">
                           Profile{" "}
                        </Button>
                     </NavLink>
                  </li>
               ) : null}
               <br />
               <li>
                  {user.id !== "guest" ? (
                     <Button
                        className="sign-out"
                        type="submit"
                        color="primary"
                        variant="contained"
                        onClick={() => {
                           changeUser({ id: "guest" })
                           history.push("/")
                        }}>
                        Sign-Out
                     </Button>
                  ) : (
                     <NavLink to="/login">
                        {" "}
                        <Button type="submit" color="primary" variant="contained">
                           Sign-In{" "}
                        </Button>
                     </NavLink>
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
         </div>
      </header>
   )
}

export default Header
