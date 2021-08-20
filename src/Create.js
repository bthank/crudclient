import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { IsConstructor } from 'es-abstract';

class Create extends Component {

  constructor(props){
    super(props);
    // initialize the state of products to an empty object
    this.state = {product:{}};
  }

  onIdChange = (event) =>{
    this.setState({id: event.target.value});
  }
  onNameChange = (event) =>{
    this.setState({name: event.target.value});
  }
  onDescriptionChange = (event) =>{
    this.setState({description: event.target.value});
  }
  onPriceChange = (event) =>{
    this.setState({price: event.target.value});
  }
   
  createProduct(event){
    const axios = require('axios');
    axios.post('http://localhost:8080/api/products/',
    { id: this.state.id,
      name: this.state.name,
      description: this.state.description,
      price: this.state.price})
        .then(response => {
          console.log(response.data)
        }).catch(error => {
          console.error('Error',error);
        })  
  }


  render() {
    return (
      <div>
         Enter Id: <input onChange={this.onIdChange}/><br/>
         Enter Product Name: <input onChange={this.onNameChange}/><br/>
         Enter Product Description: <input onChange={this.onDescriptionChange}/><br/>
         Enter Product Price: <input onChange={this.onPriceChange}/><br/>
         <button onClick={this.createProduct.bind(this)}>Create Product</button>
         <br/><br/>
          
      </div>
    );
  }


}

export default Create;
