import React, { Component } from 'react'

class ShoppingCart extends Component {
  render() {
    const { cartProducts } = this.props
    const cartList =
      cartProducts.length === 0 ? (
        <span>请添加商品到购物车</span>
      ) : (
        <ul>
          {cartProducts.map(item => (
            <li key={item.id}>
              {item.goodsName} - ${item.price} x {item.num}
            </li>
          ))}
        </ul>
      )

    return (
      <div>
        <h2>ShoppingCart</h2>
        {cartList}
        {cartProducts.length !== 0 ? (
          <span>
            total:$
            {1000.0}
          </span>
        ) : (
          ''
        )}
        <br />
        <button disabled={!cartProducts.length}>checkout</button>
      </div>
    )
  }
}

export default ShoppingCart
