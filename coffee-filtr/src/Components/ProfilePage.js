import React, { useContext, useState, useEffect } from "react"
import { GlobalContext } from "../Context/GlobalState"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import Coffee from "./Coffee"
import { Grid } from "@material-ui/core"

const ProfilePage = () => {
   const { beverages, user, changeUser } = useContext(GlobalContext)
   const { username, first_name, last_name, email, bio } = user
   const [isToggled, setToggle] = useState(false)

   const [updateUser, setUpdateUser] = useState(user)

   const history = useHistory()

   useEffect(() => {
   if (user.id === "guest") {
      history.push("/")
   }
   }, [user.id, history])

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

   const reviewedBevs = beverages.length === 0 ? [] : beverages[0].filter(bev => bev.reviews.some(item => item.user_id === user.id))

   const reviewedBevsArr = reviewedBevs.map(bev => <Coffee key={bev.id} data={bev} />)

   const favedBevs = beverages.length === 0 ? [] : beverages[0].filter(bev => bev.favorites.some(item => item.user_id === user.id))

   const favedBevsArr = favedBevs.map(bev => <Coffee key={bev.id} data={bev} />)

   return (
      <div className="bottom-div-2">
         <h2>Dashboard</h2>
         <img className="avatar" alt="User Avatar" src={user.avatar} />
         {isToggled ? (
            <form  onSubmit={submitUpdate}>
               <ul className="signup-form">
                  <br />
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
                  <br />
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
                  <br />
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
                  <br />
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
                  <br />
                  <li>
                     Biography: &nbsp;
                     <input
                        onChange={handleUpdates}
                        name="bio"
                        type="textarea"
                        placeholder={updateUser.bio}
                        value={updateUser.bio}
                     />
                  </li>
                  <br />
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
                  <br />
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
               <br />
               <Button type="submit" color="primary" variant="contained">
                  Submit Changes
               </Button>
            </form>
         ) : (
            <ul className="signup-form-2">
               <br />
               <li><strong>Username:</strong> {username}</li>
               <br />
               <li><strong>Name :</strong> {first_name + " " + last_name}</li>
               <br />
               <li><strong>Email :</strong> {email}</li>
               <br />
               <li><strong>About Me :</strong> {bio}</li>
            </ul>
         )}
         <br />
         <Button color="primary" variant="contained" onClick={() => setToggle(!isToggled)}>
            {isToggled ? "Cancel Edit" : "Edit Profile"}{" "}
         </Button>

         {/* Username, first/last name, bio, email, change password, edit profile */}
         <h3>You Reviewed</h3>
         <Grid container spacing={3}>
            {reviewedBevsArr}
         </Grid>
         <h3>Favorited Beverages</h3>
         <Grid container spacing={3}>
            {favedBevsArr}
         </Grid>
         {/* <h3>Preferences</h3> */}
         {/* Display current preferences */}
         {/* Option to delete preferences */}
         {/* Add preferences through dropdown */}
      </div>
   )
}

export default ProfilePage
