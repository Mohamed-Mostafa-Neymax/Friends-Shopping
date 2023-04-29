import { Fragment } from "react";

import ProductsList from "../components/Products/Products-List";
import Header from "../components/Header/Header";
import { fetch_productsList_productsCart } from "../services/request";

export default function HomePage({allProducts, cartProducts}) {
  
  return (
    <Fragment>
      <Header allProducts={allProducts} cartProducts={cartProducts} />
      <ProductsList />
    </Fragment>
  )
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