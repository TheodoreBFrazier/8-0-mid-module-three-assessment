import { Component } from "react";

class Cart extends Component {
    constructor () {
        super()
        this.setState = {





            render() {
                return(
                    
                    <form onSubmit = {(event) => this.props.handleSubmit(event, this)}>
                        <label htmlFor = "first-name"> First Name</label>
                        <input
                        onInput = {this.handleUserInput}
                        value={this.state.firstName}
                        type="text"
                        name= "first"
                        id="first-name-input"
                        />

                        <br />

                        <label htmlFor = "last-name"> Last Name</label>
                        <input
                        onInput = {this.handleUserInput}
                        value={this.state.lastName}
                        type="text"
                        name= "last"
                        id="last-name-input"
                        />

                        <br />

                        <label htmlFor = "credit-card"> Credit Card </label>
                        <input
                        onInput = {this.handleUserInput}
                        value={this.state.userCC}
                        type="text"
                        name= "cc"
                        id="cc-input"                       
                        />

                        <br />

                        <label htmlFor = "zip-code"> Credit Card </label>
                        <input
                        onInput = {this.handleUserInput}
                        value={this.state.zipCode}
                        type="text"
                        name= "zip"
                        id="cc-input"                       
                        />

                        <br />

                        <button type = "submit"> Buy Now</button>





                    </form>
                )
            }

        }
    }
}

export default Cart;