import React from 'react'
import Header from './Header'
import Order from './Order'
import Inventory from './Inventory'
import Fish from './Fish'
// fish data from json file
import sampleFishes from '../sample-fishes'


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

  // inventory comp: load update
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes })
  }

  // order fish from inventory component
  addToOrder = (key) => {
    // 1. take a copy of state
    const order = {...this.state.order};

    // 2. ether add to order or update number of order
    // if that order-key exists, add 1 (update) or a one to a new key (add)
    order[key] = order[key] + 1 || 1

    // 3. call setState to update our state
    this.setState(
      {order}
    )
  }

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='f**ing tasty & yummy'/>
          <ul className='fishes'>
              {Object.keys(this.state.fishes).map(key =>
                <Fish
                  key={key}
                  index={key}
                  details={this.state.fishes[key]}
                  addToOrder={this.addToOrder} />
              )}
          </ul>
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          />
      </div>
    );
  }
}

export default App
