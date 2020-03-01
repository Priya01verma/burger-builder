import React from "react";
import Aux from "../../../hoc/Aux";

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
            <ul>{
                ingredientSummary
}</ul>
            <p>Continue to Checkout?</p>
        </Aux>
    );
};
export default orderSummary;
