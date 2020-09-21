import React from 'react';

class Counter extends React.Component{

	state = {
		count: 0
	};

	handleIncrement = () => {
		this.setState({count: this.state.count + 1});
	}

	handleDecrement = () => {
		this.setState({ count: this.state.count - 1})
	}

	render(){
		return (
		<div className="card">
		  <div className="card-header">
		    Basic counter functioning
		  </div>
		  <div className="card-body">
		    <h5 className="card-title">Count : {this.state.count}</h5>
		    <button className="btn btn-primary" onClick = {this.handleIncrement}>Increment</button>
		  	<button className="btn btn-primary" onClick = {this.handleDecrement}>Decrement</button>
		  </div>
		</div>
		)
	}

}

export default Counter;