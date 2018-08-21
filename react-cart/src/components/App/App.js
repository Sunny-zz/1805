import React, { Component } from 'react'
import Header from '../Header/Header'
import Products from '../Products/Products'
import ShoppingCart from '../ShoppingCart/ShoppingCart'

class App extends Component {
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
    ],
    cartProducts: []
  }
  addToCart = id => {
    const { products, cartProducts } = this.state
    const isInCart = cartProducts.findIndex(item => item.id === id)
    const newCart =
      isInCart === -1
        ? [
            ...cartProducts,
            { ...products.find(item => item.id === id), num: 1 }
          ]
        : cartProducts.map(item => {
            if (item.id === id) {
              item.num = item.num + 1
            }
            return item
          })
    this.setState({
      products: products.map(goods => {
        if (goods.id === id) {
          goods.inventory = goods.inventory > 0 ? goods.inventory - 1 : 0
        }
        return goods
      }),
      cartProducts: newCart
    })
  }

  render() {
    const { products, cartProducts } = this.state
    console.log(cartProducts)

    return (
      <div>
        <Header />
        <hr />
        <Products products={products} addToCart={this.addToCart} />
        <hr />
        <ShoppingCart cartProducts={cartProducts} />
      </div>
    )
  }
}

export default App
