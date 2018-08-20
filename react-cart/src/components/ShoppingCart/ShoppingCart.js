import React, { Component } from 'react'

class ShoppingCart extends Component {
  render() {
    const { cartProducts } = this.props
    const cartList = cartProducts.map(item => (
      <li key={item.id}>{`${item.goodsName} -$${item.price} x ${item.num}`}</li>
    ))
    return (
      <div>
        <h2>ShoppingCart</h2>
        <ul>{cartList}</ul>
      </div>
    )
  }
}

export default ShoppingCart
