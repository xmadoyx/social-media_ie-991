import axios from 'axios';

export const AxiosInstance = () =>{
    return axios.create({
        baseURL : "http://localhost:8000",
        headers : {
            API_KEY : "hamid123"
        }
    });
}

export const getAxiosInstanceApi = () =>{
    return axios.create({
        baseURL : "https://twitterapi.liara.run/api",
        headers : {
             'Content-Type' : 'application/json',
            'x-auth-token' : localStorage.getItem("x_auth_token")
        }
    });
}
