import React, { Component } from "react";
import Aux from "../../../hoc/Aux/Aux";
import Button from "../../UI/Button/Button";

class  OrderSummary  extends Component {

    // this should be function component becz componentDidUpdate is not required anymore becz in Modal.js we use two lifecycle method that help the ordersummary component to get rid of modal re-rendering which is done by ordersummary changes.
    // we make changes in modal file because they wrap up modal summary component
    componentDidUpdate(){
        console.log("cljglfdjglfjhfhg componentDidUpdate");
    }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{ textTransform: "uppercase" }}>{igKey}</span> :{" "}
                    {this.props.ingredients[igKey]}
                </li>
            );
        });
        return (
            <Aux>
                <h3>Yours Order</h3>
                <p>A delicious burger with a following ingredients: </p>
                <ul>{ingredientSummary}</ul>
                <p>Continue to Checkout?</p>
                <p>
                    <strong>Total Price: ${this.props.price.toFixed(2)}</strong>
                </p>
                <Button btnType={"Success"} clicked={this.props.purchaseContinue}>
                    CONTINUE
                </Button>
                <Button btnType={"Danger"} clicked={this.props.purchaseCancel}>
                    CANCEL
                </Button>
            </Aux>
        );
    }
};
export default OrderSummary;
