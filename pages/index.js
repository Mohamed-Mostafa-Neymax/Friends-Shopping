import { Fragment } from "react";

import ProductsList from "../components/Products/Products-List";
import Header from "../components/Header/Header";

export default function HomePage() {
  
  return (
    <Fragment>
      <Header />
      <ProductsList></ProductsList>
    </Fragment>
  )
}
