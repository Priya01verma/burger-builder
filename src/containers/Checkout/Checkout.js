import React ,{Component} from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends Component{
    state ={
        ingredients:{
            meat: 1,
            salad: 2,
            bacon: 1,
            cheese: 2
        }
    }
    checkoutCancelled=() =>{
        this.props.history.goBack();
    }
    checkoutContinue =() =>{
       this.props.history.replace("/checkout/contact-data");
    }
    render(){
        return(
            <CheckoutSummary ingredients={this.state.ingredients} checkoutCancelled={this.checkoutCancelled} checkoutContinue={this.checkoutContinue} />
        )
    }
}
export default Checkout;