export const cartCountReducer = (state = { cartCount: 0, productList: [], totalPrice: 0 }, action) => {
    let newState = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case "PRODUCTS_LIST":
            if (newState.productList.length === 0) {
                newState.productList.push({ ...action.payload, count: 1 })
            } else {
                let match = false
                newState.productList.forEach((item) => {
                    if (item.id === action.payload.id) {
                        item.count++
                        match = true
                    }
                })
                if (!match) {
                    newState.productList.push({ ...action.payload, count: 1 })
                }
            }
            newState.cartCount++
            newState.totalPrice += action.payload.price
            return newState
        case "DELETE_ITEM":
            return {
                ...newState, productList: newState.productList.filter((item) => {
                    return (item.id !== action.payload.id)
                }), cartCount: newState.cartCount - action.payload.count, totalPrice: newState.totalPrice - action.payload.count * action.payload.price
            }
        default:
            return state;
    }
};
