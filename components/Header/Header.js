import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';

import CartDropdown from './Cart-Dropdown';
import styles from './Header.module.scss';
import { productsActions } from '../../store/products-slice';
// import { fetchProductsThunk } from '../../store/products-thunk';

let initialcart = true;
let initialProducts = true;

export default function Header({allProducts, cartProducts}) {
    const dispatch = useDispatch();
    const cartProductsList = useSelector(state => state.products.cart.products);
    const products = useSelector(state => state.products.products);
    const totalQuantity = useSelector(state => state.products.cart.totalQuantity);
    const cartIsShown = useSelector(state => state.products.cartIsShown);

    useEffect(() => {
        if (initialcart) {
            // dispatch(fetchProductsThunk('cart'));
            dispatch(productsActions.getCartProducts(cartProducts));
            initialcart = false;
        } else return;
    }, [cartProductsList, dispatch]);
    useEffect(() => {
        if (initialProducts) {
            // dispatch(fetchProductsThunk('allProducts'));
            dispatch(productsActions.getProducts(allProducts));
            initialProducts = false;
        } else return;
    }, [products, dispatch]);

    function showCartHandler() { dispatch(productsActions.toggleShowingCart()); }

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