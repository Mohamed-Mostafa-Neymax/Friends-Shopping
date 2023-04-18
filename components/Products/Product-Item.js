import { Col } from 'react-bootstrap';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';

import styles from './Product-Item.module.scss';
import Button from '../ui/Button/Button';
import { productsActions } from '../../store/products-slice';

export default function ProductItem({id, title, price, description, image}) {
    const dispatchActions = useDispatch();

    function addToCartHandler() {
        dispatchActions(productsActions.addProductToCart(id));
    }

    return (
        <Col md={4} sm={12}>
            <div className={styles.product}>
                <div className={styles.productImg}>
                    <Image src={image} width={200} height={200} alt={title} priority={true} />
                    <div>
                        <Link href={`/orders/${id}`}>View Details</Link>
                    </div>
                </div>
                <div className={styles.productInfo}>
                    <div>
                        <h4>{title}</h4>
                        <h4>${price}</h4>
                    </div>
                    <p>{description}</p>
                    <Button type='button' onClick={addToCartHandler}>Add to Cart</Button>
                </div>
            </div>
        </Col>

    );
}