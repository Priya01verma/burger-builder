import React, { Component } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Aux from "../../hoc/Aux/Aux";
import axios from "../../axios-order";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICE = {
    bacon: 0.7,
    cheese: 0.4,
    salad: 0.5,
    meat: 1.3
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    };
    componentDidMount(){
        axios.get("https://react-my-burger-64a92.firebaseio.com/ingredients.json").then(
            response =>{
                this.setState({ingredients: response.data})
            }
        ).catch(
            error =>{
                this.setState({error: true})
            }
        )
    }
    updatePurchaseState = ingredients => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => (sum = sum + el), 0);
        this.setState({ purchasable: sum > 0 });
    };
    addIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    };
    removeIngredientHandler = type => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    };
    purchaseHandler = () => {
        this.setState({ purchasing: true });
    };
    purchaseCloseHandler = () => {
        this.setState({ purchasing: false });
    };
    purchaseContinueHandler = () => {
        // alert("To continue!!!!");
        // this.setState({loading: true})
        // const order = {
        //     ingredients: this.state.ingredients,
        //     totalPrice: this.state.totalPrice,
        //     customer: {
        //         name: "priya verma",
        //         contact: "sdljfsdljfdl"
        //     },
        //     email: "abc@gmail.com"
        // };
        // axios
        //     .post("order.json", order)
        //     .then(response => {
        //         this.setState({loading: false, purchasing: false})
        //     })
        //     .catch(err => {
        //         this.setState({loading: false, purchasing: false})
        //     });
        this.props.history.push("/checkout");
    };
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        let orderSummary = (
            <OrderSummary // here we use componentDidUpdate lifecycle method because we only want want to update(or rerender order summary componenet we don't want to re render the modal that can be used or wrap ordersummary component)
                ingredients={this.state.ingredients}
                purchaseCancel={this.purchaseCloseHandler}
                price={this.state.totalPrice}
                purchaseContinue={this.purchaseContinueHandler}
            />
        );
        if (this.state.loading) {
            orderSummary = <Spinner />;
        }
        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCloseHandler}
                >
                    { this.state.ingredients ?orderSummary : null}
                </Modal>
                {
                    this.state.ingredients ?  <Aux>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls
                        ingredientAdded={this.addIngredientHandler}
                        ingredientRemoved={this.removeIngredientHandler}
                        disabled={disabledInfo}
                        purchasable={this.state.purchasable}
                        price={this.state.totalPrice}
                        ordered={this.purchaseHandler}
                    />
                    </Aux>
                    : <Spinner />
                }
               
            </Aux>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);
