import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

//add changes
class AddTodo extends Component {
	state = {
		content: '',
	};

	changeHandler = event => {
		this.setState({
			content: event.target.value,
		});
	};
	addTodoHandler = event => {
		event.preventDefault();
		console.log(this.state.content);
		const todoData = {
			content: this.state.content,
		};
		this.props.onAddTodo(todoData);
		this.setState({
			content: '',
		});
	};
	render() {
		return (
			<div className='row'>
				<form onSubmit={this.addTodoHandler}>
					<div className='col s10'>
						<input
							type='text'
							onChange={this.changeHandler}
							value={this.state.content}
							placeholder='Add New Todo'
						/>
					</div>
					<div className='col s2'>
						<button
							className='waves-effect waves-light btn blue'
							onClick={this.addTodoHandler}
						>
							Add
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAddTodo: todoData => dispatch(actions.addTodo(todoData)),
	};
};

export default connect('', mapDispatchToProps)(AddTodo);
