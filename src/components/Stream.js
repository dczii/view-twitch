import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import superagent from 'superagent';
import _ from 'lodash';

class Stream extends Component {
  constructor(props) {
    super(props)
    this.state = {
        result: {}
    }
  }

  componentDidMount() {
    this.handleApi();
  }

 handleApi = () => {
      let token = 'qgjde0jb7dn58o8li1zd3wnt422k1i'
      let id = this.props.id
      let url = 'https://api.twitch.tv/kraken/streams/' + id
      superagent.get(url)
          .set('Client-ID', token)
          .end((error, response) => {
             if (error) {
                 console.error(error);
             } else {
                 this.setState({ result: response.body.stream || response.body })
             }
          });
  }

  render() {
    console.log(this.state.result)
    return (
        <Row className='stream-container'>
            <Col md={8}>
                {this.state.result.game || this.props.id}
            </Col>
            <Col md={4}>
              {this.state.result && this.state.result.stream_type === 'live' ? _.upperFirst(this.state.result.stream_type) : 'Offline'}
            </Col>
        </Row>
    );
  }
}

export default Stream;
