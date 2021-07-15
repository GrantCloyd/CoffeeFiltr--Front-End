import React, { useState } from "react"
import { NavLink, useHistory } from "react-router-dom"

const Header = () => {
   const history = useHistory()
   const [query, setQuery] = useState("")
   const [type, setType] = useState("All")

   const handleQuery = e => {
      setQuery(e.target.value)
   }

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

            <button>Search</button>
         </form>
      </div>
   )
}

export default Header
