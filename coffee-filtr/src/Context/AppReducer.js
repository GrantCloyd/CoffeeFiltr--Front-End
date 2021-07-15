export default (state, action) => {
   switch (action.type) {
      case "SET_Beverages":
         return {
            ...state,
            beverages: [action.payload],
         }
      case "UPDATE_Beverages":
         let newBeverages = state.beverages[0].map(beverage => {
            if (beverage.id === action.payload.id) {
               return action.payload
            }
            return beverage
         })

         return {
            ...state,
            beverages: [newBeverages],
         }
      case "ADD_BEVERAGE":
         return {
            ...state,
            beverages: [...state.beverages, action.payload],
         }
      case "CHANGE_USER":
         return {
            ...state,
            user: action.payload
         }
      default:
         return state

      // case "DELETE":
      //     return {
      //        ...state,
      //        transaction: state.transactions.filter(t => t.id !== action.payload)
      //     }
      // case "ADD_TRANSACTION":
      //     return {
      //        ...state,
      //        transactions: [action.payload, ...state.transactions]
      //     }
      // default:
      //     return state
   }
}
