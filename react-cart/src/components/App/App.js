import React, { Component } from 'react'
import Header from '../Header/Header'
import Products from '../Products/Products'
import ShoppingCart from '../ShoppingCart/ShoppingCart'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <hr />
        <Products />
        <hr />
        <ShoppingCart />
      </div>
    )
  }
}

export default App
