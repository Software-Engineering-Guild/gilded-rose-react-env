import { Shop } from "../../api/gilded_rose";
import { items } from "../shopItems"

let shop = new Shop(items)

export default (state = items, action) => {
    let newItems = [...state]
    switch (action.type) {
        case "FETCH_ITEMS":
            newItems = [...shop.getItems()]
            break;
        case "UPDATE_ITEMS":
            try {
                shop.updateQuality()
            } catch (e) {
                console.log(e)
            }
            newItems = [...shop.getItems()]
            break;
        default:
            break;
    }
    return newItems
}