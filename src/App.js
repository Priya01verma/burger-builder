import React from 'react';
import Layout from "../src/hoc/layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
function App() {
  return (
    <div>
      <Layout>
        {/* <p>dppppkkfgkdhfkdhfgkhfd</p> */}
        <BurgerBuilder />
      </Layout>
    </div>
  );
}

export default App;
