import React, { useEffect, useState, useContext } from "react"
import Coffee from "./Coffee"
import Recommended from "./Recommended"
import { Grid } from "@material-ui/core"
import { GlobalContext } from "../Context/GlobalState"

const DiscoverPage = () => {
   const [coffeeData, setCoffeeData] = useState([])

   const { user } = useContext(GlobalContext)

   useEffect(() => {
      fetch("http://localhost:9393/thumbnail_data")
         .then(response => response.json())
         .then(setCoffeeData)
   }, [])

   const randomizer = () => Math.floor(Math.random() * coffeeData.length)
   const coffeeOfDay = coffeeData[randomizer()]

   let coffeeSuggestionsArr = [];

   if (coffeeData.length !== 0) {
      coffeeSuggestionsArr = coffeeData.map(coffee => <Coffee key={coffee.title} data={coffee} />)
   }

   return (
      <div>
         {user.id !== "guest" ? <h3>Welcome, {user.username}</h3> : <h3>Welcome!</h3>}
         <h2>Home</h2>
         <div>
            <h3>Coffee of the Day</h3>
            <Coffee data={coffeeOfDay} />
         </div>
         <h3>Recommended Coffee</h3>
         <Grid container spacing={3}>
            {[
               coffeeSuggestionsArr[randomizer()],
               coffeeSuggestionsArr[randomizer()],
               coffeeSuggestionsArr[randomizer()],
            ]}
         </Grid>
      </div>
   )
}

export default DiscoverPage
