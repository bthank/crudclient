import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { IsConstructor } from 'es-abstract';

class Get extends Component {

  constructor(props){
    super(props);
    // initialize the state of products to an empty object
    this.state = {product:{}};
  }

  onIdChange = (event) =>{
    this.setState({id: event.target.value});
  }

  getProduct(){
    // make an Ajax call to retrieve a single product
    const axios = require('axios');
    axios.get("http://localhost:8080/api/products/" + this.state.id)
      .then(response => {
        // take the 0th element of the array and assign it to the product object
        this.setState({product: response.data[0]});
      })
  }

  render() {
    return (
      <div>
         Enter Product ID: <input onChange={this.onIdChange}/>
         <button onClick={this.getProduct.bind(this)}>Get Product</button>
         <br/><br/>
         Id: {this.state.product.id}<br/>
         Name: {this.state.product.name}<br/>
         Desc: {this.state.product.description}<br/>
         Price: {this.state.product.price}<br/>
      </div>
    );
  }


}

export default Get;
