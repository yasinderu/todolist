import React from 'react';
import { connect } from 'react-redux';
import AddTodo from './AddTodo';
import TodoItem from './TodoItem';
import * as actions from '../store/actions/index';

const Todos = props => {
	const deleteTodoHandler = id => {
		props.onDeleteTodo(id);
	};
	const todoList = props.todos.length ? (
		props.todos.map(todo => {
			return <TodoItem delete={deleteTodoHandler} key={todo.id} todo={todo} />;
		})
	) : (
		<p className='center'>You have no todo's left</p>
	);
	console.log(props.todos);
	return (
		<div className='todos collection'>
			<AddTodo />
			{todoList}
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		onDeleteTodo: id => dispatch(actions.deleteTodo(id)),
	};
};

export default connect('', mapDispatchToProps)(Todos);
