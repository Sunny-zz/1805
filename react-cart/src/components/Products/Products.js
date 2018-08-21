import React, { Component } from 'react'

class Products extends Component {
  addToCart = id => {
    // console.log(id)

    const { addToCart } = this.props
    addToCart(id)
    // 如何在组建内定义一个全局的属性 使用 this.xxx 定义
    console.log(this.inp)
    // console.log(document.getElementById('btn'))
  }
  render() {
    const { products } = this.props
    const productList = products.map(goods => (
      <li key={goods.id}>
        <p style={{ marginBottom: 0 }}>
          {goods.goodsName} - ${goods.price.toFixed(2)}
          {goods.inventory ? `x ${goods.inventory}` : ''}
        </p>
        <button
          id="btn"
          disabled={!goods.inventory}
          onClick={() => this.addToCart(goods.id)}
          ref={inp => (this.inp = inp)}
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
