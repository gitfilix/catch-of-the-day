import React from 'react';
import { getFunName } from '../helpers'

class StorePicker extends React.Component {
  myInput = React.createRef()
  // property syntax: event is bounded to this.
  goToStore = (event) => {
    event.preventDefault()
    // get text from input select element for dynamic route
    const storeName = this.myInput.current.value;
    console.log('storeName', storeName);
    // access to router
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
          />

          <button type="Submit">Visit Store -> </button>
      </form>
    );
  }
}

export default StorePicker;
