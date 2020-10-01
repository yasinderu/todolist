import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import * as actions from '../store/actions/index';

class Todos extends Component {
	deleteTodoHandler = id => {
		this.props.onDeleteTodo(id);
	};

	render() {
		const todoList = this.props.todos.length ? (
			this.props.todos.map(todo => {
				return (
					<TodoItem
						delete={this.deleteTodoHandler}
						key={todo.id}
						todo={todo}
					/>
				);
			})
		) : (
			<p className='center'>You have no todo's left</p>
		);
		console.log(this.props.todos);
		return (
			<div className='todos collection'>
				<AddTodo />
				{todoList}
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onDeleteTodo: id => dispatch(actions.deleteTodo(id)),
	};
};

export default connect('', mapDispatchToProps)(Todos);
