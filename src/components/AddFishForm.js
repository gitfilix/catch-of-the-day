import React from 'react';

class AddFishForm extends React.Component {

  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFish = (event) => {
    event.preventDefault();

    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value), // in cents
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    }
    this.props.addFish(fish);
    // refresh the form
    event.currentTarget.reset();
  }

  render() {
    return (
        <form className="fish-edit" onSubmit={this.createFish} >
          <input type='name' ref={this.nameRef} type='text' placeholder='name' />
          <input type='price' ref={this.priceRef} type='text' placeholder='Price' />
          <select ref={this.statusRef} type='status'>
            <option value='available'>Fresh ! </option>
            <option value='unavailable'>Sold Out!</option>
          </select>
          <textarea ref={this.descRef} name='desc' placeholder='Description' />
          <input ref={this.imageRef} type='image' type='text' placeholder='Image' />
          <button type="submit">+ Add Fish</button>
        </form>
    );
  }
}

export default AddFishForm;
