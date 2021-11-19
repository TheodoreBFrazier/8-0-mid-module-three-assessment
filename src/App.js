import { Component } from 'react';
import "./App.css";
import data from './data/productData.js'


class App extends Component {
  constructor() {
    super()
    this.state = {
      garageSaleList: data.productData,
      cartProducts: [],
      

    }
  }

  




  render() {

    return (
      <div>
        <h1>Hello, world!!</h1>
      </div>
    )
  };

}






export default App;
