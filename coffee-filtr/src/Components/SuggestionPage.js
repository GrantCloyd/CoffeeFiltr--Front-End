import React from 'react'
import Coffee from "./Coffee";
import { Grid } from "@material-ui/core"

const SuggestionPage = () => {
    return (
        <div>
            <h2>Make Your Own Coffee</h2>
            <h3>What Ingredients do you Have?</h3>
            <form>
                {/* Insert checkboxes */}
                <button>What can I make?</button>
            </form>

            <h3>Suggested Coffee</h3>
            <Grid container spacing={3}>
                <Coffee />
                <Coffee />
                <Coffee />
            </Grid>
        </div>
    )
}

export default SuggestionPage;