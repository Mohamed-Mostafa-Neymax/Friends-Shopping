import { useSelector } from "react-redux";
import { Container, Row } from "react-bootstrap";
import ProductItem from "./Product-Item";

export default function ProductsList() {
    const products = useSelector(state => state.products.products);
    return (
        <Container>
                <Row>
                        {
                            products.map(product => (
                                <ProductItem 
                                    key={product.id}
                                    id={product.id}
                                    title={product.title}
                                    price={product.price}
                                    description={product.description}
                                    image={product.image} />
                            ))
                            
                        }
                </Row>
            </Container>
    );
}