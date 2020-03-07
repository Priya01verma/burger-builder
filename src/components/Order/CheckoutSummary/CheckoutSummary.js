import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import "./CheckoutSummary.css";

const checkoutSummary =(props) =>{
    return(
        <div>
            <h1>We hope it taste well.</h1>
            <div style={{width: '100%', margin: "auto" }}>
                <Burger ingredients={props.ingredients} />
                <Button btnType= "Danger" clicked={props.checkoutCancelled} > Cancel </Button>
                <Button btnType= "Success" clicked={props.checkoutContinue}> Checkout </Button>
            </div>
        </div>
    )
}

export default checkoutSummary; 