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
      hot: true,
   })

   useEffect(() => {
      fetch("http://localhost:9393/ingredients")
         .then(r => r.json())
         .then(setIngredients)
   }, [])

   let ingredientsArr = ingredients.map(ing => <option key={ing.id}>{ing.name}</option>)

   //might need to make a separate state for ease of fetch post for ingredients (set components?)

   const suggestedBevArr = beverages[0].filter(bev =>
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
   }

   return (
      <div>
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
         <Grid container spacing={3}>
            {suggestedCoffeeCards}
         </Grid>

         <h3>Add a coffee</h3>
         <form onSubmit={submitCoffee}>
            <input
               onChange={handleNewCoffee}
               value={newCoffee.title}
               type="text"
               name="title"
               placeholder="title"
            />
            <input
               onChange={handleNewCoffee}
               value={newCoffee.description}
               type="textarea"
               name="description"
               placeholder="description"
            />
            <input
               onChange={handleNewCoffee}
               value={newCoffee.img_url}
               type="text"
               name="img_url"
               placeholder="image"
            />
            <select
               onChange={handleNewCoffeeIngredient}
               // value={newCoffee.ingredients}
               name="ingredients">
               {ingredientsArr}
            </select>
            {/* Add each item when clicked to a single list to cut down on space with checkboxes */}
            <label htmlFor="hot">Hot?</label>
            <input
               onChange={handleNewCoffeeCheck}
               value={newCoffee.hot}
               type="checkbox"
               name="hot"
               id="hot"
            />
            <Button type="submit" color="primary" variant="contained">
               Submit
            </Button>
         </form>
         <ul>{ingredArr}</ul>
      </div>
   )
}

export default SuggestionPage
