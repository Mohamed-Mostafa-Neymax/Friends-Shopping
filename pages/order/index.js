import { Fragment } from "react";

import Header from "../../components/Header/Header";
import Order from "../../components/Order/Order";
import { fetch_productsList_productsCart } from "../../services/request";

export default function OrderFormPage({ allProducts, cartProducts }) {
    return (
        <Fragment>
            <Header allProducts={allProducts} cartProducts={cartProducts} />
            <Order />
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