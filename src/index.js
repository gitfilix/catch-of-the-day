import React from 'react';
import { render } from 'react-dom';

// base class
class StorePicker extends React.Component {

  render() {
    return <p>Hello!</p>
  }
}

render(<StorePicker />, document.querySelector('#main'));
