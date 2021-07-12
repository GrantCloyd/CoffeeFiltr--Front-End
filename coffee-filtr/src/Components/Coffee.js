import React from "react"
import { Link } from "react-router-dom"
import { Card, CardContent, Grid } from "@material-ui/core"

const Coffee = () => {
   const { name, description, image, id } = {
      name: "Coffee",
      description: "Description",
      image: "https://cstpdx.com/sites/clinton/files/black%20coffee.jpg",
      id: 1,
   }

   return (
      <Grid item xs={4}>
         <Card>
            <CardContent>
               <Link to={`/beverage/${id}`}>
                  <h4>{name}</h4>
                  <img src={image} alt="Coffee" />
               </Link>
            </CardContent>
         </Card>
      </Grid>
   )
}

export default Coffee

{
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
}
