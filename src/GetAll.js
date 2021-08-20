import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { IsConstructor } from 'es-abstract';

class GetAll extends Component {

  constructor(props){
    super(props);
    // initialize the state of products to an empty array
    this.state = {products:[]};
  }

  componentDidMount(){
    const axios = require('axios');
    axios.get('http://localhost:8080/api/products/')
      .then(response =>{
        console.log(response.data);

        this.setState({products: response.data});
      }).catch(error => {
        console.error('Error',error);
      })  
  }

  render() {
    return (
      <div>
        <h1>Products:</h1>
      </div>
    );
  }


}

export default GetAll;
