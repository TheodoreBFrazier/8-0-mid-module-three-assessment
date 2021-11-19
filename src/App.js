import { Component } from 'react';
import "./App.css";
import productData from './data/productData.js';
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

    let productArray = this.state.garageSaleList.map(product => { 
      let { id, name, price, description, img } = product;

      return (
        <div id="test">
          <h1>My Garage Sale</h1>
          <div> Id: {id}</div>
          <div> Name: {name}</div>
          <div> Price: {price} </div>
          <div> Description: {description} </div>
          <div> IMg: {img} </div>
        </div>
      )
    })

    


    return(
      <div>
      {productArray}
      </div>
    )



  }

}






export default App;
