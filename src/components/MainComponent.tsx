import React from 'react';
import NavMenu from "./NavMenu";
import {Col, Container, Row} from "reactstrap";
import Dashboard from "../layouts/Dashboard";

function MainComponent() {
  return (
    <Container style={{paddingTop:30}}>
        <Row>
            <Col>
                <NavMenu />
                <Dashboard />
            </Col>
        </Row>
    </Container>

  );
}

export default MainComponent;