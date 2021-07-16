import React, { useContext } from "react"
import { GlobalContext } from '../Context/GlobalState'

const Review = ({review: { id, title, content, rating, user: reviewUser, likes } }) => {
   const { user, updateBeverages } = useContext(GlobalContext)

   const username = reviewUser ? reviewUser.username : ""

   const likeObj = {
      review_id: id,
      user_id: user.id
   }

   const handleLike = () => {
      if (user.id === "guest") {
         alert("Please login to like this review")
      }
      else {
         fetch("http://localhost:9393/likes", {
            method: "POST",
            headers: {
               "Content-Type": "application/json"
            },
            body: JSON.stringify(likeObj)
         })
         .then(res => res.json())
         .then(updateBeverages)
      }
   }

   let isUserReviewed = (id === user.id) && user.id !== "guest"

   const handleDelete = () => {
      fetch("http://localhost:9393/reviews/" + id, {
         method: "DELETE"
      })
      .then(res => res.json())
      .then(updateBeverages)
   }

   return (
      <div>
         <h5>{title}</h5>
         <h5>{username ? username : "Anonymous"}</h5>
         <h5>{rating}</h5>
         <h5>{content}</h5>
         <p>Likes : {likes ? likes.length : 0}</p>
         <button onClick={handleLike}>Like</button>
         {isUserReviewed ? <button onClick={handleDelete}>Delete</button> : null}
      </div>
   )
}

export default Review
