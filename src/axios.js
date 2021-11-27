import axios from 'axios';


// Connecting intance to Heruko
const instance = axios.create({
    baseURL: "https://rennlad-tiktok-backend.herokuapp.com/"
});



export default instance;