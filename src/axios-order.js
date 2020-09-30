import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://todoapp-fff85.firebaseio.com/',
});

export default instance;
