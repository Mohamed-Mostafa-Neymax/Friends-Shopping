import { productsActions } from "./products-slice";

export default function productsThunk() {
    return async (dispatchAction) => {
        async function getProductsRequest() {
            const response = await fetch('https://dummyjson.com/products');
            if (!response.ok) return;
            const data = await response.json();
            dispatchAction(productsActions.getProducts(data));
        }
        getProductsRequest();
    }
}