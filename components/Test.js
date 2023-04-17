import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

import { productsActions } from "../store//products-slice";

export default function Test() {
    const quantity = useSelector(state => state.products.quantity);
    const dispatchAction = useDispatch();

    function changeStateHandler() {
        dispatchAction(productsActions.toggleState(1));
    }
    
    return (
        <div>
            <Container>
            <Row>
                <Col lg={6}>
                    <button onClick={changeStateHandler}>Change State</button>
                </Col>
                <Col lg={6}>
                    <h1>isWork: { quantity }</h1>
                </Col>
            </Row>
            </Container>
        </div>
    );
}