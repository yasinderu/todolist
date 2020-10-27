import React, { useState } from 'react';

const TodoItem = props => {
	const [clicked, setClicked] = useState(false);
	const [value, setValue] = useState('');
	let content = <span className='col s8'>{props.todo.content}</span>;
	if (clicked) {
		content = (
			<input
				className='col s8'
				value={value}
				type='text'
				onChange={e => setValue(e.target.value)}
			/>
		);
	}
	return (
		<div className='row collection-item'>
			{content}
			<div className='row col s4'>
				<div className='col s6'>
					<button
						className='waves-effect waves-light btn blue'
						onClick={() => setClicked(!clicked)}
					>
						Update
					</button>
				</div>
				<div className='col s6'>
					<button
						className='waves-effect waves-light btn red'
						onClick={() => props.delete(props.todo.id)}
					>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
};

export default TodoItem;
