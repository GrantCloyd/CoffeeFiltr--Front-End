import React, { useState, useContext, useEffect } from "react"
import Coffee from "./Coffee"
import { Grid } from "@material-ui/core"
import { GlobalContext } from "../Context/GlobalState"
import { Button } from "@material-ui/core"

const SuggestionPage = () => {
   const { beverages, addBeverage } = useContext(GlobalContext)
   const [ingredients, setIngredients] = useState([])
   const [suggestCoffeeIng, setSuggestCoffeeIng] = useState([])
   const [newCoffee, setNewCoffee] = useState({
      title: "",
      description: "",
      img_url: "",
      ingredients: [],
      hot: false,
   })

   useEffect(() => {
      fetch("http://localhost:9393/ingredients")
         .then(r => r.json())
         .then(setIngredients)
   }, [])

   let ingredientsArr = ingredients.map(ing => <option key={ing.id}>{ing.name}</option>)

   //might need to make a separate state for ease of fetch post for ingredients (set components?)

   const beveragesArr = beverages.length === 0 ? beverages : beverages[0]

   const suggestedBevArr = beveragesArr.filter(bev =>
      bev.ingredients.every(i => {
         return suggestCoffeeIng.includes(i.name)
      })
   )

   let suggestedCoffeeCards = suggestedBevArr.map(bev => <Coffee key={bev.id} data={bev} />)

   function removeCoffeeIng(ingr) {
      setNewCoffee({
         ...newCoffee,
         ingredients: newCoffee.ingredients.filter(ingredient => ingredient !== ingr),
      })
   }

   function removeSuggestIng(ingred) {
      setSuggestCoffeeIng(suggestCoffeeIng.filter(ing => ing !== ingred))
   }

   const suggestIngredArr = suggestCoffeeIng.map(ing => (
      <li onClick={() => removeSuggestIng(ing)} key={ing}>
         {ing}
      </li>
   ))

   function handleNewSuggestIngredient(e) {
      setSuggestCoffeeIng([...suggestCoffeeIng, e.target.value])
   }

   const ingredArr = newCoffee.ingredients.map(ing => (
      <li onClick={() => removeCoffeeIng(ing)} key={ing}>
         {ing}
      </li>
   ))

   const handleNewCoffee = e => setNewCoffee({ ...newCoffee, [e.target.name]: e.target.value })
   const handleNewCoffeeIngredient = e =>
      setNewCoffee({ ...newCoffee, ingredients: [...newCoffee.ingredients, e.target.value] })
   const handleNewCoffeeCheck = e =>
      setNewCoffee({ ...newCoffee, [e.target.name]: e.target.checked })

   const submitCoffee = e => {
      e.preventDefault()

      let configObj = {
         method: "POST",
         headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
         },
         body: JSON.stringify(newCoffee),
      }
      console.log(newCoffee)
      console.log(configObj)

      fetch("http://localhost:9393/beverages_post", configObj)
         .then(response => response.json())
         .then(addBeverage)
      setNewCoffee({ title: "", description: "", img_url: "", ingredients: [], hot: false })
      setTimeout(() => alert("Your new beverage is being prepared!"), 400)
   }

   return (
      <div className="bottom-div-2">
         <h2>Make Your Own Coffee</h2>
         <h3>What Ingredients do you Have?</h3>
         <form
            onSubmit={e => {
               e.preventDefault()
               console.log(suggestCoffeeIng)
            }}>
            <select
               onChange={handleNewSuggestIngredient}
               // value={newCoffee.ingredients}
               name="ingredients">
               {ingredientsArr}
            </select>

            {/* <button>What can I make?</button> */}
         </form>
         <ul>{suggestIngredArr}</ul>

         <h3>Suggested Coffee</h3>
         <Grid justifyContent="center" container spacing={3}>
            {suggestedCoffeeCards}
         </Grid>

         <h3>Add a coffee</h3>
         <form className="signup-form" onSubmit={submitCoffee}>
            <label htmlFor="title">Title</label>
            <input
               onChange={handleNewCoffee}
               value={newCoffee.title}
               type="text"
               name="title"
               placeholder="Enter Title ..."
            />
            <br />
            <label htmlFor="description">Description</label>
            <input
               onChange={handleNewCoffee}
               value={newCoffee.description}
               type="textarea"
               name="description"
               placeholder="Enter Description ..."
            />
            <br />
            <label htmlFor="img_url">Image</label>
            <input
               onChange={handleNewCoffee}
               value={newCoffee.img_url}
               type="text"
               name="img_url"
               placeholder="Enter Image ..."
            />
            <br />
            <label htmlFor="ingredients">Ingredients</label>
            <select
               onChange={handleNewCoffeeIngredient}
               // value={newCoffee.ingredients}
               name="ingredients">
               {ingredientsArr}
            </select>
            <br />
            <label htmlFor="hot">Hot?</label>
            <input
               className="checkbox"
               onChange={handleNewCoffeeCheck}
               value={newCoffee.hot}
               type="checkbox"
               name="hot"
               id="hot"
            />
            <br />
            <Button type="submit" color="primary" variant="contained">
               Submit
            </Button>
         </form>
         <ul>{ingredArr}</ul>
      </div>
   )
}

export default SuggestionPage
