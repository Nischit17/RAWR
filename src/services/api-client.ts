import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'e38beb6e1e154e97b8469725a3039331'
    }
})