import React, { createContext, useReducer, useEffect } from 'react'
import AppReducer from './AppReducer'
// Initial State
const initialState = {
    beverages: []
    // reviews: []
}

export const GlobalContext = createContext(initialState)

export const Provider = ({ children }) => {

    const [state, dispatch] = useReducer(AppReducer, initialState)

    useEffect(() => {
        fetch("http://localhost:9393/beverages")
           .then(response => response.json())
           .then(data => {
               dispatch({ type: 'SET_Beverages', payload: data })
            })
        // fetch("http://localhost:9393/reviews")
        //     .then(response => response.json())
        //    .then(data => {
        //        dispatch({ type: 'SET_Reviews', payload: data })})
     }, [])

    function updateBeverages(beverage) {
        dispatch({ type: 'UPDATE_Beverages', payload: beverage })
    }

    // function addReview(review) {
    //     dispatch({ type: 'ADD_REVIEW', payload: review })
    // }
    
    // function deleteTransaction(id) {
    //     dispatch({
    //         type: "DELETE",
    //         payload: id
    //     })
    // }

    // function addTransaction(transaction) {
    //     dispatch({
    //         type: "ADD_TRANSACTION",
    //         payload: transaction
    //     })
    // }


    return (<GlobalContext.Provider 
                value={{
                    beverages: state.beverages,
                    updateBeverages
                    // reviews: state.reviews
                    }}>
                        { children }
            </GlobalContext.Provider>)

}