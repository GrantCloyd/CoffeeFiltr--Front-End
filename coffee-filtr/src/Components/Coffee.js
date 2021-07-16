// import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, Grid } from "@material-ui/core"

const Coffee = ({ data }) => {
   let title = "Coffee"
   let img_url = "https://cstpdx.com/sites/clinton/files/black%20coffee.jpg"
   let id = 1

   if (data !== undefined && Object.keys(data).length !== 0) {
      title = data.title
      img_url = data.img_url
      id = data.id
   }

   return (
      <Grid item xs={4}>
         {data !== undefined && Object.keys(data).length !== 0 ? (
            <Card>
               <CardContent>
                  <Link to={`/beverage/${id}`}>
                     <h4>{title}</h4>
                     <img src={img_url} alt="Coffee" />
                  </Link>
               </CardContent>
            </Card>
         ) : null}
      </Grid>
   )
}

export default Coffee


   /* <Link to={`/${pathname}`}>
<img
   className="showImage"
   alt={name}
   src={image.medium}
/>

<h4 className="name">{name}</h4>
</Link>

{rating.average ? <p>⭐️&nbsp;&nbsp;{rating.average}</p> : <p> ⭐️ Not Rated</p>}

<Button variant="contained" color="primary" onClick={() => handleFavorite(item)}>
{favoriteStatus ? "♡ Favorite" : "♥ Remove"}
</Button>  */

