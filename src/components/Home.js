import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
        <Row>
            <Header />
            <Col md={12}>
                React Application HomePage
            </Col>
            <Footer />
        </Row>
    );
  }
}

export default Home;
