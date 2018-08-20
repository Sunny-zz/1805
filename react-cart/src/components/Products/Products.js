import React, { Component } from 'react'

class Products extends Component {
  state = {
    products: [
      {
        id: '112121',
        goodsName: 'iPad 4 Mini',
        price: 500.01,
        inventory: 1
      },
      {
        id: '116765',
        goodsName: 'T-shirt',
        price: 100,
        inventory: 10
      }
    ]
  }
  AddToCart = id => {
    // console.log(id)
    const { products } = this.state
    this.setState({
      products: products.map(goods => {
        if (goods.id === id) {
          goods.inventory = goods.inventory > 0 ? goods.inventory - 1 : 0
        }
        return goods
      })
    })
  }
  render() {
    const { products } = this.state

    const productList = products.map(goods => (
      <li key={goods.id}>
        <p style={{ marginBottom: 0 }}>
          {goods.goodsName} - ${goods.price.toFixed(2)}
          {goods.inventory ? `x ${goods.inventory}` : ''}
        </p>
        <button
          disabled={!goods.inventory}
          onClick={() => this.AddToCart(goods.id)}
        >
          {!goods.inventory ? 'Sold Out' : 'add to cart'}
        </button>
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
