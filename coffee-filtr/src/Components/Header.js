import React from "react"
import { NavLink, useHistory } from "react-router-dom"

const Header = () => {
   const history = useHistory()

   return (
      <div>
         <h1>CoffeeFiltr</h1>
         <ul>
            <li>
               <NavLink to="/">Home</NavLink>
            </li>
            <li>
               <NavLink to="/suggestion">Make Your Own</NavLink>
            </li>
            <li>
               <NavLink to="/feed">Feed</NavLink>
            </li>
            <li>
               <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
               <NavLink to="/login">Sign In</NavLink>
            </li>
         </ul>
         <form
            onSubmit={e => {
               e.preventDefault()
               history.push("/search")
            }}>
            <select>
               <option>All</option>
               <option>Hot</option>
               <option>Cold</option>
               <option>Espresso</option>
               <option>Non-espresso</option>
            </select>
            <input type="text" placeholder="Search coffee..." />
            <button>Search</button>
         </form>
      </div>
   )
}

export default Header
