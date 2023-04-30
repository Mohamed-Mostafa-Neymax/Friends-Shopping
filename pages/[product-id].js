import { Fragment } from "react";

import ProductDetails from "../components/Products/Product-Details";
import Header from "../components/Header/Header";
import { fetch_productsList_productsCart } from "../services/request";

export default function OrderDetailsPage({allProducts, cartProducts}) {

    return (
        <Fragment>
            <Header allProducts={allProducts} cartProducts={cartProducts} />
            <ProductDetails />
        </Fragment>
    );
}

export async function getStaticProps() {
    const allProducts = await fetch_productsList_productsCart('allProducts');
    const cartProducts = await fetch_productsList_productsCart('cart');

    return {
        props: {
            allProducts,
            cartProducts
        },
    }
}

export async function getStaticPaths() {
    return {
        paths: [],
        fallback: 'blocking'
    }
}