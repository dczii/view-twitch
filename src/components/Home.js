import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Row, Col } from 'react-grid-system';

class Home extends Component {
  render() {
    return (
        <Row className="center">
            <Header />
            <Col md={12} >
                React Application HomePage
            </Col>
            <Footer />
        </Row>
    );
  }
}

export default Home;
