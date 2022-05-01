import { 
    ADD_TO_WISH_LIST,
    REMOVE_TO_WISH_LIST
} from "../constants/wishListConstants";
import axios from "axios";

// Add to wishlist
export const addItemsToWishList = (id) => async (dispatch, getState) => {
        const {data} = await axios.get(`/api/v1/product/${id}`)
        dispatch({ 
            type: ADD_TO_WISH_LIST,
            payload: {
                product: data.product._id,
                name: data.product.name,
                price: data.product.price,
                image: data.product.images[0].url,
                stock: data.product.stock,
                quantity: 1
            },
        });
    localStorage.setItem("wishListItems", JSON.stringify(getState().wishList.wishListItems));
}

// Remove to wishList
export const removeItemsToWishList = (id) => async (dispatch, getState) => {
    dispatch({
        type: REMOVE_TO_WISH_LIST,
        payload: id
    });

    localStorage.setItem("wishListItems", JSON.stringify(getState().wishList.wishListItems));
}