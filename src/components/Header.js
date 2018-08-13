import React from 'react'
import {Container, Row, Col} from 'reactstrap'
export default class Header extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col lg={2}>

                    </Col>

                    <Col lg={8}>

                    </Col>

                    <Col lg={2}>

                    </Col>
                </Row>
            </Container>
        );
    }
}