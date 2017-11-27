import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Row, Col } from 'react-grid-system';
import _ from 'lodash';
import Stream from './Stream';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: ['esl_sc2', 'womboxcombo', 'summit1g']
        }
    }
   

  render() {
    return (
        <Row className="center">
            <Header />
            <Col md={8} offset={{ md: 2 }} 
                onClick={this.handleApi} 
                className='container'>
                <h2> Twitch stream status</h2>
                {_.map(this.state.url, (id) => {
                    return <Stream 
                    id={id} />
                })}
            </Col>
            <Footer />
        </Row>
    );
  }
}

export default Home;
