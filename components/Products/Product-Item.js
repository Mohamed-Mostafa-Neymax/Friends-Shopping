import { Col } from 'react-bootstrap';

import styles from './Product-Item.module.scss';
import Image from 'next/image';
import Button from '../ui/Button/Button';
import Link from 'next/link';

export default function ProductItem({id, title, price, description, image}) {
    return (
        <Col md={4} sm={12}>
            <div className={styles.product}>
                <div className={styles.productImg}>
                    <Image src={image} width={200} height={200} alt={title} />
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
                    <Button>Add to Cart</Button>
                </div>
            </div>
        </Col>

    );
}