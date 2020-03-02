import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";

const orderSummary = props => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return (
            <li key={igKey}>
                <span style={{ textTransform: "uppercase" }}>{igKey}</span> :{" "}
                {props.ingredients[igKey]}
            </li>
        );
    });
    return (
        <Aux>
            <h3>Yours Order</h3>
            <p>A delicious burger with a following ingredients: </p>
            <ul>{ingredientSummary}</ul>
            <p>Continue to Checkout?</p>
            <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
            <Button btnType={'Success'} clicked={props.purchaseContinue}>CONTINUE</Button>
            <Button btnType={'Danger'} clicked={props.purchaseCancel}>CANCEL</Button>
        </Aux>
    );
};
export default orderSummary;
