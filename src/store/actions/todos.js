import * as actionTypes from './actionTypes';
import axios from '../../axios-order';

export const addTodoSuccess = (id, todoData) => {
	return {
		type: actionTypes.ADD_TODO,
		todoId: id,
		todoData: todoData,
	};
};

export const addTodoFail = error => {
	return {
		type: actionTypes.ADD_TODO_FAIL,
		error: error,
	};
};

export const addTodo = todoData => {
	return dispatch => {
		axios
			.post('/todos.json', todoData)
			.then(res => {
				console.log(res.data.name);
				dispatch(addTodoSuccess(res.data.name, todoData));
			})
			.catch(error => {
				console.log(error);
				dispatch(addTodoFail(error));
			});
	};
};

export const fetchedTodosSuccess = todosData => {
	return {
		type: actionTypes.FETCH_TODOS_SUCCESS,
		todos: todosData,
	};
};

export const updateTodoSuccess = (id, todoData) => {
	return {
		type: actionTypes.UPDATE_TODO,
		todos: todoData,
		todoId: id,
	};
};

export const deleteTodoSuccess = id => {
	return {
		type: actionTypes.DELETE_TODO,
		todoId: id,
	};
};

export const fetchTodos = () => {
	return dispatch => {
		axios
			.get('/todos.json')
			.then(res => {
				// console.log(res.data);
				const fetchedTodos = [];
				for (let key in res.data) {
					fetchedTodos.push({
						...res.data[key],
						id: key,
					});
				}
				dispatch(fetchedTodosSuccess(fetchedTodos));
			})
			.catch(error => {
				console.log(error);
			});
	};
};

export const updateTodo = (id, todoData) => {
	return dispatch => {
		axios
			.put('/todos.json' + id, todoData)
			.then(res => {
				console.log(id);
			})
			.catch(error => {
				console.log(error);
			});
	};
};

export const deleteTodo = id => {
	return dispatch => {
		axios
			.delete('/todos/' + id + '.json')
			.then(res => {
				console.log(id);
				dispatch(deleteTodoSuccess(id));
			})
			.catch(error => {
				console.log(error);
			});
	};
};
