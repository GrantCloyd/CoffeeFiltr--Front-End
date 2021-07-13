import React, { useState } from "react"
import Coffee from "./Coffee"
import { Grid } from "@material-ui/core"

const SuggestionPage = () => {
   //might need to make a separate state for ease of fetch post for ingredients (set components?)
   const [newCoffee, setNewCoffee] = useState({
      title: "",
      description: "",
      img_url: "",
      ingredients: [],
      hot: true,
   })

   function removeCoffeeIng(ingr) {
      setNewCoffee({
         ...newCoffee,
         ingredients: newCoffee.ingredients.filter(ingredient => ingredient !== ingr),
      })
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

   return (
      <div>
         <h2>Make Your Own Coffee</h2>
         <h3>What Ingredients do you Have?</h3>
         <form onSubmit={e => e.preventDefault()}>
            <label for="coffee"> Coffee </label>
            <input type="checkbox" id="coffee" value="coffee" name="coffee" />
            <label for="sugar"> Sugar </label>
            <input type="checkbox" id="sugar" value="sugar" name="sugar" />
            <label for="milk"> Milk </label>
            <input type="checkbox" id="milk" value="milk" name="milk" />
            <label for="lemon"> Lemon</label>
            <input type="checkbox" id="lemon" value="lemon" name="lemon" />
            <button>What can I make?</button>
         </form>

         <h3>Suggested Coffee</h3>
         <Grid container spacing={3}>
            <Coffee />
            <Coffee />
            <Coffee />
         </Grid>

         <h3>Add a coffee</h3>
         <form
            onSubmit={e => {
               e.preventDefault()
               console.log(newCoffee)
            }}>
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
               value={newCoffee.ingredients}
               name="ingredients">
               <option>Ingredient 1</option>
               <option>Ingredient 2</option>
            </select>
            {/* Add each item when clicked to a single list to cut down on space with checkboxes */}
            <label for="hot">Hot?</label>
            <input
               onChange={handleNewCoffeeCheck}
               value={newCoffee.hot}
               type="checkbox"
               name="hot"
               id="hot"
            />
            <button>Submit</button>
         </form>
         <ul>{ingredArr}</ul>
      </div>
   )
}

export default SuggestionPage
