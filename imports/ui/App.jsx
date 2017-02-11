import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TestArea from './TestArea'

var ReactBootstrap = require('react-bootstrap');
var Button = ReactBootstrap.Button;
// App component - represents the whole app
class App extends Component {
    
  render() {
    return (
      <div>
      	<h1>HELLO WORLD-22</h1>
      	<h1>HELLO WORLD-23</h1>
      	 <Button bsStyle="primary">Primary</Button>
      	 <TestArea />
      </div>
    );
  }
}
 
export default App
