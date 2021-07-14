import React from "react"
import Coffee from "./Coffee"
import { Grid } from "@material-ui/core"

const Recommended = () => {
   return (
      <div>
         <h3>Recommended Coffee</h3>
         <Grid container spacing={3}></Grid>
      </div>
   )
}

export default Recommended
