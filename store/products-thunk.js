import { productsActions } from "./products-slice";

export function fetchProductsThunk(fetchType) {
    return async dispatch => {
        async function getProductsRequest() {
            const response = await fetch(`https://advanced-redux-4b354-default-rtdb.firebaseio.com/${fetchType}.json`);
            if( !response.ok ) throw new Error('Failed to fetch data!');
            const data = await response.json();
            if( fetchType === 'allProducts' ) for( let key in data ) dispatch(productsActions.getProducts(data[key]));
            else if( fetchType === 'cart' )
                for( let key in data )
                    dispatch(productsActions.getCartProducts({
                        products: data?.products,
                        totalQuantity: data?.totalQuantity,
                        totalPrice: data?.totalPrice
                    }));
        }
        await getProductsRequest();
    }
}

export function postCartThunk(cart) {
    return async dispatch => {
        const response = await fetch(`https://advanced-redux-4b354-default-rtdb.firebaseio.com/cart.json`, {
            method: 'PUT',
            body: JSON.stringify(cart)
        });
        if( !response.ok ) throw new Error('Failed to update the cart!');
    }
}