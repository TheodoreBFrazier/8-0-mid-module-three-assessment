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
          <div> Id: {id}</div>
          <div> Name: {name}</div>
          <div> Price: {price} </div>
          <div> Description: {description} </div>
          <img src = {img} alt = "item image" />
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
