import React from "react";
import "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
    let transformIngredients = Object.keys(props.ingredients).map(igkey => {
        return [...Array(props.ingredients[igkey])].map((_, i) => {
            return <BurgerIngredient key={i} type={igkey} />;
        })
    }).reduce((arr,el) =>{
        return arr.concat(el)
    },[])
    if(transformIngredients.length === 0){
        transformIngredients = <p className={'Text-center'}>Please start adding ingredient</p>
    }
    return (
        <div >
            <BurgerIngredient type={"bread-top"} />
            {transformIngredients}
            <BurgerIngredient type={"bread-bottom"} />
        </div>
    );
};
export default burger;
