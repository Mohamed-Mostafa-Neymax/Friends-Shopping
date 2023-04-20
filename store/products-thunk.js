import { productsActions } from "./products-slice";

export default function productsThunk() {
    return async dispatch => {
        async function getProductsRequest() {
            const response = await fetch('https://advanced-redux-4b354-default-rtdb.firebaseio.com/allProducts.json');
            if( !response.ok ) throw new Error('Failed to fetch data!');
            const data = await response.json();
            for( let key in data ) dispatch(productsActions.getProducts(data[key]));
        }
        await getProductsRequest();
    }
}