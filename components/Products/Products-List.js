import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

import ProductItem from "./Product-Item";
import Button from "../ui/Button/Button";
import { productsActions } from "../../store/products-slice";

export default function ProductsList() {
    const products = useSelector(state => state.products.products);
    const gridActivated = useSelector(state => state.products.gridActivated);
    const dispatchActions = useDispatch();

    return (
        <Container>
            <Row>
                <Col sm={12}>
                    <Button onClick={() => dispatchActions(productsActions.activateGrid())} className={`${gridActivated ? 'activated' : ''}`} extraClass='mx-2 mb-3'>
                        <i className="fa-solid fa-grip"></i>
                    </Button>
                    <Button onClick={() => dispatchActions(productsActions.deactivateGrid())} className={`${!gridActivated ? 'activated' : ''}`}>
                        <i className="fa-solid fa-list"></i>
                    </Button>
                </Col>
            </Row>
            <Row>
                {
                    products.map(product => (
                        <Col md={gridActivated ? 4 : 12} sm={12} key={product.id}>
                            <ProductItem 
                                grid={gridActivated}
                                id={product.id}
                                title={product.title}
                                price={product.price}
                                description={product.description}
                                image={product.image} />
                        </Col>
                    ))
                    
                }
            </Row>
            </Container>
    );
}