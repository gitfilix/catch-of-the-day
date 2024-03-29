import React from 'react';
import { formatPrice } from '../helpers'


class Order extends React.Component {
  // second renderfunction
  renderOrder = key => {
    const fish= this.props.fishes[key]
    const count = this.props.order[key]
    const isAvailable = fish && fish.status === 'available'
    if(!isAvailable) {
      return (
        <li key={key}>
        Sorry {fish ? fish.name: 'fish'} is no longer available
        </li>
      )
    }
    return (
      <li key={key}>
        {count} pound {fish.name}
       {formatPrice(count *  fish.price)}
      </li>
    )
  }

  render() {
    const orderIds = Object.keys(this.props.order)
    console.log('orderIds', orderIds);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish= this.props.fishes[key]
      const count = this.props.order[key]
      const isAvailable = fish && fish.status === 'available'
      if(isAvailable) {
        return prevTotal + (count * fish.price);
      }
      return prevTotal;
    }, 0)

    return (
        <div className="order-wrap">
          <h2>Orders</h2>
          <ul className='order'>{orderIds.map(this.renderOrder)}</ul>
            <div className="total">
              <strong>Total:{formatPrice(total)}</strong>
          </div>
        </div>
    );
  }
}

export default Order;
