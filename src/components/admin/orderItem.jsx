import React, { Component } from 'react';
import {CSSTransition} from 'react-transition-group';

class OrderItem extends Component {

  state = {
    
    } 
  render() { 
    return (
      <CSSTransition
      key={this.props.value.id}
      timeout={500}
      classNames="item"
      >
      <div className="card m-3 bg-primary text-white" Style="width: 30rem;">
      <div className="card-body">
        <h5 className="card-title">{this.props.value.name}</h5>
        <h6 className="card-subtitle mb-2 ">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button Type="button" onClick={() => this.props.onDelete(this.props.value.id)} Class="btn btn-dark position-absolute bottom-0 end-0">Done</button>
      </div>
    </div>

    </CSSTransition>

    );
  }
}
 
export default OrderItem;





