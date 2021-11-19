import React from "react"

class AllProducts extends React.Component {


    constructor() {
        super();

        this.state = {
            products: data.productData,
            cartProducts: [],
        }

    }

    render() {
        let productArray = this.state.products.map(product => {
            let { name, price, description, img } = product;
            return (
                <div id="items-display">
                    <div id="item">
                        <div> <h3>{name}</h3> </div>
                        <div> Price: ${price.toFixed(2)} </div>
                        <button name="" onClick={() => this.itemClick(product)}> Add To Cart </button>
                        <img src={img} alt="item image" />
                        <div> Description: {description} </div>
                    </div>
                    <div productArray = "test">{productArray}</div>
                </div>
            )
        })



    }
}

export default AllProducts
