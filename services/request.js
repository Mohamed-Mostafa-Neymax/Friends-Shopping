export async function fetch_productsList_productsCart(fetchType) {
    const response = await fetch(`https://advanced-redux-4b354-default-rtdb.firebaseio.com/${fetchType}.json`);
    if (!response.ok) throw new Error('Failed to fetch data!');
    const data = await response.json();
    if (fetchType === 'allProducts')
        for (let key in data)
            return data[key];
    else if (fetchType === 'cart')
        for (let key in data)
            return {
                products: data?.products,
                totalQuantity: data?.totalQuantity,
                totalPrice: data?.totalPrice
            }
}