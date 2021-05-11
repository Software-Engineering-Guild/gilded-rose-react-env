import { Shop } from "../../api/gilded_rose.ts";
import { items } from "../shopItems"

let shop = new Shop(items)

export default (state = items, action) => {
    let newItems = [...state]
    switch (action.type) {
        case "FETCHED_ITEMS":
            newItems = [...action.payload]
            break;
        case "UPDATED_ITEMS":
            newItems = [...action.payload]
            break;
        default:
            break;
    }
    return newItems
}

export const fetchItems = async (dispatch) => {
    const items = await Promise.resolve(shop.getItems())
    dispatch({type:"FETCHED_ITEMS", payload: items})
}

export const updateItems = async (dispatch) => {
    try {
        shop.updateQuality()
    } catch (e) {
        console.error("Error occurred while updating items", e)
    }
    const items = await Promise.resolve(shop.getItems())
    dispatch({type:"UPDATED_ITEMS", payload: items})
}