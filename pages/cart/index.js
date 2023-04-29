import { Fragment } from "react";

import Cart from "../../components/Cart/Cart";
import Header from "../../components/Header/Header";
import { fetch_productsList_productsCart } from "../../services/request";

export default function CartPage({allProducts, cartProducts}) {
    return (
        <Fragment>
            <Header allProducts={allProducts} cartProducts={cartProducts} />
            <Cart />
        </Fragment>
    );
}

export async function getServerSideProps(context) {
    const allProducts = await fetch_productsList_productsCart('allProducts');
    const cartProducts = await fetch_productsList_productsCart('cart');

    return {
        props: {
            allProducts,
            cartProducts
        }
    }
}