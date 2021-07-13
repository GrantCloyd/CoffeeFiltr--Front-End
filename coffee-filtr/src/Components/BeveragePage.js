import React, { useState } from "react"
import Review from "./Review"
import { useParams } from "react-router-dom"

function BeveragePage() {
   const coffeeId = useParams().id
   const [newReview, setNewReview] = useState({
      title: "",
      content: "",
      rating: 0,
      username: "Anonymous",
   })

   const { name, description, image, hot, ingredients, id } = {
      name: "Coffee",
      description: "This is a hot cup of coffee",
      image: "https://cstpdx.com/sites/clinton/files/black%20coffee.jpg",
      ingredients: ["Coffee", "Sugar", "Water"],
      hot: true,
      id: 1,
   }

   return (
      <div>
         <h2>{name}</h2>
         <img src={image} />
         <p>{description}</p>
         <p>Ingredients: {ingredients.join(", ")}</p>
         <p>{hot ? "Hot!🔥" : "Cold 🧊"}</p>
         <button>Add Favorite!</button>
         <ul>
            Favorited by:
            <li>Users display (link to users?)</li>
            <li>Users display (link to users?)</li>
         </ul>
         <hr />
         <h4>Reviews</h4>
         <Review />
         <Review />
         <hr />
         <h4>Add Review</h4>
         <form
            onSubmit={e => {
               e.preventDefault()
               console.log(newReview)
            }}>
            <input
               onChange={e => setNewReview({ ...newReview, title: e.target.value })}
               value={newReview.title}
               name="title"
               type="text"
               placeholder="Title"
            />
            <input
               onChange={e => setNewReview({ ...newReview, content: e.target.value })}
               value={newReview.content}
               name="content"
               type="textarea"
               placeholder="Content"
            />
            <select
               onChange={e => setNewReview({ ...newReview, rating: e.target.value })}
               name="rating"
               value={newReview.rating}>
               <option>0</option>
               <option>1</option>
               <option>2</option>
               <option>3</option>
               <option>4</option>
               <option>5</option>
               <option>6</option>
               <option>7</option>
               <option>8</option>
               <option>9</option>
               <option>10</option>
            </select>
            <button>Submit</button>
         </form>
      </div>
   )
}

export default BeveragePage
