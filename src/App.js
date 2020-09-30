import React, { Component } from 'react';
import { connect } from 'react-redux';
import Todos from './components/Todos';
import * as actions from './store/actions/index';

class App extends Component {
	componentDidMount() {
		this.props.onFetchTodos();
	}

	render() {
		return (
			<div className='container'>
				<h3 className='center'>Todos App</h3>
				<Todos todos={this.props.todos} />
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		todos: state.todos,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onFetchTodos: () => dispatch(actions.fetchTodos()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
