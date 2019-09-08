import axios from 'axios';


const instance = axios.create({
    baseURL:'https://burger-builder-react-cd25d.firebaseio.com/'
});

export default instance;

