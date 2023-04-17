import { Fragment, useEffect } from "react";

import ProductsList from "../components/Products/Products-List";
import Test from "../components/Test";
import productsThunk from "../store/products-thunk";
import { useDispatch, useSelector } from "react-redux";
import { productsActions } from "../store/products-slice";
import Header from "../components/Header/Header";

let isInitial = true;

export default function HomePage() {
  const dispatchAction = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    if( isInitial ) {
      async function getProductsRequest() {
        const response = await fetch('https://fakestoreapi.com/products');
        if( !response.ok ) throw new Error('Failed to fetch data!');
        const data = await response.json();
        dispatchAction(productsActions.getProducts(data));
      }
      getProductsRequest();
      isInitial = false;
    } else return;
    
  }, [products, dispatchAction]);

  return (
    <Fragment>
      {/* <Test></Test> */}
      <Header />
      <ProductsList></ProductsList>
    </Fragment>
  )
}
