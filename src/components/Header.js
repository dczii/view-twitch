import React, { Component } from 'react';
import { Col } from 'react-grid-system';

class Header extends Component {
  render() {
    return (
    	<Col md={12}>
    		<img src="https://dczii.github.io/images/logo.png" />
    	</Col>
    );
  }
}

export default Header;
