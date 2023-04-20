import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

import CartProduct from "./Cart-Product";
import Button from "../ui/Button/Button";

export default function Cart() {
    const products = useSelector(state => state.products.cart.products);
    const totalPrice = useSelector(state => state.products.cart.totalPrice);
    const router = useRouter();

    return (
        <Container>
            <Row>
                {
                    products.length > 0 ? products.map(product => (
                        <Col sm={12} key={product.id}>
                            <CartProduct 
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                quantity={product.quantity}
                                image={product.image} />
                        </Col>
                    )) : <h1 className='text-center'>No products found!</h1>
                    
                }
                <hr />
                <div className='d-flex justify-content-between'>
                    <h1>Total Price: ${ products.length > 0 ? totalPrice.toFixed(2) : 0 }</h1>
                    <Button onClick={() => router.push('/order')}>Confirm</Button>
                </div>
            </Row>
            </Container>
    );
}