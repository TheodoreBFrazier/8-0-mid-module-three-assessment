import { Component } from 'react';
import "./App.css";
import data from './data/productData.js'


class App extends Component {

  constructor() {
    super()
    this.state = {
      products: data.productData,
      cartProducts: [],

      currentPrice: 0,


    }
  }


  itemClick = (products) => {
    if (this.state.cartProducts > 0) {
      return;
    }

    this.setState({
      cartProducts: [...this.state.cartProducts, products],
      currentPrice: this.state.currentPrice + products.price,
      tax: this.state.currentPrice * 0.5,
      total: this.state.currentPrice + this.state.tax,

    })

  }


  render() {

    let productArray = this.state.products.map(product => {
      let { name, price, description, img } = product;
      return (
        <div id="items-display">
          <div id="item">
            <div> <h3>{name}</h3> </div>
            <div> Price: ${price.toFixed(2)} </div>
            <div>
              <button name="" onClick={() => this.itemClick(product)}> Add To Cart </button>
            </div>
            <img src={img} alt="item image" />
            <div> Description: {description} </div>
          </div>
        </div>
      )
    })

    let currentStateCart = this.state.cartProducts.map((product) => {
      return (
        <div className="cart-container">
          <div> {product.name} </div>
          <div><h2>Subtotal: ${this.state.currentPrice.toFixed(2)}</h2></div>
          <div><h2>Tax: ${this.state.tax.toFixed(2)}</h2></div>
          <div><h2>Total: ${this.state.total} </h2></div>
        </div>
      )
    })


    return (
      <div >
        <h1>My Garage Sale</h1>
        {productArray}
        <h1>Cart</h1>
        {currentStateCart}
      </div>
    )

  }

}






export default App;