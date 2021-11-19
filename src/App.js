import { Component } from 'react';
import "./App.css";
import data from './data/productData.js'
import Form from './components/Cart'

class App extends Component {

  constructor() {
    super()
    this.state = {
      products: data.productData,
      cartProducts: [],


    }
  }


  itemClick = (products) => {
    if (this.state.cartProducts > 0) {
      return;
    }

    this.setState({
      cartProducts: [...this.state.cartProducts, products],



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