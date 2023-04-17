import Image from 'next/image';
import styles from './Header.module.scss';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import { useSelector } from 'react-redux';

export default function Header(props) {
    const totalQuantity = useSelector(state => state.products.cart.totalQuantity);

    return (
        <nav className={styles.navigation}>
            <Container className={styles.navContainer}>
                <ul>
                    <li className={styles.logo}>
                        <Link href='/'>
                            <Image src='/images/logo.png' width={100} height={80} alt='logo' />
                        </Link>
                    </li>
                    <li className={styles.link}>
                        <Link href='/orders'>Orders</Link>
                    </li>
                </ul>
                <ul>
                    <li className={styles.cart}>
                        <button>
                            <i className="fa-solid fa-cart-shopping"></i>
                            <div className={styles.badge}>{totalQuantity}</div>
                        </button>
                    </li>
                    <li className={styles.profile}><i className="fa-solid fa-user"></i></li>
                </ul>
            </Container>
        </nav>
    );
}