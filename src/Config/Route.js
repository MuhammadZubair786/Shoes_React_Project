import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../Components/Home';
import Product from '../Components/Product';
// import Product from './Components/Product';
import ProductItem from '../Components/ProductItem';
import NavBar from '../Components/Navbar';
import Card from '../Components/Card'
import Checkout from '../Components/Checkout'

function RouteConfig() {

  return (
	<div>
        <Router>
          <NavBar />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/product" component={Product}/>
                <Route path="/product/:id" component={ProductItem}/>
                <Route path="/cart" component={Card}/>
                <Route path='/checkout' component={Checkout}/>



              
               <Route path="*" component={()=><h2>404 Not Found</h2>}/> 
            </Switch>
        </Router>
	</div>
  );
}

export default RouteConfig;