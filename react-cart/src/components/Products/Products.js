import React, { Component } from 'react'

class Products extends Component {
  state = {
    products: [
      {
        id: '112121',
        goodsName: 'iPad 4 Mini',
        price: 500.01,
        inventory: 2
      },
      {
        id: '116765',
        goodsName: 'T-shirt',
        price: 100,
        inventory: 10
      }
    ]
  }
  render() {
    const { products } = this.state
    const productList = products.map(goods => (
      <li key={goods.id}>
        <p style={{ marginBottom: 0 }}>
          {goods.goodsName} - ${goods.price.toFixed(2)} x {goods.inventory}
        </p>
        <button>add to cart</button>
      </li>
    ))
    return (
      <div>
        <h2>Products</h2>
        <ul>{productList}</ul>
      </div>
    )
  }
}

export default Products
