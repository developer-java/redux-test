import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import Header from './container/HeaderContainer'
export default class App extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Row className="header">
                    <Header/>
                </Row>
                <Row className="content">
                    <Col lg={4}>
                       // TODO Here write authorization logic if user is not Authorized
                    </Col>
                    <Col lg={8}>

                    </Col>
                </Row>
                <Row className="footer">
                    <Col lg={12}>
                        <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, doloremque?</h1>
                        <h2>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, doloremque?</h2>
                        <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor, doloremque?</h3>
                    </Col>
                </Row>
            </Container>
        );
    }
}