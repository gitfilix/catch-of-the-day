import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'

class App extends React.Component {
  // initial empty state
  state = {
    fishes: {},
    order: {}
  }

  addFish = (fish) => {
    // 1. take a copy of exisiting state
    const fishes = { ...this.state.fishes }
    // 2. add a new fish to that fishes variable
    fishes[`fish-${Date.now()}`] = fish
    // 3. set the new fishes object to state
    this.setState({
      fishes: fishes
    });
    console.log('Adding a fish - state', this.state.fishes);
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='f**ing tasty & yummy'/>
        </div>
        <Order />
        <Inventory addFish={this.addFish}/>
      </div>
    );
  }
}

export default App
