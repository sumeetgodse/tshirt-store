export const addItem = () => {
    return {
        type: "ADD_ITEM",
    };
};

export const addToProducts = (item) => {
    return {
        type: "PRODUCTS_LIST",
        payload: item
    };
};

export const deleteItem = (item) => {
    return {
        type: "DELETE_ITEM",
        payload: item
    };
};