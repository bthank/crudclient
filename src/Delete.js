import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { IsConstructor } from 'es-abstract';

class Delete extends Component {

  constructor(props){
    super(props);
    // initialize the state of products to an empty object
    this.state = {product:{}};
  }

  onIdChange = (event) =>{
    this.setState({id: event.target.value});
  }

  deleteProduct(){
    // make an Ajax call to retrieve a single product
    const axios = require('axios');
    axios.delete("http://localhost:8080/api/products/" + this.state.id)
      .then(response => {
        console.log(response.data);
        
      }).catch(error => {
        console.error('Error',error);
      })  
  }

  render() {
    return (
      <div>
         Enter Product ID: <input onChange={this.onIdChange}/>
         <button onClick={this.deleteProduct.bind(this)}>Delete Product</button>
         <br/><br/>

      </div>
    );
  }


}

export default Delete;
