import React, {Component} from 'react';
import './App.css';
import Filter from './Filter';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

let PRODUCTS = {
    '1': {id: 1, category: 'Sports', price: '$99.99', name: 'Cricket-Bat'},
    '2': {id: 2, category: 'Sports', price: '$50', name: 'Ball'},
    '3': {id: 3, category: 'Sports', price: '$19.99', name: 'Gloves'},
    '4': {id: 4, category: 'Electronics', price: '$799', name: 'Samsung Note 10'},
    '5': {id: 5, category: 'Electronics', price: '$699', name: 'TV 65inch'},
    '6': {id: 6, category: 'Electronics', price: '$999', name: 'Sony PlayStation'}
};

class Product extends Component {

    constructor(props) {
      super(props);
      this.state = {
          products : PRODUCTS,
          filterText : ''
        }
    }

    handleFilter = (filterInput) => {
      this.setState(filterInput);
    }

    handleSave = (product) => {
      if (!product.id) {
           product.id = new Date().getTime()
      }
      this.setState((prevState) => {
        let products = prevState.products
        products[product.id] = product
        return { products }
      });

    }
    handleDestroy = (productId) => {
      this.setState((prevState) => {
        let products = prevState.products
        delete products[productId]
        return { products }
      });
  }

    render() {
      return (
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-md-6">
              <h1>My Inventory</h1>
              <Filter 
                  onFilter={this.handleFilter}/>
  
              <ProductTable 
                  products={this.state.products} 
                  filterText={this.state.filterText}
                  onDestroy={this.handleDestroy}/>
  
              <ProductForm
                  onSave={this.handleSave}/>
              </div>
          </div>
        </div>
      )
    }
  }
  
  export default Product;