import React, { Component } from 'react';

class FoodItem extends Component {

  state = {
    
    } 
  render() { 
    return (

      <div className="card m-3 bg-success text-white" Style="width: 30rem;">
      <div className="card-body">
        <h5 className="card-title">{this.props.value.id}</h5>
        <h6 className="card-subtitle mb-2 ">Card subtitle</h6>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <button Type="button" onClick={() => this.props.onAdd(this.props.value.id)} className="btn btn-dark position-absolute bottom-0 end-0">Buy</button>
      </div>
    </div>

    );
  }
}
 
export default FoodItem;





