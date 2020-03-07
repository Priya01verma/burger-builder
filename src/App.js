import React from "react";
import Layout from "../src/hoc/layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import { BrowserRouter, Route } from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div>
                <Layout>
                  <Route exact path = "/" component={BurgerBuilder}/>
                  <Route exact path = "/checkout" component={Checkout}/>
                    {/* <p>dppppkkfgkdhfkdhfgkhfd</p> */}
                    {/* <BurgerBuilder />
                    <Checkout /> */}
                </Layout>
            </div>
        </BrowserRouter>
    );
}

export default App;
