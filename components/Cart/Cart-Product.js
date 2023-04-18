import Image from 'next/image';
import Link from 'next/link';

import styles from './Cart-Product.module.scss';
import { productsActions } from '../../store/products-slice';
import Button from '../ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';

export default function CartProduct({id, title, price, description, image, quantity}) {
    const dispatchActions = useDispatch();
    const totalPrice = useSelector(state => state.products.cart.totalPrice);

    return (
            <div className={styles.rowProduct}>
                <div className={styles.productImg}>
                    <Image src={image} width={200} height={200} alt={title} priority={true} />
                    <div>
                        <Link href={`/products/${id}`}>View Details</Link>
                    </div>
                </div>
                <div className={styles.productInfo}>
                    <div>
                        <h4>{title}</h4>
                        <h4>${price}</h4>
                    </div>
                    <div>
                        <p>{description}</p>
                        <div className={styles.actions}>
                            <Button type='button' onClick={() => dispatchActions(productsActions.addProductToCart(id))}>+</Button>
                            <Button onClick={() => dispatchActions(productsActions.removeProductFromCart({id, entirely: false}))}>-</Button>
                            <Button onClick={() => dispatchActions(productsActions.removeProductFromCart({id, entirely: true}))}>X</Button>
                        </div>
                    </div>
                    <h5>Quantity: { quantity }</h5>
                </div>
            </div>
    );
}