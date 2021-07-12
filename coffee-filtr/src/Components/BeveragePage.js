import React from 'react'
import { useParams } from "react-router-dom"

function BeveragePage() {
    const coffeeId = useParams().id;

    return (
        <div>
            <h2>Coffee Info</h2>
            <h4>Coffee Id: {coffeeId}</h4>
        </div>
    )
}

export default BeveragePage
