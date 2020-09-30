import * as actionTypes from '../actions/actionTypes';

const initialState = {
	todos: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.ADD_TODO:
			const newTodo = {
				...action.todoData,
				id: action.todoId,
			};
			return {
				...state,
				todos: state.todos.concat(newTodo),
			};
		case actionTypes.FETCH_TODOS:
			return {
				...state,
			};
		case actionTypes.FETCH_TODOS_SUCCESS:
			return {
				...state,
				todos: action.todos,
			};
		case actionTypes.DELETE_TODO:
			return {
				...state,
				todos: state.todos.filter(todo => todo.id !== action.todoId),
			};
		default:
			return state;
	}
};

export default reducer;
