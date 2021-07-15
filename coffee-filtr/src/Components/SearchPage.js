import React, { useContext, useState } from "react"
import { useParams } from "react-router-dom"
import Coffee from "./Coffee"
import { Grid } from "@material-ui/core"
import { GlobalContext } from "../Context/GlobalState"

const SearchPage = () => {
   const { query, type } = useParams()
   const [isFiltered, setFilter] = useState(false)
   const [filteredArr, setFilteredArr] = useState([])

   const { beverages } = useContext(GlobalContext)

   let queried = beverages[0].filter(bev => {
      return bev.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
   })

   if (query === "All") {
      queried = beverages[0]
   }

   let typed = []

   switch (type) {
      case "Hot":
         typed = queried.filter(item => item.hot)
         break
      case "Cold":
         typed = queried.filter(item => !item.hot)
         break
      case "Espresso":
         typed = queried.filter(
            item => item.ingredients.map(ing => ing.name).indexOf("Espresso") !== -1
         )
         break
      case "Non-espresso":
         typed = queried.filter(
            item => item.ingredients.map(ing => ing.name).indexOf("Espresso") == -1
         )
         break
      default:
         typed = queried
   }

   const filterByOption = option => {
      setFilter(!isFiltered)

      let result = []
      for (let i = 0; i < option.length; i++) {
         let update = typed.filter(
            item => item.ingredients.map(ing => ing.name).indexOf(option[i]) !== -1
         )

         result = [...result, update]
      }

      console.log(result)
      const uniqueArray = result.flat().reduce((filter, current) => {
         let dk = filter.find(item => item.title === current.title)
         if (!dk) {
            return filter.concat([current])
         } else {
            return filter
         }
      })

      let filtered = uniqueArray.map(item => <Coffee key={item.id} data={item} />)

      setFilteredArr(filtered)
   }

   let finalArr = typed.map(item => <Coffee key={item.id} data={item} />)

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
         <label htmlFor="sweet"> Sweet </label>
         <input
            onClick={() => filterByOption(["Sugar", "Chocolate", "Whipped-Cream"])}
            type="checkbox"
            id="sweet"
            value="sweet"
            name="sweet"
         />
         <label htmlFor="Dairy"> Dairy </label>
         <input
            onClick={() => filterByOption(["Milk", "Cream", "Foam", "Whipped-Cream"])}
            type="checkbox"
            id="Dairy"
            value="Dairy"
            name="Dairy"
         />
         <label htmlFor="alcohol"> Alcoholic </label>
         <input
            onClick={() => filterByOption(["Whiskey", "Rum"])}
            type="checkbox"
            id="alcohol"
            value="alcohol"
            name="alcohol"
         />

         <Grid container spacing={3}>
            {isFiltered ? filteredArr : finalArr}
         </Grid>
      </div>
   )
}

export default SearchPage
