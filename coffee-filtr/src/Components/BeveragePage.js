import React, { useState, useContext } from "react"
import Review from "./Review"
import { useParams } from "react-router-dom"
import { GlobalContext } from '../Context/GlobalState'

function BeveragePage() {
   const coffeeId = useParams().id

   const { beverages, updateBeverages } = useContext(GlobalContext)

   let beverage = [];

   if (beverages.length !== 0) {
      beverage = beverages[0].find(bev => {
         return bev.id === +coffeeId
      })
   }

   const [newReview, setNewReview] = useState({
      title: "",
      content: "",
      rating: 0,
      user_id: 1,
      beverage_id: coffeeId
   })

   let { title, description, img_url, hot, ingredients, reviews} = {
      title: "",
      description: "",
      img_url: "",
      hot: false,
      ingredients: [],
      reviews: []
   }

   let reviewsArr = [];

   if (beverage !== undefined && beverage.length !== 0) {
      title = beverage.title
      description = beverage.description
      img_url = beverage.img_url
      hot = beverage.hot
      ingredients = beverage.ingredients
      reviews = beverage.reviews

      reviewsArr = reviews.map(review => {
         return (
            <Review
               key={review.id}
               review={review}
            />
         )
      })
      }

   const handleSubmitReview = e => {
      e.preventDefault()

      fetch("http://localhost:9393/reviews", {
         method: "POST",
         headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newReview)
    })
      .then(response => response.json())
      .then(json => {
         const updatedBeverage = {...beverage, reviews: [...reviews, json]}

         updateBeverages(updatedBeverage)
      })
   }

   return (
      <div>
         <h2>{title}</h2>
         <img src={img_url} />
         <p>{description}</p>
         <p>Ingredients: {ingredients.map(ing => ing.name).join(", ")}</p>
         <p>{hot ? "Hot!🔥" : "Cold 🧊"}</p>
         <button>Add Favorite!</button>
         <ul>
            Favorited by:
            <li>Users display (link to users?)</li>
            <li>Users display (link to users?)</li>
         </ul>
         <hr />
         <h4>Reviews</h4>
         {reviewsArr}
         <hr />
         <h4>Add Review</h4>
         <form
            onSubmit={handleSubmitReview}>
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
