import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';

const AddTodo = props => {
	// state = {
	// 	content: '',
	// };

	const [content, setContent] = useState('');

	const changeHandler = event => {
		// this.setState({
		// 	content: event.target.value,
		// });
		setContent(event.target.value);
	};
	const addTodoHandler = event => {
		event.preventDefault();
		console.log(content);
		const todoData = {
			content: content,
		};
		props.onAddTodo(todoData);
		// this.setState({
		// 	content: '',
		// });
		setContent('');
	};
	return (
		<div className='row'>
			<form onSubmit={addTodoHandler}>
				<div className='col s10'>
					<input
						type='text'
						onChange={changeHandler}
						value={content}
						placeholder='Add New Todo'
					/>
				</div>
				<div className='col s2'>
					<button
						className='waves-effect waves-light btn blue'
						onClick={addTodoHandler}
					>
						Add
					</button>
				</div>
			</form>
		</div>
	);
};

const mapDispatchToProps = dispatch => {
	return {
		onAddTodo: todoData => dispatch(actions.addTodo(todoData)),
	};
};

export default connect('', mapDispatchToProps)(AddTodo);
