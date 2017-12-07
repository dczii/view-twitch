import React, { Component } from 'react';
import { Row, Col } from 'react-grid-system';
import superagent from 'superagent';
import CircleIcon from 'mdi-react/CircleIcon';
import injectTapEventPlugin from 'react-tap-event-plugin'
import FlatButton from 'material-ui/FlatButton';
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

  onUrlClick = (url) => {
    window.open('https://www.twitch.tv/' + url, '_blank');
  }

  render() {
    let iconColor = this.state.result && this.state.result.stream_type === 'live' ? 'green' : 'red'
    return (
        <Row className='stream-container'>
            <Col md={8}>
              <FlatButton label={this.props.id} onClick={() => {this.onUrlClick(this.props.id)}}/>
            </Col>
            <Col md={4} className='statusStyle'>
              <CircleIcon className={'iconStyle ' + iconColor} />
              {this.state.result && this.state.result.stream_type === 'live' ? _.upperFirst(this.state.result.stream_type) : 'Offline'}
            </Col>
        </Row>
    );
  }
}

export default Stream;
