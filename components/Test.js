import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";

import { testActions } from "../store/test-slice";

export default function Test() {
    const isWork = useSelector(state => state.theTest.stateIsWorking);
    const dispatchAction = useDispatch();

    function changeStateHandler() {
        dispatchAction(testActions.toggleState());
    }
    
    return (
        <div>
            <Container>
            <Row>
                <Col lg={6}>
                    <h1>Say hello for NextJS project</h1>
                    <button onClick={changeStateHandler}>Change State</button>
                </Col>
                <Col lg={6}>
                    <h1>Say hello for NextJS project</h1>
                    <h1>isWork: { isWork }</h1>
                </Col>
            </Row>
            </Container>
        </div>
    );
}