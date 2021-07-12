import React from "react"
import { useParams } from "react-router-dom"
import Coffee from "./Coffee"
import { Grid } from "@material-ui/core"

const SearchPage = () => {
   const params = useParams()

   return (
      <div>
         <h2>Search Coffee</h2>
         <span>Sort by: </span>
         <select>
            <option>A-Z</option>
            <option>Rating</option>
            <option>Favorited</option>
         </select>
         <span>Filter by:</span>
         <label for="caffeine"> Caffeinated </label>
         <input type="checkbox" id="caffeine" value="caffeine" name="caffeine" />
         <label for="sweet"> Sweet </label>
         <input type="checkbox" id="sweet" value="sweet" name="sweet" />
         <label for="Dairy"> Dairy </label>
         <input type="checkbox" id="Dairy" value="Dairy" name="Dairy" />
         <label for="alcohol"> Alcoholic </label>
         <input type="checkbox" id="alcohol" value="alcohol" name="alcohol" />

         <Grid container spacing={3}>
            <Coffee />
            <Coffee />
            <Coffee />
         </Grid>
      </div>
   )
}

export default SearchPage
