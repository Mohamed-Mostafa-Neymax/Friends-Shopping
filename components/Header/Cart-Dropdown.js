import { useDispatch, useSelector } from 'react-redux';
import { Fragment } from 'react';
import Image from 'next/image';

import styles from './Cart-Dropdown.module.scss';
import Button from '../ui/Button/Button';
import { productsActions } from '../../store/products-slice';

export default function CartDropdown() {
  const products = useSelector(state => state.products.cart.products);
  const totalPrice = useSelector(state => state.products.cart.totalPrice);
  const dispatchActions = useDispatch();

  const cartProducts = (
    products.map(product => (
      <li key={product.id} className={styles.item}>
        <Image src={product.image} width={100} height={100} alt={product.title} />
        <h6>{product.title}</h6>
        <h6>Quantity: {product.quantity} X</h6>
        <div className={styles.actions}>
          <Button type='button' onClick={() => dispatchActions(productsActions.addProductToCart(product.id))}>+</Button>
          <Button onClick={() => dispatchActions(productsActions.removeProductFromCart({id: product.id, entirely: false}))}>-</Button>
          <Button onClick={() => dispatchActions(productsActions.removeProductFromCart({id: product.id, entirely: true}))}>X</Button>
        </div>
      </li>
    ))
  );

  return (
    <Fragment>
      { products.length > 0 && cartProducts }
      { products.length > 0 && <h6>Total Price: {totalPrice.toFixed(2)}$</h6> }
      { products.length < 1 && <p className='text-center'>No products found!</p> }
    </Fragment>
  )
}
