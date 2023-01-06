import React, { Component } from 'react';
import OrderItem from './orderItem';
import axios from 'axios';
import "./flex.css";
import CartComponent from './cartComponent';
class FoodComponent extends Component {
    state = {
        data: null,
        items: [],
        total: 0
      };
    
      componentDidMount() {
        this.fetchData();
      }
    
      fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    
        this.setState({ data: response.data });
      };
    


      
  addToCart = (item) => {

    this.setState((state) => ({
      items: [...state.items, item],
    }));


    this.setState((state) => ({
      total: state.total + item.price,
    }));
  };


  deleteFromCart = (item) => {
 
    this.setState((state) => ({
      items: state.items.filter((i) => i !== item),
    }));


    this.setState((state) => ({
      total: state.total - item.price,
    }));
  };


  placeOrder = () => {

  };
      render() {
        const { data } = this.state;
    
        if (!data) {
          return <div class="spinner-grow" role="status">
                 <span class="sr-only">Loading...</span>
                 </div>;
        }
        return (

        <div class="flexbox-container">
        <div className="p-3 mb-2" style={{flex: 3}}>
        {this.state.data.map(data => <OrderItem key={data.id} onAdd={this.addToCart} value={data}/>)}
        </div>  
        <div className="p-3 mb-2" style={{flex: 2, height: 700}}>
            <CartComponent/>
        </div>
        </div>




        );}


}
 
export default FoodComponent;