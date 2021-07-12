import React from "react"
import Coffee from "./Coffee"
import { Grid } from "@material-ui/core"

const SuggestionPage = () => {
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
         <form>
            <input type="text" name="title" placeholder="title" />
            <input type="textarea" name="description" placeholder="description" />
            <input type="text" name="image-url" placeholder="image" />
            <select>
               <option>Ingredient 1</option>
               <option>Ingredient 2</option>
            </select>
            {/* Add each item when clicked to a single list to cut down on space with checkboxes */}
            <label for="hot">Hot?</label>
            <input type="checkbox" name="hot" id="hot" />
         </form>
      </div>
   )
}

export default SuggestionPage
