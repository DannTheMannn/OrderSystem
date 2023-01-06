import React, { Component } from 'react';
import OrderItem from './orderItem';
import "./foodSection.css";
import {TransitionGroup} from 'react-transition-group';
import axios from 'axios';

class AdminSectionComponent extends Component {
    state = {
        data: null,
      };
    
      componentDidMount() {
        this.fetchData();
      }
    
      fetchData = async () => {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    
        this.setState({ data: response.data });
      };
    
      handleDelete = itemid => {
        console.log(itemid)
        console.log(this.state.data)
        const data = this.state.data.filter(c => c.id !== itemid)
        this.setState({data})
      }

      render() {
        const { data } = this.state;
    
        if (!data) {
          return <p>Loading...</p>;
        }
        return (


  
        <div class="scrollbar scrollbar-primary">
        <div class="force-overflow"></div>
        <div class="orderWindow">
        <TransitionGroup className="todo-list">
        {this.state.data.map(data => <OrderItem key={data.id} onDelete={this.handleDelete} value={data}/>)}
        </TransitionGroup>
        </div>
        </div>



        );
    }
}


export default AdminSectionComponent;


