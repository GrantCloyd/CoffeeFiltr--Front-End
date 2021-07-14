import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import Coffee from "./Coffee"
import { Grid } from "@material-ui/core"
import { GlobalContext } from '../Context/GlobalState'

const SearchPage = () => {
   const { query, type } = useParams()

   const { beverages } = useContext(GlobalContext)

   let queried = beverages[0].filter(bev => {
      return bev.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
   })

   console.log(type, query)

   if (query === "All") {
      queried = beverages[0]
   }

   let typed = [];

   switch (type) {
      case "Hot":
         typed = queried.filter(item => item.hot );
         break;
      case "Cold":
         typed = queried.filter(item => !item.hot);
         break;
      case "Espresso":
         typed = queried.filter(item => item.ingredients.map(ing => ing.name).indexOf("Espresso") !== -1);
         break;
      case "Non-espresso":
         typed = queried.filter(item => item.ingredients.map(ing => ing.name).indexOf("Espresso") == -1);
         break;
      default:
         typed = queried;
   }

   const finalArr = typed.map(item => <Coffee key={item.id} data={item} />)

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
         <label htmlFor="caffeine"> Caffeinated </label>
         <input type="checkbox" id="caffeine" value="caffeine" name="caffeine" />
         <label htmlFor="sweet"> Sweet </label>
         <input type="checkbox" id="sweet" value="sweet" name="sweet" />
         <label htmlFor="Dairy"> Dairy </label>
         <input type="checkbox" id="Dairy" value="Dairy" name="Dairy" />
         <label htmlFor="alcohol"> Alcoholic </label>
         <input type="checkbox" id="alcohol" value="alcohol" name="alcohol" />

         <Grid container spacing={3}>
            {finalArr}
         </Grid>
      </div>
   )
}

export default SearchPage
