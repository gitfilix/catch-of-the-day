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

  render() {
    return (
      <div className='catch-of-the-day'>
        <div className='menu'>
          <Header tagline='f**ing tasty & yummy'/>
          <ul className='fishes'>
              {Object.keys(this.state.fishes).map(key => <Fish key={key} details={this.state.fishes[key]} /> )}
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
