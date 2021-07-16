import React, { useContext } from "react"
import { GlobalContext } from "../Context/GlobalState"
import { Button } from "@material-ui/core"

const Review = ({
   review: { id, title, content, rating, user: reviewUser, likes, created_at },
}) => {
   const { user, updateBeverages } = useContext(GlobalContext)

   const username = reviewUser ? reviewUser.username : ""

   const likeObj = {
      review_id: id,
      user_id: user.id,
   }

   let isLiked = likes ? likes.map(lik => lik.user_id).includes(user.id) : false

   const handleLike = () => {
      if (user.id === "guest") {
         alert("Please login to like this review")
      } else {
         fetch("http://localhost:9393/likes", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(likeObj),
         })
            .then(res => res.json())
            .then(updateBeverages)
      }
   }

   if (reviewUser === undefined) {
      reviewUser = { id: "guest" }
   }

   let isUserReviewed = reviewUser.id === user.id && user.id !== "guest"

   const handleDelete = () => {
      fetch("http://localhost:9393/reviews/" + id, {
         method: "DELETE",
      })
         .then(res => res.json())
         .then(updateBeverages)
   }

   return (
      <div className="review">
         <h5>Created: {created_at.slice(0, 10)}</h5>
         <h5>Title: {title}</h5>
         <h5>Username: {username ? username : "Anonymous"}</h5>
         <h5>Rating: {rating}</h5>
         <h5>Review: {content}</h5>
         <p>Likes: {likes ? likes.length : 0}</p>
         <Button type="submit" color="primary" variant="contained" onClick={handleLike}>
            {isLiked ? "Unlike" : "Like"}
         </Button>{" "}
         &nbsp;
         {isUserReviewed || user.username === "Admin" ? (
            <Button type="submit" color="primary" variant="contained" onClick={handleDelete}>
               Delete
            </Button>
         ) : null}
      </div>
   )
}

export default Review
