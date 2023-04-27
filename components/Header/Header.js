import Image from 'next/image';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import CartDropdown from './Cart-Dropdown';
import styles from './Header.module.scss';
import { productsActions } from '../../store/products-slice';
import { fetchProductsThunk } from '../../store/products-thunk';

let initialcart = true;

export default function Header(props) {
    const dispatchAction = useDispatch();
    const cartProducts = useSelector(state => state.products.cart.products);

    useEffect(() => {
        if (initialcart) {
            dispatchAction(fetchProductsThunk('cart'));
            initialcart = false;
        } else return;
    }, [cartProducts, dispatchAction]);

    const totalQuantity = useSelector(state => state.products.cart.totalQuantity);
    const cartIsShown = useSelector(state => state.products.cartIsShown);
    const dispatchActions = useDispatch();

    function showCartHandler() {
        dispatchActions(productsActions.toggleShowingCart());
    }

    return (
        <nav className={styles.navigation}>
            <Container className={styles.navContainer}>
                <ul>
                    <li className={styles.logo}>
                        <Link href='/'>
                            <Image src='/images/logo.png' width={100} height={80} alt='logo' priority={true} />
                        </Link>
                    </li>
                    <li className={styles.link}>
                        <Link href='/cart'>Cart</Link>
                    </li>
                </ul>
                <ul>
                    <li className={styles.cart}>
                        <button onClick={showCartHandler}>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <div className={styles.badge}>{totalQuantity}</div>
                        </button>
                        {cartIsShown && <ul><CartDropdown /></ul>}
                    </li>
                    <li className={styles.profile}><i className="fa-solid fa-user"></i></li>
                </ul>
            </Container>
        </nav>
    );
}