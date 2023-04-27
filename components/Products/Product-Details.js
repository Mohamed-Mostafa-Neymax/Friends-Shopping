import { Col, Container, Row } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Image from 'next/legacy/image';
import { useSelector, useDispatch } from 'react-redux';

import styles from './Product-Details.module.scss';
import Button from '../ui/Button/Button';
import { productsActions } from '../../store/products-slice';

export default function ProductDetails() {
    const router = useRouter();
    const dispatchActions = useDispatch();
    const products = useSelector(state => state.products.products);
    const productID = +router.query['product-id'];
    const product = products.find(product => product.id === productID);

    if( !product ) return <h1 className='text-center'>Loading</h1>;
    else return (
        <Container>
            <Row>
                <Col sm={12} md={4}>
                    <Image src={product.image} width={500} height={500} alt={product.title} layout={"responsive"} priority />
                </Col>
                <Col sm={12} md={8}>
                    <div className={styles.details}>
                        <h3 className='mx-3'>{product.title}</h3>
                        <h3 className='mx-3'>${product.price}</h3>
                        <p className='mx-3'>{product.description}</p>
                        <h3 className='mx-3'>{product.category}</h3>
                        <div className='d-flex'>
                            <div className='mx-3'>
                                <div className={`${styles.rate}`}>
                                    <div className={styles.lightStars} style={{width: `${product.rating.rate * 100 / 5}%` }}>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                    <div className={styles.darkStars}>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </div>
                            <p>{`(${product.rating.rate}) (${product.rating.count})`}</p>
                        </div>
                        <Button extraClass='mx-3' type='button' onClick={() => dispatchActions(productsActions.addProductToCart(product.id))}>Add to Cart</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}