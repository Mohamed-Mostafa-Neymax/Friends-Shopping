import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductsList from "../components/Products/Products-List";
import productsThunk from "../store/products-thunk";
import Header from "../components/Header/Header";

export default function HomePage() {
  const dispatchAction = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    dispatchAction(productsThunk());
  }, [products, dispatchAction]);

  return (
    <Fragment>
      <Header />
      <ProductsList></ProductsList>
    </Fragment>
  )
}
