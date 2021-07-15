import React, { useContext, useState } from "react"
import { GlobalContext } from "../Context/GlobalState"
import { Button } from "@material-ui/core"

const ProfilePage = () => {
   const { user, changeUser } = useContext(GlobalContext)
   const { username, first_name, last_name, email, bio } = user
   const [isToggled, setToggle] = useState(false)

   const [updateUser, setUpdateUser] = useState(user)

   const handleUpdates = e => setUpdateUser({ ...updateUser, [e.target.name]: e.target.value })

   const submitUpdate = e => {
      e.preventDefault()

      const configObj = {
         method: "PATCH",
         headers: { "Content-Type": "application/json", Accept: "application/json" },
         body: JSON.stringify(updateUser),
      }

      fetch(`http://localhost:9393/users/${user.id}`, configObj)
         .then(response => response.json())
         .then(changeUser)
         .then(setToggle(false))
   }

   return (
      <div>
         <h2>Dashboard</h2>
         <img className="avatar" alt="User Avatar" src={user.avatar} />
         {isToggled ? (
            <form onSubmit={submitUpdate}>
               <ul>
                  <li>
                     Username: &nbsp;
                     <input
                        onChange={handleUpdates}
                        type="text"
                        name="username"
                        placeholder={updateUser.username}
                        value={updateUser.username}
                     />
                  </li>
                  <li>
                     First Name: &nbsp;
                     <input
                        onChange={handleUpdates}
                        type="text"
                        name="first_name"
                        placeholder={updateUser.first_name}
                        value={updateUser.first_name}
                     />
                  </li>
                  <li>
                     Last Name: &nbsp;
                     <input
                        onChange={handleUpdates}
                        type="text"
                        name="last_name"
                        placeholder={updateUser.last_name}
                        value={updateUser.last_name}
                     />
                  </li>
                  <li>
                     Email: &nbsp;
                     <input
                        onChange={handleUpdates}
                        name="email"
                        type="text"
                        placeholder={updateUser.email}
                        value={updateUser.email}
                     />
                  </li>
                  <li>
                     Bio: &nbsp;
                     <input
                        onChange={handleUpdates}
                        name="bio"
                        type="textarea"
                        placeholder={updateUser.bio}
                        value={updateUser.bio}
                     />
                  </li>
                  <li>
                     Password: &nbsp;
                     <input
                        onChange={handleUpdates}
                        type="password"
                        name="password"
                        placeholder={updateUser.password}
                        value={updateUser.password}
                     />
                  </li>
                  <li>
                     Avatar: &nbsp;
                     <input
                        onChange={handleUpdates}
                        type="text"
                        name="avatar"
                        placeholder={updateUser.avatar}
                        value={updateUser.avatar}
                     />
                  </li>
               </ul>
               <Button type="submit" color="primary" variant="contained">
                  Submit Changes
               </Button>
            </form>
         ) : (
            <ul>
               <li>Username: {username}</li>
               <li>Name : {first_name + " " + last_name}</li>
               <li>Email : {email}</li>
               <li>About Me : {bio}</li>
            </ul>
         )}
         <Button color="primary" variant="contained" onClick={() => setToggle(!isToggled)}>
            {isToggled ? "Cancel Edit" : "Edit Profile"}{" "}
         </Button>

         {/* Username, first/last name, bio, email, change password, edit profile */}
         <h3>Your Reviews</h3>
         <h3>Favorited Beverages</h3>
         <h3>Preferences</h3>
         {/* Display current preferences */}
         {/* Option to delete preferences */}
         {/* Add preferences through dropdown */}
      </div>
   )
}

export default ProfilePage
