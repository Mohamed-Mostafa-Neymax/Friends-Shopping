import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import CartProduct from "./Cart-Product";

export default function Cart() {
    const products = useSelector(state => state.products.cart.products);
    const totalPrice = useSelector(state => state.products.cart.totalPrice);

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
                <h1>Total Price: ${ products.length > 0 ? totalPrice.toFixed(2) : 0 }</h1>
            </Row>
            </Container>
    );
}