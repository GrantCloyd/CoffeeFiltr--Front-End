import React, { useEffect, useState, useContext } from "react"
import Coffee from "./Coffee"
// import Recommended from "./Recommended"
import { Grid } from "@material-ui/core"
import { GlobalContext } from "../Context/GlobalState"

const DiscoverPage = () => {
   const [coffeeData, setCoffeeData] = useState([])
   const [randomArrSelection, setRandomArrSelection] = useState([])

   const { user } = useContext(GlobalContext)

   useEffect(() => {
      fetch("http://localhost:9393/thumbnail_data")
         .then(response => response.json())
         .then(setCoffeeData)
      randomArr()
   }, [])

   const randomizer = () => Math.floor(Math.random() * 23)

   const randomArr = () => {
      let arr = []
      for (let i = 0; i < 4; i++) {
         let num = randomizer()
         while (arr.includes(num)) {
            num = randomizer()
         }
         arr = [...arr, num]
      }
      setRandomArrSelection(arr)
   }

   const coffeeOfDay = coffeeData[randomArrSelection[0]]

   let coffeeSuggestionsArr = []

   if (coffeeData.length !== 0) {
      coffeeSuggestionsArr = coffeeData.map(coffee => <Coffee key={coffee.title} data={coffee} />)
   }

   return (
      <div className="bottom-div">
         {user.id !== "guest" ? <h3>Welcome, {user.username}</h3> : <h3>Welcome!</h3>}
         <h2>Home</h2>
         <h3>Coffee of the Day</h3>
         <div id="COTD">
            <Coffee data={coffeeOfDay} />
         </div>
         <br />
         <h3>Recommended Coffee</h3>
         <Grid container spacing={3}>
            {[
               coffeeSuggestionsArr[randomArrSelection[1]],
               coffeeSuggestionsArr[randomArrSelection[2]],
               coffeeSuggestionsArr[randomArrSelection[3]],
            ]}
         </Grid>
      </div>
   )
}

export default DiscoverPage
