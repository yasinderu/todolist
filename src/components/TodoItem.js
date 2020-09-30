import React from 'react';

const todoItem = props => {
	return (
		<div className='row collection-item'>
			<span className='col s10'>{props.todo.content}</span>
			<div className='col s2'>
				<button
					className='waves-effect waves-light btn red'
					onClick={() => props.delete(props.todo.id)}
				>
					Delete
				</button>
			</div>
		</div>
	);
};

export default todoItem;
