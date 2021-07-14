import React from "react"

const Review = ({ review: { title, content, rating, username } }) => {
   return (
      <div>
         <h5>{title}</h5>
         <h5>{username}</h5>
         <h5>{rating}</h5>
         <h5>{content}</h5>
         <p>Likes : 12</p>
         <button>Like 👍</button>
      </div>
   )
}

export default Review
